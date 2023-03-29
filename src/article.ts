import { analyzeMetalAttr, request, toMetal } from './utils';
import { 
    ApiResponse, ArticlePost, ArticleListType, ArticleDetail, VoteStatus
} from './typing';

class Article
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
     * 发布文章
     * @param data 文章信息
     * @returns 发布成功返回文章Id (articleId)
     */
    async post(data:ArticlePost):Promise<{ code:number, msg?:string, articleId?:string }> {
        let rsp;
        try {
            rsp = await request({
                url: `article`,
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

    /**
     * 更新文章
     * @param id 文章 Id
     * @param data 文章信息
     * @returns 更新成功返回文章Id (articleId)
     */
    async update(id:string, data:ArticlePost):Promise<{ code:number, msg?:string, articleId?:string }> {
        let rsp;
        try {
            rsp = await request({
                url: `article/${id}`,
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

    /**
     * 查询文章列表
     * @param type 查询类型
     * @param tag 指定查询标签，可选
     * @returns 文章列表
     */
    async list(type:ArticleListType, tag?:string):Promise<ApiResponse<{ articles:Array<ArticleDetail> }>> {
        let rsp;
        try {
            rsp = await request({
                url: `articles/${tag !== undefined ? `tag/${tag}` : 'recent'}${type}?apiKey=${this._apiKey}`,
            });         

            return rsp.data;
        } catch (e) {
            throw e;
        }
    }
    
    /**
     * 获取文章详情
     * @param id 文章id
     * @returns 文章详情
     */
    async detail(id:string, p=1):Promise<ApiResponse<{ article:ArticleDetail }>> {
        let rsp;
        try {
            rsp = await request({
                url: `article/${id}?apiKey=${this._apiKey}&p=${p}`,
            });

            rsp.data.articleAuthor.sysMetal = analyzeMetalAttr(rsp.data.articleAuthor.sysMetal);

            for(let i = 0; i < rsp.data.articleComments.length; i++) {
                rsp.data.articleComments[i].sysMetal = analyzeMetalAttr(rsp.data.articleComments[i].sysMetal);
            }

            for(let i = 0; i < rsp.data.articleNiceComments.length; i++) {
                rsp.data.articleNiceComments[i].sysMetal = analyzeMetalAttr(rsp.data.articleNiceComments[i].sysMetal);
            }

            return rsp.data;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 点赞/取消点赞文章
     * @param id 文章id
     * @returns 文章点赞状态
     */
    async vote(id:string):Promise<{ code:number, msg?:string, type?:VoteStatus }> {
        let rsp;
        try {
            rsp = await request({
                url: `/vote/up/article`,
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
                url: `/article/thank?articleId=${id}`,
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

export default Article;