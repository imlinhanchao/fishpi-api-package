/**
 * Api 响应
 */
export type ApiResponse<T> = {
    /**
     * 请求状态
     */
    code: number;
    /**
     * 请求信息
     */
    msg?: string;
    /**
     * 请求数据
     */
    data?: T
}

/**
 * ApiKey 响应
 */
export type ApiKey = {
    /**
     * 请求状态
     */
    code: number;
    /**
     * 消息
     */
    msg: string;
    /**
     * Api Key
     */
    Key: string
}

/**
 * 数据类型
 */
export enum DataType {
    /**
     * 文章
     */
    article = 0,

    /**
     * 评论
     */
    comment = 1,

    /**
     * @
     */
    at = 2,

    /**
     * 被评论
     */
    commented = 3,

    /**
     * 关注者
     */
    followingUser = 4,

    /**
     * 积分 - 充值
     */
    pointCharge = 5,

    /**
     * 积分 - 转账
     */
    pointTransfer = 6,

    /**
     * 积分 - 文章打赏
     */
    pointArticleReward = 7,

    /**
     * 积分 - 评论感谢
     */
    pointCommentThank = 8,

    /**
     * 同城广播
     */
    broadcast = 9,

    /**
     * 积分 - 交易
     */
    pointExchange = 10,

    /**
     * 积分 - 滥用扣除
     */
    abusePointDeduct = 11,

    /**
     * 积分 - 文章被感谢
     */
    pointArticleThank = 12,

    /**
     * 回复
     */
    reply = 13,

    /**
     * 使用邀请码
     */
    invitecodeUsed = 14,

    /**
     * 系统公告 - 文章
     */
    sysAnnounceArticle = 15,

    /**
     * 系统公告 - 新用户
     */
    sysAnnounceNewUser = 16,

    /**
     * 新的关注者
     */
    newFollower = 17,

    /**
     * 邀请链接
     */
    invitationLinkUsed = 18,

    /**
     * 系统通知 - 角色变化
     */
    sysAnnounceRoleChanged = 19,

    /**
     * 关注的文章更新
     */
    followingArticleUpdate = 20,

    /**
     * 关注的文章评论
     */
    followingArticleComment = 21,

    /**
     * 积分 - 文章优选
     */
    pointPerfectArticle = 22,

    /**
     * 文章新的被关注者
     */
    articleNewFollower = 23,

    /**
     * 文章新的关注者
     */
    articleNewWatcher = 24,

    /**
     * 评论点赞
     */
    commentVoteUp = 25,

    /**
     * 评论点踩
     */
    commentVoteDown = 26,

    /**
     * 文章被点赞
     */
    articleVoteUp = 27,

    /**
     * 文章被点踩
     */
    articleVoteDown = 28,

    /**
     * 积分 - 评论被接受
     */
    pointCommentAccept = 33,

    /**
     * 积分 - 举报处理
     */
    pointReportHandled = 36,

    /**
     * 聊天室 @
     */
    chatRoomAt = 38,

    /**
     * 专属红包提醒
     */
    redPacket = 39,
}

/**
 * 登录信息
 */
export type Account = {
    /**
     * 用户名
     */
    username: string;
    /**
     * 密码
     */
    passwd: string;
    /**
     * 二次验证码，非必填
     */
    mfaCode?: string;
} 

export enum UserAppRole {
    /**
     * 黑客
     */
    Hack = 0,
    /**
     * 画家
     */
    Artist = 1,
}

/**
 * 用户信息
 */
export type UserInfo = {
    /**
     * 用户 id
     */
    oId: string;
    /**
     * 用户编号
     */
    userNo: string;
    /**
     * 用户名
     */
    userName: string;
    /**
     * 昵称
     */
    userNickname: string;
    /**
     * 首页地址
     */
    userURL: string;
    /**
     * 所在城市
     */
    userCity: string,
    /**
     * 签名
     */
    userIntro: string;
    /**
     * 是否在线
     */
    userOnlineFlag: boolean,
    /**
     * 用户积分
     */
    userPoint: number;
    /**
     * 用户组
     */
    userRole: string;
    /**
     * 角色
     */
    userAppRole: UserAppRole;
    /**
     * 用户头像地址
     */
    userAvatarURL: string;
    /**
     * 用户卡片背景
     */
    cardBg: string;
    /**
     * 用户关注数
     */
    followingUserCount: number;
    /**
     * 用户被关注数
     */
    followerCount: number;
    /**
     * 在线时长，单位分钟
     */
    onlineMinute: number;
    /**
     * 是否已经关注，未登录则为 `hide`
     */
    canFollow: 'hide' | 'no' | 'yes';
    /**
     * 用户勋章列表
     */
    sysMetal: MetalList;
}

/**
 * 猜拳类型
 */
export enum GestureType {
    /**
     * 石头
     */
    Rock = 0,
    /**
     * 剪刀
     */
    Scissors = 1,
    /**
     * 布
     */
    Paper = 2,
}

/**
 * 红包类型
 */
export enum RedPacketType {
    /**
     * 拼手气
     */
    Random = 'random',
    /**
     * 平分
     */
    Average =  'average',
    /**
     * 专属
     */
    Specify = 'specify',
    /**
     * 心跳
     */
    Heartbeat = 'heartbeat',
    /**
     * 猜拳
     */
    RockPaperScissors = 'rockPaperScissors',
}

/**
 * 红包数据
 */
export type RedPacket = {
    /**
     * 红包类型
     */
    type: RedPacketType;
    /**
     * 红包积分
     */
    money: number;
    /**
     * 红包个数
     */
    count: number;
    /**
     * 祝福语
     */
    msg: string;
    /**
     * 接收者，专属红包有效
     */
    recivers?: Array<string>;
    /**
     * 出拳，猜拳红包有效
     */
    gesture?: GestureType;
}

/**
 * 红包领取者信息
 */
export type RedPacketGot = {
    /**
     * 用户 id
     */
    userId: string;
    /**
     * 用户名
     */
    userName: string;
    /**
     * 用户头像
     */
    avatar: string;
    /**
     * 领取到的积分
     */
    userMoney: number;
    /**
     * 领取积分
     */
    time: string;
}

/**
 * 红包历史信息
 */
export type RedPacketMessage = {
    /**
     * 消息类型，固定为 redPacket
     */
    msgType: string;
    /**
     * 红包数
     */
    count: number;
    /**
     * 领取数
     */
    got: number;
    /**
     * 内含积分
     */
    money: number;
    /**
     * 祝福语
     */
    msg: string;
    /**
     * 发送者 id
     */
    senderId: string;
    /**
     * 红包类型
     */
    type: string;
    /**
     * 接收者，专属红包有效
     */
    recivers: Array<string>;
    /**
     * 已领取者列表
     */
    who: Array<RedPacketGot>
}

/**
 * 红包信息
 */
export type RedPacketInfo = {
    /**
     * 红包基本信息
     */
    info: {
        /**
         * 数量
         */
        count: number;
        /**
         * 猜拳类型
         */
        gesture?: GestureType;
        /**
         * 领取数
         */
        got: number;
        /**
         * 祝福语
         */
        msg: string;
        /**
         * 发送者用户名
         */
        userName: string;
        /**
         * 用户头像
         */
        userAvatarURL: string;
    };
    /**
     * 接收者，专属红包有效
     */
    recivers: Array<string>;
    /**
     * 已领取者列表
     */
    who: Array<RedPacketGot>;
}

/**
 * 徽章信息
 */
export type Metal = {
    /**
     * 完整徽章地址（含文字）
     */
    url: string,
    /**
     * 徽章地址（不含文字）
     */
    icon: string,
    /**
     * 徽章属性
     */
    attr: {
        /**
         * 徽标图地址
         */
        url:string;
        /**
         * 背景色
         */
        backcolor:string;
        /**
         * 文字颜色
         */
        fontcolor:string;
    };
    /**
     * 徽章名
     */
    name:string,
    /**
     * 徽章描述
     */
    description:string;
    /**
     * 徽章数据
     */
    data:string;
    /**
     * 是否佩戴
     */
    enable: boolean;
}

/**
 * 徽章列表
 */
export type MetalList = {
    /**
     * 徽章列表
     */
    list: Array<Metal>
}

/**
 * 聊天室消息
 */
export type ChatRoomMessage = {
    /**
     * 消息 Id
     */
    oId: string;
    /**
     * 发送者用户名
     */
    userName: string;
    /**
     * 用户昵称
     */
    userNickname: string;
    /**
     * 用户头像
     */
    userAvatarURL: string;
    /**
     * 用户徽章
     */
    sysMetal: MetalList;
    /**
     * 消息内容
     */
    content: string | RedPacketMessage;
    /**
     * 发送时间
     */
    time: string;
}

/**
 * 历史消息类型
 */
export enum ChatContentType {
    /**
     * 原始 Markdown
     */
    Markdown = 'md',
    /**
     * 渲染 HTML 
     */
    HTML = 'html'
}

/**
 * chatroom get 接口获取 oId 的相关消息类型
 */
export enum ChatMessageType {
    /**
     * 前后消息
     */
    Context = 0,
    /**
     * 前面的消息
     */
    Before = 1,
    /**
     * 后面的消息
     */
    After = 2,
}

/**
 * @ 用户列表
 */
export type AtUserList = Array<{
    /**
     * 用户名
     */
    userName: string;
    /**
     * 用户头像
     */
    userAvatarURL: string;
    /**
     * 全小写用户名
     */
    userNameLowerCase: string;
}>

/**
 * 上传文件响应
 */
export type UploadInfo = {
    /**
     * 上传失败文件
     */
    errFiles: Array<string>;
    /**
     * 上传成功文件
     */
    succMap: {
        /**
         * Key 是文件名，value 为地址
         */
        [key: string]: string;
    }
}

/**
 * 文章标签
 */
export type ArticleTag = {
    /**
     * 标签 id
     */
    oId: string;
    /**
     * 标签名
     */
    tagTitle: string;
    /**
     * 标签描述
     */
    tagDescription: string;
    /**
     * icon 地址
     */
    tagIconPath: string;
    /**
     * 标签地址
     */
    tagURI: string;
    /**
     * 标签自定义 CSS
     */
    tagCSS: string;
    /**
     * 反对数
     */
    tagBadCnt: number;
    /**
     * 标签回帖计数
     */
    tagCommentCount: number;
    /**
     * 关注数
     */
    tagFollowerCount: number;
    /**
     * 点赞数
     */
    tagGoodCnt: number;
    /**
     * 引用计数
     */
    tagReferenceCount: number;
    /**
     * 标签相关链接计数
     */
    tagLinkCount: number;
    /**
     * 标签 SEO 描述
     */
    tagSeoDesc: string;
    /**
     * 标签关键字
     */
    tagSeoKeywords: string;
    /**
     * 标签 SEO 标题
     */
    tagSeoTitle: string;
    /**
     * 标签广告内容
     */
    tagAd: string;
    /**
     * 是否展示广告
     */
    tagShowSideAd: 0 | 1;
    /**
     * 标签状态
     */
    tagStatus: 0 | 1;
    /**
     * 标签随机数
     */
    tagRandomDouble: number;
}

/**
 * 通知类型
 */
export enum NoticeType {
    /**
     * 积分
     */
    Point = 'point',
    /**
     * 评论
     */
    Comment = 'commented',
    /**
     * 回复
     */
    Reply = 'reply',
    /**
     * 提及我的
     */
    At = 'at',
    /**
     * 我关注的
     */
    Following = 'following',
    /**
     * 同城
     */
    Broadcast = 'broadcast',
    /**
     * 系统
     */
    System = 'sys-announce',
}

/**
 * 通知列表
 */
export type NoticeList = Array<NoticePoint | NoticeComment | NoticeAt | NoticeFollow | NoticeSystem>

/**
 * 通知数
 */
export type NoticeCount = {
    /**
     * 请求结果，成功为 0
     */
    code: number;
    /**
     * 用户是否启用 Web 通知
     */
    userNotifyStatus: boolean;
    /**
     * 未读通知数
     */
    unreadNotificationCnt: number;
    /**
     * 未读回复通知数
     */
    unreadReplyNotificationCnt: number;
    /**
     * 未读积分通知数
     */
    unreadPointNotificationCnt: number;
    /**
     * 未读 @ 通知数
     */
    unreadAtNotificationCnt: number;
    /**
     * 未读同城通知数
     */
    unreadBroadcastNotificationCnt: number;
    /**
     * 未读系统通知数
     */
    unreadSysAnnounceNotificationCnt: number;
    /**
     * 未读关注者通知数
     */
    unreadNewFollowerNotificationCnt: number;
    /**
     * 未读关注通知数
     */
    unreadFollowingNotificationCnt: number;
    /**
     * 未读评论通知数
     */
    unreadCommentedNotificationCnt: number;
}

/**
 * 积分通知
 */
export type NoticePoint = {
    /**
     * 通知 id
     */
    oId: string;
    /**
     * 数据 id
     */
    dataId: string;
    /**
     * 用户 id
     */
    userId: string;
    /**
     * 数据类型
     */
    dataType: DataType;
    /**
     * 通知描述
     */
    description: string;
    /**
     * 是否已读
     */
    hasRead: boolean
    /**
     * 创建日期
     */
    createTime: string;
}

/**
 * 评论/回帖通知
 */
export type NoticeComment = {
    /**
     * 通知 id
     */
    oId: string;
    /**
     * 文章标题
     */
    commentArticleTitle: string;
    /**
     * 文章作者
     */
    commentAuthorName: string;
    /**
     * 作者头像
     */
    commentAuthorThumbnailURL: string;
    /**
     * 文章类型
     */
    commentArticleType: number;
    /**
     * 是否精选
     */
    commentArticlePerfect: number;
    /**
     * 评论内容
     */
    commentContent: string;
    /**
     * 评论地址
     */
    commentSharpURL: string;
    /**
     * 是否已读
     */
    hasRead: boolean;
    /**
     * 评论时间
     */
    commentCreateTime: string;
}

/**
 * 提到我通知
 */
export type NoticeAt = {
    /**
     * 通知 id
     */
    oId: string;
    /**
     * 数据类型
     */
    dataType: DataType;
    /**
     * 用户名
     */
    userName: string;
    /**
     * 用户头像
     */
    userAvatarURL: string;
    /**
     * 通知内容
     */
    content: string;
    /**
     * 是否已读
     */
    hasRead: boolean;
    /**
     * 创建时间
     */
    createTime: string;
}

/**
 * 我关注的通知
 */
 export type NoticeFollow = {
     /**
      * 通知 Id
      */
    oId: string;
    /**
     * 文章地址
     */
    url: string;
    /**
     * 数据类型
     */
    dataType: DataType;
    /**
     * 文章标题
     */
    articleTitle: string;
    /**
     * 作者
     */
    authorName: string;
    /**
     * 通知内容
     */
    content: string;
    /**
     * 是否评论
     */
    isComment: boolean;
    /**
     * 作者头像
     */
    thumbnailURL: string;
    /**
     * 文章评论数
     */
    articleCommentCount: number;
    /**
     * 是否精选
     */
    articlePerfect: number;
    /**
     * 文章标签列表
     */
    articleTagObjs: Array<ArticleTag>;
    /**
     * 文章标签
     */
    articleTags: string;
    /**
     * 文章类型
     */
    articleType: number;
    /**
     * 是否已读
     */
    hasRead: boolean;
    /**
     * 通知创建时间
     */
    createTime: string;
}

/**
 * 系统通知数据
 */
export type NoticeSystem = {
    /**
     * 消息的 oId
     */
    oId: string;
    /**
     * 用户 Id
     */
    userId: string;
    /**
     * 数据 Id
     */
    dataId: string;
    /**
     * 数据类型
     */
    dataType: DataType;
    /**
     * 消息描述
     */
    description: string;
    /**
     * 是否已读
     */
    hasRead: boolean;
    /**
     * 创建日期
     */
    createTime: string;
}

export type BreezemoonContent = {
    /**
     * 发布者用户名
     */
    breezemoonAuthorName: string;
    /**
     * 最后更新时间
     */
    breezemoonUpdated: string;
    /**
     * 清风明月ID
     */
    oId: string;
    /**
     * 创建时间
     */
    breezemoonCreated: string;
    /**
     * 发布者头像URL
     */
    breezemoonAuthorThumbnailURL48: string;
    /**
     * 发布时间
     */
    timeAgo: string;
    /**
     * 正文
     */
    breezemoonContent: string;
    /**
     * 创建时间
     */
    breezemoonCreateTime: string;
    /**
     * 发布城市（可能为空，请注意做判断）
     */
    breezemoonCity: string; 
}

/**
 * 举报数据类型
 */
 export enum ReportDataType {
    /**
     * 文章
     */
    article = 0,
    /**
     * 评论
     */
    comment = 1,
    /**
     * 用户
     */
    user = 2,
    /**
     * 聊天消息
     */
    chatroom = 3,
}

/**
 * 举报类型
 */
export enum ReportType {
    /**
     * 垃圾广告
     */
    advertise = 0,
    /**
     * 色情
     */
    porn = 1,
    /**
     * 违规
     */
    violate = 2,
    /**
     * 侵权
     */
    infringement = 3,
    /**
     * 人身攻击
     */
    attacks = 4,
    /**
     * 冒充他人账号
     */
    impersonate = 5,
    /**
     * 垃圾广告账号
     */
    advertisingAccount = 6,
    /**
     * 违规泄露个人信息
     */
    leakPrivacy = 7,
    /**
     * 其它
     */
    other = 8
}

/**
 * 举报接口数据
 */
export type Report = {
    /**
     * API Key，登录取得
     */
    apiKey: string;
    /**
     * 举报对象的 oId
     */
    reportDataId: string;
    /**
     * 举报数据的类型
     */
    reportDataType: ReportDataType;
    /**
     * 举报的类型
     */
    reportType: ReportType;
    /**
     * 举报的理由
     */
    reportMemo: string;
}