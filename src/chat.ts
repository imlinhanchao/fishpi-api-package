import ReconnectingWebSocket from 'reconnecting-websocket';
import { request, domain, toMetal, isBrowse } from './utils';
import { 
    ChatData, ChatRevoke, NoticeMsg, 
} from './typing';

class Chat {
    private _apiKey:string = '';
    private _rwss:{ [key: string]: ReconnectingWebSocket } = {};
    private _wsCallbacks:{ [key: string]: Array<Function> } = {};

    constructor(token:string='') {
        if (!token) { return; }
        this._apiKey = token;
    }

    /**
     * 重新设置请求 Token
     * @param apiKey 接口 API Key
     */
    setToken(apiKey:string) {
        this._apiKey = apiKey;
    }

    /**
     * 获取有私聊用户列表第一条消息
     * @returns 私聊消息列表
     */
    async list():Promise<ChatData[]> {
        try {
            let rsp = await request({
                url: `chat/get-list?apiKey=${this._apiKey}`
            });

            if (rsp.code) throw new Error(rsp.msg)

            return rsp.data;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 获取用户私聊历史消息
     * @param param 消息参数
     * @returns 私聊消息列表
     */
    async get({ user, page= 1, size= 20, autoRead= true }:{ user:string, page?: number, size?: number, autoRead?: boolean }):Promise<ChatData[]> {
        try {
            let rsp = await request({
                url: `chat/get-message?apiKey=${this._apiKey}&toUser=${user}&page=${page}&pageSize=${size}`
            });

            if (rsp.code) throw new Error(rsp.msg)

            if (autoRead) this.markRead(user);

            return rsp;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 标记用户消息已读
     * @param user 用户名
     * @returns 执行结果
     */
    async markRead(user:string):Promise<void> {
        try {
            let rsp = await request({
                url: `chat/mark-as-read?apiKey=${this._apiKey}&fromUser=${user}`
            });

            if (rsp.code) throw new Error(rsp.msg)
        } catch (e) {
            throw e;
        }
    }

    /**
     * 获取未读消息
     * @returns 未读消息列表
     */
    async unread():Promise<ChatData> {
        try {
            let rsp = await request({
                url: `chat/has-unread?apiKey=${this._apiKey}`
            });

            if (rsp.code) throw new Error(rsp.msg)

            return rsp.data;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 撤回私聊消息
     * @param msgId 消息 ID
     */
    async revoke(msgId:string): Promise<number> {
        try {
            let rsp = await request({
                url: `chat/revoke?apiKey=${this._apiKey}&oId=${msgId}`
            });
            
            if (rsp.code) throw new Error(rsp.msg)

            return rsp.result;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 移除聊天室消息监听函数
     * @param user 指定用户消息监听函数，空为新信息监听
     * @param wsCallback 要移除的函数，若为空，则清空消息监听
     */
     removeListener(user:string = '', wsCallback: ({ msg }: { msg: NoticeMsg | ChatRevoke | ChatData }) => void) {
        if (wsCallback == null) delete this._wsCallbacks[user];
        if (!this._wsCallbacks[user] || this._wsCallbacks[user].indexOf(wsCallback) < 0) return;
        this._wsCallbacks[user].splice(this._wsCallbacks[user].indexOf(wsCallback), 1);
    }

    /**
     * 添加聊天室消息监听函数
     * @param wsCallback 消息监听函数
     * @param user 指定为用户消息监听函数，空为新信息监听
     */
     async addListener(wsCallback: ({ msg }: { msg: NoticeMsg | ChatRevoke | ChatData }) => void, user:string = '') {
        if (this._rwss[user]) { 
            if (this._wsCallbacks[user].indexOf(wsCallback) < 0) 
                this._wsCallbacks[user].push(wsCallback);
            return;
        }
        this._wsCallbacks[user] = this._wsCallbacks[user] || []
        this._wsCallbacks[user].push(wsCallback);
        this.connect(user);
    }

    /**
     * 连接用户私聊频道
     * @param user 私聊用户名
     * @returns Websocket 连接对象
     */
    connect(user:string):Promise<ReconnectingWebSocket> {
        return new Promise(async (resolve, reject) => {
            if (this._rwss[user]) return resolve(this._rwss[user]);
            this._rwss[user] = new ReconnectingWebSocket(user ? 
                `wss://${domain}/chat-channel?apiKey=${this._apiKey}&toUser=${user}`
                : `wss://${domain}/user-channel?apiKey=${this._apiKey}`, [], {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    WebSocket: isBrowse ? window.WebSocket : (await import('ws')).WebSocket,
                    connectionTimeout: 10000
                }
            );
    
            this._rwss[user].onopen = (e) => {
                resolve(this._rwss[user])
            };
            this._rwss[user].onmessage = async (e) => {
                let data:any = Object.assign({}, e);
                data.msg = JSON.parse(e.data);
                (this._wsCallbacks[user] || []).forEach(call => call(data));
            };
            this._rwss[user].onerror = (e) => {
                reject(e);
            };
            this._rwss[user].onclose = (e) => {
                delete this._rwss[user];
            };
        })
    }

    /**
     * 
     * @param user 私聊用户名
     * @param content 私聊内容
     * @returns Websocket 连接对象
     */
    async send(user:string, content:string):Promise<ReconnectingWebSocket> {
        if (!this._rwss[user]) await this.connect(user);
        this._rwss[user].send(content);
        return this._rwss[user];
    }
}

export default Chat;