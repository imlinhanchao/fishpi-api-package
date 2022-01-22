export type ApiResponse<T> = {
    code: number;
    msg: string;
    data?: T
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
    type: string;
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
    dataType: number;
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
    dataType: number;
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
    dataType: number;
    hasRead: boolean;
    isComment: boolean;
    oId: string;
    thumbnailURL: string;
    url: string;
}

export type NoticeSystem = {
    createTime: string;
    dataId: string;
    dataType: number;
    description: string;
    hasRead: boolean;
    oId: string;
    userId: string;
}