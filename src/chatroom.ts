import ReconnectingWebSocket from 'reconnecting-websocket';
import WebSocket from 'ws';
import { request, domain, toMetal } from './utils';
import { 
    ApiResponse, ChatRoomMessage, RedPacket 
} from '..';

class ChatRoom {
    private _token:string = '';
    private _onlines:Array<any>=[];
    private _rws:ReconnectingWebSocket | null = null;
    private _wsTimer:NodeJS.Timeout | null = null;
    private _wsCallbacks:Array<Function> = [];

    constructor(token:string='') {
        if (!token) { return; }
        this._token = token;
    }

    get onlines() {
        return this._onlines;
    }

    setToken(token:string) {
        this._token = token;
    }

    async more(page=1):Promise<ApiResponse<Array<ChatRoomMessage>>> {
        try {
            let rsp = await request({
                url: `chat-room/more?page=${page}&apiKey=${this._token}`
            });

            if (rsp.status === 401) { 
                throw new Error('登录已失效，请重新登录！');
            }

            if (rsp.code != 0) {
                throw new Error(rsp.msg);
            }

            rsp = rsp.data;
            if (!rsp.data) return rsp;
            let redpacket;
            (rsp.data as Array<any>).forEach((d, i, data) => {
                try {
                    data[i].sysMetal = toMetal(data[i].sysMetal);
                    redpacket = JSON.parse(d.content);
                    if (redpacket.msgType !== 'msgType') return rsp;
                    redpacket.recivers = JSON.parse(redpacket.recivers);
                    data[i].content = redpacket;
                } catch (e) {}
            })

            return rsp;
        } catch (e) {
            throw e;
        }
    }

    async revoke(oId:string):Promise<ApiResponse<undefined>> {
        let rsp;
        try {
            rsp = await request({
                url: `chat-room/revoke/${oId}`,
                method: 'delete',
                data: {
                    apiKey: this._token
                },
            });

            if (rsp.status === 401) {
                throw new Error('登录已失效，请重新登录！');
            }

            return rsp.data;            
        } catch (e) {
            throw e;
        }
    }

    async send(msg:string):Promise<{ code:number }> {
        let rsp;
        try {
            rsp = await request({
                url: `chat-room/send`,
                method: 'post',
                data: {
                    content: msg,
                    apiKey: this._token
                },
            });

            if (rsp.status === 401) {throw new Error('登录已失效，请重新登录！');}

            return rsp.data;            
        } catch (e) {
            throw e;
        }
    }

    async raw(oId:string):Promise<string> {
        let rsp;
        try {
            rsp = await request({
                url: `cr/raw/${oId}`,
            });

            return rsp.data.replace(/<!--.*?-->/g, '');
        } catch (e) {
            throw e;
        }
    }

    get emoji() {
        let apiKey = this._token;
        return {
            async get ():Promise<Array<string>> {
                let rsp;
                try {
                    rsp = await request({
                        url: `api/cloud/get`,
                        method: 'post',
                        data: {
                            gameId: 'emojis',
                            apiKey
                        },
                    });
        
                    if (rsp.status === 401) {throw new Error('登录已失效，请重新登录！');}
        
                    return JSON.parse(rsp.data.data);            
                } catch (e) {
                    throw e;
                }
            },
            async set (data:Array<string>) {
                let rsp;
                try {
                    rsp = await request({
                        url: `api/cloud/sync`,
                        method: 'post',
                        data: {
                            gameId: 'emojis',
                            data: JSON.stringify(data),
                            apiKey
                        },
                    });
            
                    if (rsp.status === 401) {
                        throw new Error('登录已失效，请重新登录！');
                    }
            
                    return rsp.data;            
                } catch (e) {
                    throw e;
                }
            }
        }
    }

    get redpacket() {
        let apiKey = this._token;
        let that = this;
        return {
            async open(oId:string) {
                let rsp;
                try {
                    rsp = await request({
                        url: `chat-room/red-packet/open`,
                        method: 'post',
                        data: {
                            oId,
                            apiKey
                        },
                    });
        
                    if (rsp.status === 401) {
                        throw new Error('登录已失效，请重新登录！');
                    }
        
                    return rsp.data;            
                } catch (e) {
                    throw e;
                }
            },
            async send(redpacket:RedPacket) {
                return await that.send(`[redpacket]${JSON.stringify(redpacket)}[/redpacket]`)
            }
        }
    }

    removeListener(wsCallback:Function) {
        if (this._wsCallbacks.indexOf(wsCallback) < 0) return;
        this._wsCallbacks.splice(this._wsCallbacks.indexOf(wsCallback), 1);
    }

    addListener(wsCallback:Function) {
        if (this._rws !== null) { 
            if (this._wsCallbacks.indexOf(wsCallback) < 0) 
                this._wsCallbacks.push(wsCallback);
            return;
        }
        this._wsCallbacks.push(wsCallback);
        this._rws = new ReconnectingWebSocket(
            `wss://${domain}chat-room-channel?apiKey=${this._token}`, [], {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                WebSocket: WebSocket,
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
                    data = this._onlines = msg.users;
                    break;
                }
                case 'revoke': {
                    data = msg.oId;
                    break;
                }
                case 'msg': {
                    let { oId, time, userName, userNickname, userAvatarURL, content, md } = msg;
                    try {
                        let { msg, recivers, money, count, type, got, who, msgType } = JSON.parse(content);
                        if (msgType === 'redPacket') {
                            data = { 
                                oId, time, userName, userNickname, userAvatarURL, 
                                redpacket: { msg, recivers, money, count, type, got, who }
                            };
                            msg.type = 'redPacket'
                            break;
                        }
                    } catch (e) {}
                    data = { oId, time, userName, userNickname, userAvatarURL, content, md };
                    break;
                }
                case 'redPacketStatus': {
                    let { oId, count, got, whoGive, whoGot } = msg;
                    data = { oId, count, got, whoGive, whoGot };
                    break;
                }
            }
            this._wsCallbacks.forEach(call => call(Object.assign({ msg: { type: msg.type, data } }, e )));
        };
        this._rws.onerror = (e) => {
            console.error(e);
        };
        this._rws.onclose = (e) => {
        };
    }
}

export default ChatRoom;