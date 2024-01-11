import { request } from './utils';
import { 
    BreezemoonContent
} from './types';

export class Breezemoon
{
    private _apiKey:string = '';

    constructor(token:string='') {
        if (!token) { return; }
        this._apiKey = token;
    }

    /**
     * 重新设置请求 Token
     * @param apiKey 接口 API Key
     */
    setToken(token:string) {
        this._apiKey = token;
    }

    /**
     * 获取清风明月列表
     * @param page 消息页码
     * @param size 每页个数
     */
    async list(page=1, size=20):Promise<BreezemoonContent[]> {
        try {
            let rsp = await request({
                url: `api/breezemoons?p=${page}&size=${size}`
            });
            
            if (rsp.code) throw new Error(rsp.msg);

            return rsp.breezemoons;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 发送清风明月
     * @param content 内容
     */
     async send(content:string):Promise<void> {
        try {
            let rsp = await request({
                url: `breezemoon`,
                method: 'post',
                data: {
                    apiKey: this._apiKey,
                    breezemoonContent: content
                },
            });

            if (rsp.code) throw new Error(rsp.msg);
        } catch (e) {
            throw e;
        }
    }
}

export default Breezemoon;