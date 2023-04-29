import * as crypto from 'crypto';
import { isBrowse, request, setDomain, toMetal } from './utils';
import {
    ApiResponse, Account, UserInfo, AtUserList, UploadInfo, ApiKey
} from './typing';
import ChatRoom from './chatroom';
import Notice from './notice';
import Emoji from './emoji';
import User from './user';
import Article from './article';
import Chat from './chat';
import Breezemoon from './breezemoon';

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
     *  表情包接口对象
     */
    emoji: Emoji = new Emoji();
    /**
     *  用户接口对象
     */
    account: User = new User();
    /**
     *  文章接口对象
     */
    article: Article = new Article();
    /**
     *  清风明月对象
     */
    breezemoon: Breezemoon = new Breezemoon();
     /**
     * 私聊接口对象
     */
    chat: Chat = new Chat();

    /**
     * 构造一个 API 请求对象
     * @param token 接口 API Key，没有可以传空
     */
    constructor(token: string='') {
        if (!token) { return; }
        this.setToken(token);
    }

    async setToken(apiKey: string) {
        this.apiKey = apiKey;
        this.chatroom.setToken(this.apiKey);
        this.notice.setToken(this.apiKey);
        this.emoji.setToken(this.apiKey);
        this.account.setToken(this.apiKey);
        this.article.setToken(this.apiKey);
        this.breezemoon.setToken(this.apiKey);
        this.chat.setToken(this.apiKey);
    }

    async setDomain(domain: string) {
        setDomain(domain);
    }

    /**
     * 登录账号返回 API Key
     * @param data 用户账密
     */   
    async login(data: Account): Promise<ApiKey> {
        try {
            let md5 = crypto.createHash('md5');
            let rsp = await request({
                url: 'api/getKey',
                method: 'post',
                data: {
                    nameOrEmail: data.username,
                    userPassword: md5.update(data.passwd).digest('hex'),
                    mfaCode: data.mfaCode
                },
            });

            this.setToken(rsp.Key);

            return rsp;
        } catch (e) {
            throw e;
        }
    }


    /**
     * 查询指定用户信息
     * @param username 用户名
     */   
     async user(username:string): Promise<UserInfo> {
        try {
            let rsp = await request({
                url: `user/${username}${this.apiKey ? `?apiKey=${this.apiKey}` : ''}`
            });

            rsp.sysMetal = toMetal(rsp.sysMetal);
            rsp.allMetalOwned= toMetal(rsp.allMetalOwned);

            return rsp;
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

            return rsp;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 获取最近注册的20个用户
     */
    async recentRegister(): Promise<ApiResponse<Array<{ userNickname: string; userName: string; }>>> {
        let rsp;
        try {
            rsp = await request({
                url: `api/user/recentReg`,
                method: 'get',
            });

            return rsp;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 上传文件
     * @param files 要上传的文件，如果是在 Node 使用，则传入文件路径数组，若是在浏览器使用，则传入文件对象数组。
     */   
     async upload(files: Array<File|string>):Promise<ApiResponse<UploadInfo>> {
        let data: any;

        if (!isBrowse && !globalThis.FormData)
            globalThis.FormData = (await import('form-data')).default as any;

        if (isBrowse) {
            data = new FormData();
            files.forEach(f => data.append('file[]', f));
        } else {
            data = new FormData();
            files.forEach(f => data.append('file[]', 
                require('fs').readFileSync(f.toString()), 
                require('path').basename(f.toString())
            ));
        }

        let rsp;
        try {
            rsp = await request({
                url: `upload`,
                method: 'post',
                data,
                headers: isBrowse ? undefined : data.getHeaders()
            });

            return rsp;
        } catch (e) {
            throw e;
        }
    }

}

export default FishPi;

export * from './typing';