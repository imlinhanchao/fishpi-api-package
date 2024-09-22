import { request } from './utils';
import { 
    ApiResponse, CommentPost, VoteType, 
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

    /**
     * 发布评论
     * @param data 评论信息
     */
    async send(data:CommentPost): Promise<ApiResponse<undefined>> {
        let rsp;
        try {
            rsp = await request({
                url: `comment`,
                method: 'post',
                data: {
                    ...data,
                    apiKey: this._apiKey
                },
            });

            return rsp;
        } catch (e) {
            throw e;
        }  
    }

    /**
     * 更新评论
     * @param id 评论 Id
     * @param data 评论信息
     */
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
                url: `comment/${id}`,
                method: 'put',
                data: {
                    ...data,
                    apiKey: this._apiKey
                },
            });

            return rsp;
        } catch (e) {
            throw e;
        }  
    }

    /**
     * 评论点赞
     * @param id 评论 Id
     * @param type 点赞类型
     */
    async vote(id:string, type:'up' | 'down'):Promise<{ code:number, msg?:string, type?:VoteType }> {
        let rsp;
        try {
            rsp = await request({
                url: `vote/${type}/comment`,
                method: 'post',
                data: {
                    dataId: id,
                    apiKey: this._apiKey
                },
            });

            return rsp;
        } catch (e) {
            throw e;
        }    
    }

    /**
     * 评论感谢
     * @param id 评论 Id
     */
    async thank(id:string):Promise<ApiResponse<undefined>> {
        let rsp;
        try {
            rsp = await request({
                url: `comment/thank`,
                method: 'post',
                data: {
                    apiKey: this._apiKey,
                    commentId: id
                },
            });

            return rsp;
        } catch (e) {
            throw e;
        }    
    }

    /**
     * 删除评论
     * @param id 评论 Id
     */
    async remove(id:string): Promise<{ code:number, msg?:string, commentId?:string}> {
        let rsp;
        try {
            rsp = await request({
                url: `comment/${id}/remove`,
                method: 'post',
                data: {
                    apiKey: this._apiKey
                },
            });

            return rsp;
        } catch (e) {
            throw e;
        }  
    }
}

export default Comment;