import { request } from './utils';
import { 
    ApiResponse, CommentPost, VoteStatus, 
} from './typing';

class Comment
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

    async send(data:CommentPost): Promise<ApiResponse<undefined>> {
        let rsp;
        try {
            rsp = await request({
                url: `/comment`,
                method: 'post',
                data: {
                    ...data,
                    apiKey: this._apiKey
                },
            });

            if (rsp.status === 401) {
                return { code:-1, msg: '登录已失效，请重新登录！' };
            }

            return rsp.data;
        } catch (e) {
            throw e;
        }  
    }

    async update(id:string, data:CommentPost): Promise<{ 
        code:number, 
        msg?:string, 
        /**
         * 评论内容 HTML
         */
        commentContent?:string}> {
        let rsp;
        try {
            rsp = await request({
                url: `/comment/${id}`,
                method: 'put',
                data: {
                    ...data,
                    apiKey: this._apiKey
                },
            });

            if (rsp.status === 401) {
                return { code:-1, msg: '登录已失效，请重新登录！' };
            }

            return rsp.data;
        } catch (e) {
            throw e;
        }  
    }

    async vote(id:string):Promise<{ code:number, msg?:string, type?:VoteStatus }> {
        let rsp;
        try {
            rsp = await request({
                url: `/vote/up/comment`,
                method: 'post',
                data: {
                    dataId: id,
                    apiKey: this._apiKey
                },
            });

            if (rsp.status === 401) {
                return { code:-1, msg: '登录已失效，请重新登录！' };
            }

            return rsp.data;
        } catch (e) {
            throw e;
        }    
    }

    async thank(id:string):Promise<ApiResponse<undefined>> {
        let rsp;
        try {
            rsp = await request({
                url: `/comment/thank`,
                method: 'post',
                data: {
                    apiKey: this._apiKey,
                    commentId: id
                },
            });

            if (rsp.status === 401) {
                return { code:-1, msg: '登录已失效，请重新登录！' };
            }

            return rsp.data;
        } catch (e) {
            throw e;
        }    
    }

    async remove(id:string): Promise<{ code:number, msg?:string, commentId?:string}> {
        let rsp;
        try {
            rsp = await request({
                url: `/comment/${id}/remove`,
                method: 'post',
                data: {
                    apiKey: this._apiKey
                },
            });

            if (rsp.status === 401) {
                return { code:-1, msg: '登录已失效，请重新登录！' };
            }

            return rsp.data;
        } catch (e) {
            throw e;
        }  
    }
}

export default Comment;