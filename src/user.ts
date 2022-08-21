import { request, toMetal } from './utils';
import { 
    ApiResponse, UserInfo
} from './typing';

class User
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
     * 返回登录账户信息，需要先登录或设置有效的 api key
     */   
     async info(): Promise<ApiResponse<UserInfo>> {
        try {
            let rsp = await request({
                url: `api/user?apiKey=${this._apiKey}`
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
     * 查询登录用户常用表情
     */   
    async emotions():Promise<ApiResponse<Array<string>>> {
        let rsp;
        try {
            rsp = await request({
                url: `users/emotions?apiKey=${this._apiKey}`,
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
        if (!this._apiKey) { return 0; }
        try {
            let rsp = await request({
                url: `user/liveness?apiKey=${this._apiKey}`
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
        if (!this._apiKey) { return false; }
        try {
            let rsp = await request({
                url: `user/checkedIn?apiKey=${this._apiKey}`
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
        if (!this._apiKey) { return false; }
        try {
            let rsp = await request({
                url: `api/activity/is-collected-liveness?apiKey=${this._apiKey}`
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
        if (!this._apiKey) { return 0; }
        try {
            let rsp = await request({
                url: `activity/yesterday-liveness-reward-api?apiKey=${this._apiKey}`
            });

            if (rsp.status === 401) { return 0; }

            return rsp.data.sum || 0;
        } catch (e) {
            throw e;
        }
    }
}

export default User;