export type ApiResponse<T> = {
    code: number;
    msg: string;
    data?: T
}

export type ApiKey = {
    code: number;
    msg: string;
    Key: string
}

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
     * article new follower.
     */
    articleNewFollower = 23,

    /**
     * 文章被关注
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

export type Account = {
    username: string;
    passwd: string;
} 

export type UserInfo = {
    userCity: string,
    userOnlineFlag: boolean,
    userPoint: number;
    userAppRole: string;
    userIntro: string;
    userNo: string;
    onlineMinute: number;
    userAvatarURL: string;
    userNickname: string;
    oId: string;
    userName: string;
    cardBg: string;
    followingUserCount: number;
    sysMetal: Metal;
    userRole: string;
    followerCount: number;
    userURL: string;
    canFollow?: boolean;
}

export type RedPacket = {
    type: 'random' | 'average' | 'specify' | 'heartbeat';
    money: number;
    count: number;
    msg: string;
    recivers: Array<string>;
}

export type RedPacketGot = {
    avatar: string;
    time: string;
    userId: string;
    userMoney: number;
    userName: string;
}

export type RedPacketMessage = {
    count: number;
    got: number;
    money: number;
    msg: string;
    msgType: string;
    recivers: Array<string>;
    senderId: string;
    type: string;
    who: Array<RedPacketGot>
}

export type Metal = {
    list: Array<{
        attr: {
            url:string;
            backcolor:string;
            fontcolor:string;
        };
        name:string,
        description:string;
        data:string;
        enable: boolean;
    }>
}

export type ChatRoomMessage = {
    userAvatarURL: string;
    userNickname: string;
    sysMetal: Metal;
    time: string;
    oId: string;
    userName: string;
    content: string | RedPacketMessage;
}

export type AtUserList = Array<{
    userNameLowerCase: string;
    userAvatarURL: string;
    userName: string;
}>

export type UploadInfo = {
    errFiles: Array<string>;
    succMap: {
        [key: string]: string;
    }
}

export type ArticleTag = {
    oId: string;
    tagAd: string;
    tagBadCnt: number;
    tagCSS: string;
    tagCommentCount: number;
    tagDescription: string;
    tagFollowerCount: number;
    tagGoodCnt: number;
    tagIconPath: string;
    tagLinkCount: number;
    tagRandomDouble: number;
    tagReferenceCount: number;
    tagSeoDesc: string;
    tagSeoKeywords: string;
    tagSeoTitle: string;
    tagShowSideAd: number;
    tagStatus: number;
    tagTitle: string;
    tagURI: string;
}

export type NoticeList = Array<NoticePoint | NoticeComment | NoticeAt | NoticeFollow | NoticeSystem>

export type NoticeCount = {
    code: number;
    userNotifyStatus: boolean;
    unreadNotificationCnt: number;
    unreadReplyNotificationCnt: number;
    unreadPointNotificationCnt: number;
    unreadAtNotificationCnt: number;
    unreadBroadcastNotificationCnt: number;
    unreadSysAnnounceNotificationCnt: number;
    unreadNewFollowerNotificationCnt: number;
    unreadFollowingNotificationCnt: number;
    unreadCommentedNotificationCnt: number;
}

export type NoticePoint = {
    createTime: string;
    dataId: string;
    dataType: DataType;
    description: string;
    hasRead: boolean
    oId: string;
    userId: string;
}

export type NoticeComment = {
    commentArticlePerfect: number;
    commentArticleTitle: string;
    commentArticleType: number;
    commentAuthorName: string;
    commentAuthorThumbnailURL: string;
    commentContent: string;
    commentCreateTime: string;
    commentSharpURL: string;
    hasRead: boolean;
    oId: string;
}

export type NoticeAt = {
    content: string;
    createTime: string;
    dataType: DataType;
    hasRead: boolean;
    oId: string;
    userAvatarURL: string;
    userName: string;
}

export type NoticeFollow = {
    articleCommentCount: number;
    articlePerfect: number;
    articleTagObjs: Array<ArticleTag>;
    articleTags: string;
    articleTitle: string;
    articleType: number;
    authorName: string;
    content: string;
    createTime: string;
    dataType: DataType;
    hasRead: boolean;
    isComment: boolean;
    oId: string;
    thumbnailURL: string;
    url: string;
}

export type NoticeSystem = {
    createTime: string;
    dataId: string;
    dataType: DataType;
    description: string;
    hasRead: boolean;
    oId: string;
    userId: string;
}