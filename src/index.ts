import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';
import { request, toMetal } from './utils';
import {
    ApiResponse, Account, UserInfo, AtUserList, UploadInfo
} from '..';
import ChatRoom from './chatroom';
import Notice from './notice';

class FishPi {
    /**
     *  请求 API 的 API Key
     */
    apiKey: string = '';
    /**
     *  聊天室接口对象
     */
    chatroom: ChatRoom = new ChatRoom();
    /**
     *  通知接口对象
     */
    notice: Notice = new Notice();

    /**
     * 构造一个 API 请求对象
     * @param token 接口 API Key，没有可以传空
     */
    constructor(token: string='') {
        if (!token) { return; }
        this.apiKey = token;
        this.chatroom.setToken(this.apiKey);
        this.notice.setToken(this.apiKey);
    }

    /**
     * 登录账号返回 API Key
     * @param data 用户账密
     */   
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

            this.apiKey = rsp.data.Key;
            this.chatroom.setToken(this.apiKey);
            this.notice.setToken(this.apiKey);

            return rsp.data;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 返回登录账户信息，需要先登录或设置有效的 api key
     */   
    async info(): Promise<ApiResponse<UserInfo>> {
        try {
            let rsp = await request({
                url: `api/user?apiKey=${this.apiKey}`
            });

            if (rsp.status === 401) {
                return { code:-1, msg: '登录已失效，请重新登录！' };
            }

            if(rsp.data.data) rsp.data.data.sysMetal = toMetal(rsp.data.data.sysMetal);

            return rsp.data;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 查询指定用户信息
     * @param username 用户名
     */   
     async user(username:string): Promise<ApiResponse<UserInfo>> {
        try {
            let rsp = await request({
                url: `user/${username}?apiKey=${this.apiKey}`
            });

            if (rsp.status === 401) {
                return { code:-1, msg: '登录已失效，请重新登录！' };
            }

            rsp.data.data.sysMetal = toMetal(rsp.data.data.sysMetal);

            return rsp.data;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 用户名联想，通常用于 @ 列表
     * @param username 用户名
     */   
     async names(name: string): Promise<AtUserList> {
        let rsp;
        try {
            rsp = await request({
                url: `users/names`,
                method: 'post',
                data: {
                    name
                },
            });

            return rsp.data.data;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 查询登录用户常用表情
     */   
     async emotions():Promise<ApiResponse<Array<string>>> {
        let rsp;
        try {
            rsp = await request({
                url: `users/emotions?apiKey=${this.apiKey}`,
            });

            if (rsp.status === 401) {
                return { code:-1, msg: '登录已失效，请重新登录！' };
            }

            rsp.data.data = Object.keys(rsp.data.data);
            return rsp.data;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 查询登录用户当前活跃度，请求频率请控制在 30 ~ 60 秒一次
     */   
     async liveness():Promise<number> {
        if (!this.apiKey) { return 0; }
        try {
            let rsp = await request({
                url: `user/liveness?apiKey=${this.apiKey}`
            });

            if (rsp.status === 401) { return -1; }

            return rsp.data.liveness || 0;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 检查登录用户是否已经签到
     */   
     async isCheckIn():Promise<boolean> {
        if (!this.apiKey) { return false; }
        try {
            let rsp = await request({
                url: `user/checkedIn?apiKey=${this.apiKey}`
            });

            if (rsp.status === 401) { return false; }

            return rsp.data.checkedIn || false;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 检查登录用户是否已经领取昨日活跃奖励
     */   
     async isCollectedLiveness():Promise<boolean> {
        if (!this.apiKey) { return false; }
        try {
            let rsp = await request({
                url: `api/activity/is-collected-liveness?apiKey=${this.apiKey}`
            });

            if (rsp.status === 401) { return false; }

            return rsp.data.isCollectedYesterdayLivenessReward || false;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 领取昨日活跃度奖励
     */   
     async rewardLiveness():Promise<number> {
        if (!this.apiKey) { return 0; }
        try {
            let rsp = await request({
                url: `api/activity/yesterday-liveness-reward-api?apiKey=${this.apiKey}`
            });

            if (rsp.status === 401) { return 0; }

            return rsp.data.sum || 0;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 上传文件
     * @param files 要上传的文件，如果是在 Node 使用，则传入文件路径数组，若是在浏览器使用，则传入文件对象数组。
     */   
     async upload(files: Array<File|string>):Promise<UploadInfo> {
        let data:any;
        if (typeof window !== 'undefined') {
            data = new FormData();
            files.forEach(f => data.append('file[]', f));
        } else {
            let FormData = (await import('form-data')).default;
            data = new FormData();
            files.forEach(f => data.append('file[]', fs.readFileSync(f.toString()), path.basename(f.toString())));
        }

        let rsp;
        try {
            rsp = await request({
                url: `upload`,
                method: 'post',
                data,
                headers: data.getHeaders()
            });

            return rsp.data.data;
        } catch (e) {
            throw e;
        }
    }

}

export default FishPi;