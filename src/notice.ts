import { request } from './utils';
import { 
    ApiResponse, NoticeCount, NoticeList
} from '..';

class Notice
{
    private _token:string = '';

    constructor(token:string='') {
        if (!token) { return; }
        this._token = token;
    }

    setToken(token:string) {
        this._token = token;
    }

    async count():Promise<NoticeCount> {
        let rsp;
        try {
            rsp = await request({
                url: `notifications/unread/count?apiKey=${this._token}`,
            });

            rsp.data.userNotifyStatus = rsp.data.userNotifyStatus != 0;
            return rsp.data;
        } catch (e) {
            throw e;
        }
    }

    async list(type:string):Promise<ApiResponse<NoticeList>> {
        let rsp;
        try {
            rsp = await request({
                url: `api/getNotifications?apiKey=${this._token}&type=${type}`,
            });

            return rsp.data;
        } catch (e) {
            throw e;
        }
    }

    async makeRead(type:string):Promise<{code:number}> {
        let rsp;
        try {
            rsp = await request({
                url: `notifications/make-read/${type}?apiKey=${this._token}`,
            });

            return rsp.data;
        } catch (e) {
            throw e;
        }
    }

    async readAll():Promise<{code:number}> {
        let rsp;
        try {
            rsp = await request({
                url: `notifications/all-read?apiKey=${this._token}`,
            });

            return rsp.data;
        } catch (e) {
            throw e;
        }
    }
}

export default Notice;