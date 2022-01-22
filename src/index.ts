import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';
import FormData from 'form-data';
import { request, toMetal } from './utils';
import {
    ApiResponse, Account, UserInfo, AtUserList, UploadInfo
} from '..';
import ChatRoom from './chatroom';
import Notice from './notice';


class FishPi {
    token: string = '';
    chatroom: ChatRoom = new ChatRoom();
    notice: Notice = new Notice();

    constructor(token: string='') {
        if (!token) { return; }
        this.token = token;
        this.chatroom.setToken(this.token);
        this.notice.setToken(this.token);
    }

    async login(data: Account): Promise<ApiResponse<string>> {
        try {
            let md5 = crypto.createHash('md5');
            let rsp = await request({
                url: 'api/getKey',
                method: 'post',
                data: {
                    nameOrEmail: data.username,
                    userPassword: md5.update(data.passwd).digest('hex')
                },
            });

            this.token = rsp.data.Key;
            this.chatroom.setToken(this.token);
            this.notice.setToken(this.token);

            return rsp.data;
        } catch (e) {
            throw e;
        }
    }

    async info(): Promise<ApiResponse<UserInfo>> {
        try {
            let rsp = await request({
                url: `api/user?apiKey=${this.token}`
            });

            if (rsp.status === 401) {
                throw new Error('登录已失效，请重新登录！');
            }

            rsp.data.data.sysMetal = toMetal(rsp.data.data.sysMetal);

            return rsp.data;
        } catch (e) {
            throw e;
        }
    }

    async atlist(name: string): Promise<AtUserList> {
        let rsp;
        try {
            rsp = await request({
                url: `users/names`,
                method: 'post',
                data: {
                    name
                },
            });

            if (rsp.status === 401) {
                throw new Error('登录已失效，请重新登录！');
            }

            return rsp.data.data;
        } catch (e) {
            throw e;
        }
    }

    async emotions():Promise<ApiResponse<Array<string>>> {
        let rsp;
        try {
            rsp = await request({
                url: `users/emotions?apiKey=${this.token}`,
            });

            if (rsp.status === 401) {
                throw new Error('登录已失效，请重新登录！');
            }

            rsp.data.data = Object.keys(rsp.data.data);
            return rsp.data;
        } catch (e) {
            throw e;
        }
    }

    async liveness():Promise<number> {
        if (!this.token) { return 0; }
        try {
            let rsp = await request({
                url: `user/liveness?apiKey=${this.token}`
            });

            if (rsp.status === 401) { throw new Error('登录已失效，请重新登录！'); }

            return rsp.data.liveness || 0;
        } catch (e) {
            throw e;
        }
    }

    async isCheckIn():Promise<boolean> {
        if (!this.token) { return false; }
        try {
            let rsp = await request({
                url: `user/checkedIn?apiKey=${this.token}`
            });

            if (rsp.status === 401) { throw new Error('登录已失效，请重新登录！'); }

            return rsp.data.checkedIn || false;
        } catch (e) {
            throw e;
        }
    }

    async isCollectedLiveness():Promise<boolean> {
        if (!this.token) { return false; }
        try {
            let rsp = await request({
                url: `api/activity/is-collected-liveness?apiKey=${this.token}`
            });

            if (rsp.status === 401) { throw new Error('登录已失效，请重新登录！'); }

            return rsp.data.isCollectedYesterdayLivenessReward || false;
        } catch (e) {
            throw e;
        }
    }

    async getRewardLiveness():Promise<number> {
        if (!this.token) { return 0; }
        try {
            let rsp = await request({
                url: `api/activity/yesterday-liveness-reward-api?apiKey=${this.token}`
            });

            if (rsp.status === 401) { throw new Error('登录已失效，请重新登录！'); }

            return rsp.data.sum || 0;
        } catch (e) {
            throw e;
        }
    }

    async upload(files: Array<string>):Promise<UploadInfo> {
        let data = new FormData();
        files.forEach(f => data.append('file[]', fs.readFileSync(f), path.basename(f)));

        let rsp;
        try {
            rsp = await request({
                url: `upload`,
                method: 'post',
                data,
                headers: data.getHeaders()
            });

            if (rsp.status === 401) { throw new Error('登录已失效，请重新登录！'); }

            return rsp.data.data;
        } catch (e) {
            throw e;
        }
    }

}

export default FishPi;