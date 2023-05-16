import ReconnectingWebSocket from 'reconnecting-websocket';
import { request, domain, toMetal, isBrowse, clientToVia } from './utils';
import { 
    ApiResponse, ChatContentType, ChatMessageType, ClientType, ChatRoomMessage, GestureType, Message, MuteItem, RedPacket, RedPacketInfo 
} from './typing';

class ChatRoom {
    private _apiKey:string = '';
    private _discusse:string = '';
    private _onlines:Array<any>=[];
    private _rws:ReconnectingWebSocket | null = null;
    private _wsTimer:NodeJS.Timeout | null = null;
    private _wsCallbacks:Array<Function> = [];
    private _client:ClientType | string = ClientType.Other;
    private _version:string = 'Latest';

    constructor(token:string='') {
        if (!token) { return; }
        this._apiKey = token;
    }

    /**
     * 当前在线人数列表，需要先调用 addListener 添加聊天室消息监听
     */
    get onlines() {
        return this._onlines;
    }

    /**
     * 当前聊天室话题，需要先调用 addListener 添加聊天室消息监听
     */
    get discusse() {
        return this._discusse;
    }

    /**
     * 設置当前聊天室话题
     */
    set discusse(val) {
        this.send(`[setdiscuss]${val}[/setdiscuss]`);
    }

    /**
     * 重新设置请求 Token
     * @param apiKey 接口 API Key
     */
    setToken(apiKey:string) {
        this._apiKey = apiKey;
    }

    /**
     * 设置当前来源类型
     * @param client 来源类型
     * @param version 版本号
     */
    setVia(client:ClientType | string, version:string) {
        this._client = client;
        this._version = version;
    }

    /**
     * 查询聊天室历史消息
     * @param page 消息页码
     */
    async more(page=1, type=ChatContentType.HTML):Promise<ApiResponse<Array<ChatRoomMessage>>> {
        try {
            let rsp = await request({
                url: `chat-room/more?page=${page}&type=${type}&apiKey=${this._apiKey}`
            });

            if (rsp.code != 0) {
                throw new Error(rsp.msg);
            }

            if (!rsp.data) return rsp;
            let redpacket;
            (rsp.data as Array<any>).forEach((d, i, data) => {
                try {
                    data[i].via = clientToVia(data[i].client)
                    data[i].sysMetal = toMetal(data[i].sysMetal);
                    redpacket = JSON.parse(d.content);
                    if (redpacket.msgType !== 'redPacket') return rsp;
                    if (redpacket.recivers) redpacket.recivers = JSON.parse(redpacket.recivers);
                    data[i].content = redpacket;
                } catch (e) {}
            })

            return rsp;
        } catch (e) {
            throw e;
        }
    }

    async get(data:{ oId:string, mode:ChatMessageType.Context, size:25, type:ChatContentType.HTML }):Promise<ApiResponse<Array<ChatRoomMessage>>> {
        try {
            let rsp = await request({
                url: `chat-room/getMessage?oId=${data.oId}&mode=${data.mode}&size=${data.size}&type=${data.type}&apiKey=${this._apiKey}`
            });

            if (rsp.code != 0) {
                throw new Error(rsp.msg);
            }

            if (!rsp.data) return rsp;
            let redpacket;
            (rsp.data as Array<any>).forEach((d, i, data) => {
                try {
                    data[i].via = clientToVia(data[i].client)
                    data[i].sysMetal = toMetal(data[i].sysMetal);
                    redpacket = JSON.parse(d.content);
                    if (redpacket.msgType !== 'redPacket') return rsp;
                    if (redpacket.recivers) redpacket.recivers = JSON.parse(redpacket.recivers);
                    data[i].content = redpacket;
                } catch (e) {}
            })

            return rsp;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 撤回消息，普通成员 24 小时内可撤回一条自己的消息，纪律委员/OP/管理员角色可以撤回任意人消息
     * @param oId 消息 Id
     */
     async revoke(oId:string):Promise<ApiResponse<undefined>> {
        let rsp;
        try {
            rsp = await request({
                url: `chat-room/revoke/${oId}`,
                method: 'delete',
                data: {
                    apiKey: this._apiKey
                },
            });

            return rsp;            
        } catch (e) {
            throw e;
        }
    }

    /**
     * 发送一条消息
     * @param msg 消息内容，支持 Markdown
     */
     async send(msg:string, clientType?: ClientType | string, version?: string):Promise<ApiResponse<undefined>> {
        let rsp;
        try {
            rsp = await request({
                url: `chat-room/send`,
                method: 'post',
                data: {
                    content: msg,
                    client: `${clientType || this._client}/${version || this._version}`,
                    apiKey: this._apiKey
                },
            });

            return rsp;            
        } catch (e) {
            throw e;
        }
    }

    /**
     * 发送一条弹幕
     * @param msg 消息内容，支持 Markdown
     * @param color 弹幕颜色
     */
    async barrage(msg:string, color:string='#ffffff'):Promise<ApiResponse<undefined>> {
        let rsp;
        try {
            rsp = await request({
                url: `chat-room/send`,
                method: 'post',
                data: {
                    content: `[barrager]{\"color\":\"${color}\",\"content\":\"${msg}\"}[/barrager]`,
                    apiKey: this._apiKey
                },
            });

            return rsp;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 获取弹幕发送价格
     * @returns 返回价格`cost`与单位`unit`
     */
    async barragePay(): Promise<{ cost: number; unit: string }> {
        let rsp;
        try {
            rsp = await request({
                url: `cr?apiKey=${this._apiKey}`,
                method: 'get'
            });

            let mat = rsp.match(/>发送弹幕每次将花费\s*<b>([-0-9]+)<\/b>\s*([^<]*?)<\/div>/);
            if (mat) {
                return {
                    cost: parseInt(mat[1]),
                    unit: mat[2]
                }
            }

            return {
                cost: 20,
                unit: '积分'
            };
        }
        catch (e) {
            throw e;
        }
    }

    /**
     * 获取禁言中成员列表（思过崖）
     */
    async mutes(): Promise<ApiResponse<Array<MuteItem>>> {
        let rsp;
        try {
            rsp = await request({
                url: `chat-room/si-guo-list`,
                method: 'get',
            });

            return rsp;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 获取消息原文（比如 Markdown）
     * @param oId 消息 Id
     */
     async raw(oId:string):Promise<string> {
        let rsp;
        try {
            rsp = await request({
                url: `cr/raw/${oId}`,
            });

            return rsp.replace(/<!--.*?-->/g, '');
        } catch (e) {
            throw e;
        }
    }

    /**
     * 红包接口对象
     */
     get redpacket() {
        let apiKey = this._apiKey;
        let that = this;
        return {
            /**
             * 打开一个红包
             * @param oId 红包消息 Id
             * @param gesture 猜拳类型
             */
            async open(oId:string, gesture?:GestureType):Promise<ApiResponse<RedPacketInfo>> {
                let rsp;
                try {
                    rsp = await request({
                        url: `chat-room/red-packet/open`,
                        method: 'post',
                        data: {
                            oId,
                            gesture,
                            apiKey
                        },
                    });
        
                    return rsp;            
                } catch (e) {
                    throw e;
                }
            },
            /**
             * 发送一个红包
             * @param redpacket 红包对象
             */
            async send(redpacket:RedPacket) {
                return await that.send(`[redpacket]${JSON.stringify(redpacket)}[/redpacket]`)
            }
        }
    }

    /**
     * 重连聊天室
     */
    async reconnect(error=(ev: any) => {}, close=(ev: any) => {}) {
        this._rws = new ReconnectingWebSocket(
            `wss://${domain}/chat-room-channel?apiKey=${this._apiKey}`, [], {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                WebSocket: isBrowse ? window.WebSocket : (await import('ws')).WebSocket,
                connectionTimeout: 10000
            }
        );

        this._rws.onopen = (e) => {
            if(this._wsTimer) { clearInterval(this._wsTimer); }
            this._wsTimer = setInterval(() => {
                this._rws?.send('-hb-');
            }, 1000 * 60 * 3);
        };
        this._rws.onmessage = async (e) => {
            let msg = JSON.parse(e.data);
            let data:any | null = null;
            switch(msg.type) {
                case 'online': {
                    this._onlines = msg.users;
                    this._discusse = msg.discussing;
                    data = this._onlines;
                    break;
                }
                case 'discussChanged': {
                    data = msg.newDiscuss;
                    break;
                }
                case 'revoke': {
                    data = msg.oId;
                    break;
                }
                case 'barrager': {
                    let { barragerContent, userAvatarURL, userAvatarURL20, userNickname, barragerColor, userName, userAvatarURL210, userAvatarURL48 } = msg;
                    data = { barragerContent, userAvatarURL, userAvatarURL20, userNickname, barragerColor, userName, userAvatarURL210, userAvatarURL48 };
                    break;
                }
                case 'msg': {
                    let { userOId, oId, time, userName, userNickname, userAvatarURL, content, md, client } = msg;
                    try {
                        let data = JSON.parse(content);
                        if (data.msgType === 'redPacket') {
                            content = data;
                            msg.type = 'redPacket'
                        }
                    } catch (e) { }
                    data = { userOId, oId, time, userName, userNickname, userAvatarURL, content, md, client, via: clientToVia(client) };
                    break;
                }
                case 'redPacketStatus': {
                    let { oId, count, got, whoGive, whoGot } = msg;
                    data = { oId, count, got, whoGive, whoGot };
                    break;
                }
            }
            this._wsCallbacks.forEach(call => call(Object.assign({ ...e, msg: { type: msg.type, data } } )));
        };
        this._rws.onerror = error || ((e) => {
            console.error(e);
        });
        this._rws.onclose = close || ((e) => {
            console.log(e);
        });
    }

    /**
     * 移除聊天室消息监听函数
     * @param wsCallback 消息监听函数
     */
     removeListener(wsCallback:Function) {
        if (this._wsCallbacks.indexOf(wsCallback) < 0) return;
        this._wsCallbacks.splice(this._wsCallbacks.indexOf(wsCallback), 1);
    }

    /**
     * 添加聊天室消息监听函数
     * @param wsCallback 消息监听函数
     */
     async addListener(wsCallback: (event: { msg: Message }) => void, error=(ev: any) => {}, close=(ev: any) => {}) {
        if (this._rws !== null) { 
            if (this._wsCallbacks.indexOf(wsCallback) < 0) 
                this._wsCallbacks.push(wsCallback);
            return;
        }
        this._wsCallbacks.push(wsCallback);
        await this.reconnect(error, close);
    }
}

export default ChatRoom;