import { request } from './utils';
import { 
    ApiResponse, NoticeCount, NoticeList, NoticeType
} from './typing';

class Notice
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
     * 获取未读消息数
     */
     async count():Promise<NoticeCount> {
        let rsp;
        try {
            rsp = await request({
                url: `notifications/unread/count?apiKey=${this._apiKey}`,
            });

            if (rsp.userNotifyStatus) rsp.userNotifyStatus = rsp.userNotifyStatus != 0;
            return rsp;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 获取消息列表
     * @param type 消息类型
     */
     async list(type: NoticeType | string):Promise<ApiResponse<NoticeList>> {
        let rsp;
        try {
            rsp = await request({
                url: `api/getNotifications?apiKey=${this._apiKey}&type=${type}`,
            });

            return rsp;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 已读指定类型消息
     * @param type 消息类型
     */
     async makeRead(type: NoticeType | string):Promise<ApiResponse<undefined>> {
        let rsp;
        try {
            rsp = await request({
                url: `notifications/make-read/${type}?apiKey=${this._apiKey}`,
            });

            return rsp;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 已读所有消息
     */
     async readAll():Promise<{code:number}> {
        let rsp;
        try {
            rsp = await request({
                url: `notifications/all-read?apiKey=${this._apiKey}`,
            });

            return rsp;
        } catch (e) {
            throw e;
        }
    }
}

export default Notice;