import { domain } from "./utils";


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
export class Account {
    /**
     * 用户名
     */
    username: string = '';
    /**
     * 密码
     */
    passwd: string = '';
    /**
     * 二次验证码，非必填
     */
    mfaCode?: string = '';
}

/**
 * 注册信息
 */
export class PreRegisterInfo {
    /**
     * 用户名
     */
    username: string = '';
    /**
     * 手机号
     */
    phone: string = '';
    /**
     * 邀请码
     */
    invitecode?: string;
    /**
     * 验证码
     */
    captcha: string = '';
}

/**
 * 注册信息
 */
export class RegisterInfo {
    /**
     * 用户角色
     */
    role: string = '';
    /**
     * 用户密码
     */
    passwd: string = '';
    /**
     * 用户 Id
     */
    userId: string = '';
    /**
     * 邀请人用户名
     */
    r?: string;
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
export class UserInfo {
    /**
     * 用户 id
     */
    oId: string = '';
    /**
     * 用户编号
     */
    userNo: string = '';
    /**
     * 用户名
     */
    userName: string = '';
    /**
     * 昵称
     */
    userNickname: string = '';
    /**
     * 首页地址
     */
    userURL: string = '';
    /**
     * 所在城市
     */
    userCity: string = '';
    /**
     * 签名
     */
    userIntro: string = '';
    /**
     * 是否在线
     */
    userOnlineFlag: boolean = false;
    /**
     * 用户积分
     */
    userPoint: number = 0;
    /**
     * 用户组
     */
    userRole: string = '';
    /**
     * 角色
     */
    userAppRole: UserAppRole = UserAppRole.Hack;
    /**
     * 用户头像地址
     */
    userAvatarURL: string = '';
    /**
     * 用户卡片背景
     */
    cardBg: string = '';
    /**
     * 用户关注数
     */
    followingUserCount: number = 0;
    /**
     * 用户被关注数
     */
    followerCount: number = 0;
    /**
     * 在线时长，单位分钟
     */
    onlineMinute: number = 0;
    /**
     * 是否已经关注，未登录则为 `hide`
     */
    canFollow: 'hide' | 'no' | 'yes' = 'hide';
    /**
     * 用户所有勋章列表，包含未佩戴
     */
    allMetalOwned: MetalList = [];

    /**
     * 用户勋章列表
     */
    sysMetal: MetalList = [];
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
    Average = 'average',
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
export class RedPacket {
    /**
     * 红包类型
     */
    type: RedPacketType= RedPacketType.Random;
    /**
     * 红包积分
     */
    money: number = 32;
    /**
     * 红包个数
     */
    count: number = 1;
    /**
     * 祝福语
     */
    msg: string = '摸鱼者，事竟成';
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
export class RedPacketGot {
    /**
     * 用户 id
     */
    userId: string = '';
    /**
     * 用户名
     */
    userName: string = '';
    /**
     * 用户头像
     */
    avatar: string = '';
    /**
     * 领取到的积分
     */
    userMoney: number = 0;
    /**
     * 领取积分时间
     */
    time: string = '';
}

/**
 * 红包历史信息
 */
export class RedPacketMessage {
    /**
     * 消息类型，固定为 redPacket
     */
    msgType: string = '';
    /**
     * 红包数
     */
    count: number = 0;
    /**
     * 领取数
     */
    got: number = 0;
    /**
     * 内含积分
     */
    money: number = 0;
    /**
     * 祝福语
     */
    msg: string = '';
    /**
     * 发送者 id
     */
    senderId: string = '';
    /**
     * 红包类型
     */
    interface: string = '';
    /**
     * 接收者，专属红包有效
     */
    recivers: Array<string> = [];
    /**
     * 已领取者列表
     */
    who: Array<RedPacketGot> = [];
}

export class RedPacketBase {
    /**
     * 数量
     */
    count: number = 0;
    /**
     * 猜拳类型
     */
    gesture?: GestureType;
    /**
     * 领取数
     */
    got: number = 0;
    /**
     * 祝福语
     */
    msg: string = '';
    /**
     * 发送者用户名
     */
    userName: string = '';
    /**
     * 用户头像
     */
    userAvatarURL: string = '';
}

/**
 * 红包信息
 */
export class RedPacketInfo {
    /**
     * 红包基本信息
     */
    info = new RedPacketBase();
    /**
     * 接收者，专属红包有效
     */
    recivers: Array<string> = [];
    /**
     * 已领取者列表
     */
    who: Array<RedPacketGot> = [];
}

/**
 * 红包状态信息
 */
export class RedPacketStatusMsg {
    /**
     * 对应红包消息 oId
     */
    oId: string = '';
    /**
     * 红包个数
     */
    count: number = 0;
    /**
     * 已领取数量
     */
    got: number = 0;
    /**
     * 发送者信息
     */
    whoGive: any;
    /**
     * 领取者信息
     */
    whoGot: Array<any> = []
}

export class MetalAttr {
    /**
     * 徽标图地址
     */
    url: string = '';
    /**
     * 背景色
     */
    backcolor: string = '';
    /**
     * 文字颜色
     */
    fontcolor: string = '';

    toString() {
        return `url=${this.url}&backcolor=${this.backcolor}&fontcolor=${this.fontcolor}`;
    }
}

export class MetalBase {
    /**
     * 徽章属性
     */
    attr: MetalAttr | string = new MetalAttr();
    /**
     * 徽章名
     */
    name: string = '';
    /**
     * 徽章描述
     */
    description: string = '';
    /**
     * 徽章数据
     */
    data: string = '';

    constructor(metal?: MetalBase) {
        if (!metal) { return; }
        this.attr = Object.assign(new MetalAttr(), metal.attr);
        this.name = metal.name;
        this.description = metal.description;
        this.data = metal.data;
    }

    toUrl(includeText: boolean = true) {
        let url = `https://${domain}/gen?txt=${this.name}&${this.attr.toString()}`;
        if (!includeText) {
            url = `https://${domain}/gen?txt=&${this.attr.toString()}`;
        }
        return url;
    }
}


/**
 * 徽章信息
 */
export class Metal extends MetalBase {
    /**
     * 完整徽章地址（含文字）
     */
    url?: string;
    /**
     * 徽章地址（不含文字）
     */
    icon?: string;
    /**
     * 是否佩戴
     */
    enable: boolean = true;
}

/**
 * 徽章列表
 */
export type MetalList = Array<Metal>

export enum ClientType {
    /**
     * 网页端
     */
    Web = 'Web',
    /**
     * PC 端
     */
    PC = 'PC',
    /**
     * 移动端聊天室
     */
    Mobile = 'Mobile',
    /**
     * Windows 客户端
     */
    Windows = 'Windows',
    /**
     * macOS 客户端
     */
    macOS = 'macOS',
    /**
     * iOS 客户端
     */
    iOS = 'iOS',
    /**
     * Android 客户端
     */
    Android = 'Android',
    /**
     * IDEA 插件
     */
    IDEA = 'IDEA',
    /**
     * Chrome 插件
     */
    Chrome = 'Chrome',
    /**
     * Edge 插件
     */
    Edge = 'Edge',
    /**
     * VSCode 插件
     */
    VSCode = 'VSCode',
    /**
     * Python 插件
     */
    Python = 'Python',
    /**
     * Golang 插件
     */
    Golang = 'Golang',
    /**
     * 小冰机器人
     */
    IceNet = 'IceNet',
    /**
     * 凌机器人
     */
    ElvesOnline = 'ElvesOnline',
    /**
     * 其他插件
     */
    Other = 'Other',
}

export class ChatRoomSource {
    /**
     * 消息来源
     */
    client: ClientType | string = ClientType.Other;
    /**
     * 消息来源版本
     */
    version: string = 'latest';
}

/**
 * 聊天室消息
 */
export class ChatRoomMessage {
    /**
     * 消息 Id
     */
    oId: string = '';
    /**
     * 发送者用户名
     */
    userName: string = '';
    /**
     * 用户昵称
     */
    userNickname: string = '';
    /**
     * 用户头像
     */
    userAvatarURL: string = '';
    /**
     * 用户徽章
     */
    sysMetal: MetalList = [];
    /**
     * 消息来源
     */
    client: string = '';
    /**
     * 消息来源解析
     */
    via = new ChatRoomSource();
    /**
     * 消息内容
     */
    content: string | RedPacketMessage = new RedPacketMessage();
    /**
     * 发送时间
     */
    time: string = '';
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
 * 聊天室消息类型
 */
export enum ChatRoomMessageType {
    /**
     * 在线用户
     */
    online = 'online',
    /**
     * 话题修改
     */
    discussChanged = 'discussChanged',
    /**
     * 消息撤回
     */
    revoke = 'revoke',
    /**
     * 消息
     */
    msg = 'msg',
    /**
     * 红包
     */
    redPacket = 'redPacket',
    /**
     * 红包状态
     */
    redPacketStatus = 'redPacketStatus',
    /**
     * 弹幕
     */
    barrager = 'barrager',
    /**
     * 自定义消息
     */
    custom = 'customMessage',
}

/**
 * 聊天室消息
 */
export interface Message extends MessageEvent {
    /**
     * 消息类型，
     */
    type: ChatRoomMessageType | string;
    /**
     * 消息内容
     */
    data: OnlineMsg | discussMsg | RevokeMsg | ChatMsg | RedPacketStatusMsg | BarragerMsg | CustomMsg;
}

export type CustomMsg = string;

/**
 * 弹幕消息
 */
export class BarragerMsg {
    /**
     * 用户名
     */
    userName: string = '';
    /**
     * 用户昵称
     */
    userNickname: string = '';
    /**
     * 弹幕内容
     */
    barragerContent: string = '';
    /**
     * 弹幕颜色
     */
    barragerColor: string = '';
    /**
     * 用户头像地址
     */
    userAvatarURL: string = '';
    /**
     * 用户头像地址 20x20
     */
    userAvatarURL20: string = '';
    /**
     * 用户头像地址 48x48
     */
    userAvatarURL48: string = '';
    /**
     * 用户头像地址 210x210
     */
    userAvatarURL210: string = '';
}

export class OnlineInfo {
    /**
     * 用户首页
     */
    homePage: string = '';
    /**
     * 用户头像
     */
    userAvatarURL: string = '';
    /**
     * 用户名
     */
    userName: string = '';
}

/**
 * 在线用户消息
 */
export type OnlineMsg = OnlineInfo[]

/**
 * 主题修改消息，主题内容
 */
export type discussMsg = string

/**
 * 撤回消息，被撤回消息的 oId
 */
export type RevokeMsg = string

/**
 * 聊天消息
 */
export class ChatMsg {
    /**
     * 消息 oId
     */
    oId: string = '';
    /**
     * 消息发送时间
     */
    time: string = '';
    /**
     * 用户 Id
     */
    userOId: string = '';
    /**
     * 发送者用户名
     */
    userName: string = '';
    /**
     * 发送者昵称
     */
    userNickname: string = '';
    /**
     * 发送者头像
     */
    userAvatarURL: string = '';
    /**
     * 消息内容
     */
    content: string | RedPacket = '';
    /**
     * 消息内容 Markdown
     */
    md: string = ''
    /**
     * 消息来源
     */
    client: string = '';
    /**
     * 消息来源解析
     */
    via = new ChatRoomSource();
}

export class AtUser {
    /**
     * 用户名
     */
    userName: string = '';
    /**
     * 用户头像
     */
    userAvatarURL: string = '';
    /**
     * 全小写用户名
     */
    userNameLowerCase: string = '';
}

/**
 * @ 用户列表
 */
export type AtUserList = AtUser[];

/**
 * 上传文件响应
 */
export class UploadInfo {
    /**
     * 上传失败文件
     */
    errFiles: Array<string> = [];
    /**
     * 上传成功文件
     */
    succMap: {
        /**
         * Key 是文件名，value 为地址
         */
        [key: string]: string;
    } = {};
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
export class  NoticeCount {
    /**
     * 用户是否启用 Web 通知
     */
    userNotifyStatus: boolean = true;
    /**
     * 未读通知数
     */
    unreadNotificationCnt: number = 0;
    /**
     * 未读回复通知数
     */
    unreadReplyNotificationCnt: number = 0;
    /**
     * 未读积分通知数
     */
    unreadPointNotificationCnt: number = 0;
    /**
     * 未读 @ 通知数
     */
    unreadAtNotificationCnt: number = 0;
    /**
     * 未读同城通知数
     */
    unreadBroadcastNotificationCnt: number = 0;
    /**
     * 未读系统通知数
     */
    unreadSysAnnounceNotificationCnt: number = 0;
    /**
     * 未读关注者通知数
     */
    unreadNewFollowerNotificationCnt: number = 0;
    /**
     * 未读关注通知数
     */
    unreadFollowingNotificationCnt: number = 0;
    /**
     * 未读评论通知数
     */
    unreadCommentedNotificationCnt: number = 0;
}

/**
 * 积分通知
 */
export class NoticePoint {
    /**
     * 通知 id
     */
    oId: string = '';
    /**
     * 数据 id
     */
    dataId: string = '';
    /**
     * 用户 id
     */
    userId: string = '';
    /**
     * 数据类型
     */
    dataType: DataType = DataType.at;
    /**
     * 通知描述
     */
    description: string = '';
    /**
     * 是否已读
     */
    hasRead: boolean = true;
    /**
     * 创建日期
     */
    createTime: string = '';
}

/**
 * 评论/回帖通知
 */
export class NoticeComment {
    /**
     * 通知 id
     */
    oId: string = '';
    /**
     * 文章标题
     */
    commentArticleTitle: string = '';
    /**
     * 文章作者
     */
    commentAuthorName: string = '';
    /**
     * 作者头像
     */
    commentAuthorThumbnailURL: string = '';
    /**
     * 文章类型
     */
    commentArticleType: number = 0;
    /**
     * 是否精选
     */
    commentArticlePerfect: number = 0;
    /**
     * 评论内容
     */
    commentContent: string = '';
    /**
     * 评论地址
     */
    commentSharpURL: string = '';
    /**
     * 是否已读
     */
    hasRead: boolean = true;
    /**
     * 评论时间
     */
    commentCreateTime: string = '';
}

/**
 * 提到我通知
 */
export class NoticeAt {
    /**
     * 通知 id
     */
    oId: string = '';
    /**
     * 数据类型
     */
    dataType: DataType = DataType.at;
    /**
     * 用户名
     */
    userName: string = '';
    /**
     * 用户头像
     */
    userAvatarURL: string = '';
    /**
     * 通知内容
     */
    content: string = '';
    /**
     * 是否已读
     */
    hasRead: boolean = true;
    /**
     * 创建时间
     */
    createTime: string = '';
}

/**
 * 我关注的通知
 */
export class NoticeFollow {
    /**
     * 通知 Id
     */
    oId: string = '';
    /**
     * 文章地址
     */
    url: string = '';
    /**
     * 数据类型
     */
    dataType: DataType = DataType.at;
    /**
     * 文章标题
     */
    articleTitle: string = '';
    /**
     * 作者
     */
    authorName: string = '';
    /**
     * 通知内容
     */
    content: string = '';
    /**
     * 是否评论
     */
    isComment: boolean = false;
    /**
     * 作者头像
     */
    thumbnailURL: string = '';
    /**
     * 文章评论数
     */
    articleCommentCount: number = 0;
    /**
     * 是否精选
     */
    articlePerfect: number = 0;
    /**
     * 文章标签列表
     */
    articleTagObjs: Array<ArticleTag> = [];
    /**
     * 文章标签
     */
    articleTags: string = '';
    /**
     * 文章类型
     */
    articleType: number = 0;
    /**
     * 是否已读
     */
    hasRead: boolean = true;
    /**
     * 通知创建时间
     */
    createTime: string = '';
}

/**
 * 系统通知数据
 */
export class NoticeSystem {
    /**
     * 消息的 oId
     */
    oId: string = '';
    /**
     * 用户 Id
     */
    userId: string = '';
    /**
     * 数据 Id
     */
    dataId: string = '';
    /**
     * 数据类型
     */
    dataType: DataType = DataType.at;
    /**
     * 消息描述
     */
    description: string = '';
    /**
     * 是否已读
     */
    hasRead: boolean = true;
    /**
     * 创建日期
     */
    createTime: string = '';
}

export class BreezemoonContent {
    /**
     * 发布者用户名
     */
    breezemoonAuthorName: string = '';
    /**
     * 最后更新时间
     */
    breezemoonUpdated: string = '';
    /**
     * 清风明月ID
     */
    oId: string = '';
    /**
     * 创建时间
     */
    breezemoonCreated: string = '';
    /**
     * 发布者头像URL
     */
    breezemoonAuthorThumbnailURL48: string = '';
    /**
     * 发布时间
     */
    timeAgo: string = '';
    /**
     * 正文
     */
    breezemoonContent: string = '';
    /**
     * 创建时间
     */
    breezemoonCreateTime: string = '';
    /**
     * 发布城市（可能为空，请注意做判断）
     */
    breezemoonCity: string = '';
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
export class Report {
    /**
     * 举报对象的 oId
     */
    reportDataId: string = '';
    /**
     * 举报数据的类型
     */
    reportDataType: ReportDataType = ReportDataType.article;
    /**
     * 举报的类型
     */
    reportType: ReportType = ReportType.advertise;
    /**
     * 举报的理由
     */
    reportMemo: string = '';
}

/**
 * 帖子类型
 */
export enum ArticleType {
    Normal = 0,
    Private = 1,
    Broadcast = 2,
    Thought = 3,
    Question = 5,
}

/**
 * 发帖信息
 */
export class ArticlePost {
    /**
     * 帖子标题
     */
    articleTitle: string = '';
    /**
     * 帖子内容
     */
    articleContent: string = '';
    /**
     * 帖子标签
     */
    articleTags: string = '';
    /**
     * 是否允许评论
     */
    articleCommentable: boolean = true;
    /**
     * 是否帖子关注者
     */
    articleNotifyFollowers: boolean = false;
    /**
     * 帖子类型
     */
    articleType: ArticleType = ArticleType.Normal;
    /**
     * 是否在列表展示
     */
    articleShowInList: 0 | 1 = 1;
    /**
     * 打赏内容
     */
    articleRewardContent?: string;
    /**
     * 打赏积分
     */
    articleRewardPoint?: string;
    /**
     * 是否匿名
     */
    articleAnonymous?: boolean;
    /**
     * 提问悬赏积分
     */
    articleQnAOfferPoint?: number;
}

/**
 * 文章标签
 */
export class ArticleTag {
    /**
     * 标签 id
     */
    oId: string = '';
    /**
     * 标签名
     */
    tagTitle: string = '';
    /**
     * 标签描述
     */
    tagDescription: string = '';
    /**
     * icon 地址
     */
    tagIconPath: string = '';
    /**
     * 标签地址
     */
    tagURI: string = '';
    /**
     * 标签自定义 CSS
     */
    tagCSS: string = '';
    /**
     * 反对数
     */
    tagBadCnt: number = 0;
    /**
     * 标签回帖计数
     */
    tagCommentCount: number = 0;
    /**
     * 关注数
     */
    tagFollowerCount: number = 0;
    /**
     * 点赞数
     */
    tagGoodCnt: number = 0;
    /**
     * 引用计数
     */
    tagReferenceCount: number = 0;
    /**
     * 标签相关链接计数
     */
    tagLinkCount: number = 0;
    /**
     * 标签 SEO 描述
     */
    tagSeoDesc: string = '';
    /**
     * 标签关键字
     */
    tagSeoKeywords: string = '';
    /**
     * 标签 SEO 标题
     */
    tagSeoTitle: string = '';
    /**
     * 标签广告内容
     */
    tagAd: string = '';
    /**
     * 是否展示广告
     */
    tagShowSideAd: 0 | 1 = 0;
    /**
     * 标签状态
     */
    tagStatus: 0 | 1 = 0;
    /**
     * 标签随机数
     */
    tagRandomDouble: number = 0;
}

/**
 * 公开状态
 */
export enum PublicStatus {
    Public = 0,
    Private = 1,
}

/**
 * 投票状态，点赞与否
 */
export enum VoteStatus {
    /**
     * 未投票
     */
    normal = -1,
    /**
     * 点赞
     */
    up = 0,
    /**
     * 点踩
     */
    down = 1,
}


/**
 * 是否状态
 */
export enum YesNoStatus {
    Yes = 0,
    No = 1,
}

/**
 * 文章状态
 */
export enum ArticleStatus {
    /**
     * 正常
     */
    Normal = 0,
    /**
     * 封禁
     */
    Ban = 1,
    /**
     * 锁定
     */
    Lock = 2,
}

/**
 * 文章作者信息
 */
export class Author {
    /**
     * 用户是否在线
     */
    userOnlineFlag: boolean = false;
    /**
     * 用户在线时长
     */
    onlineMinute: number = 0;
    /**
     * 是否公开积分列表
     */
    userPointStatus: PublicStatus = PublicStatus.Public;
    /**
     * 是否公开关注者列表
     */
    userFollowerStatus: PublicStatus = PublicStatus.Public;
    /**
     * 用户完成新手指引步数
     */
    userGuideStep: number = 0;
    /**
     * 是否公开在线状态
     */
    userOnlineStatus: PublicStatus = PublicStatus.Public;
    /**
     * 上次登录日期
     */
    userCurrentCheckinStreakStart: number = 0;
    /**
     * 是否聊天室图片自动模糊
     */
    chatRoomPictureStatus: boolean = false;
    /**
     * 用户标签
     */
    userTags: string = '';
    /**
     * 是否公开回帖列表
     */
    userCommentStatus: PublicStatus = PublicStatus.Public;
    /**
     * 用户时区
     */
    userTimezone: string = '';
    /**
     * 用户个人主页
     */
    userURL: string = '';
    /**
     * 是否启用站外链接跳转页面
     */
    userForwardPageStatus: boolean = false;
    /**
     * 是否公开 UA 信息
     */
    userUAStatus: PublicStatus = PublicStatus.Public;
    /**
     * 自定义首页跳转地址
     */
    userIndexRedirectURL: string = '';
    /**
     * 最近发帖时间
     */
    userLatestArticleTime: number = 0;
    /**
     * 标签计数
     */
    userTagCount: number = 0;
    /**
     * 昵称
     */
    userNickname: string = '';
    /**
     * 回帖浏览模式
     */
    userListViewMode: 0 | 1 = 0;
    /**
     * 最长连续签到
     */
    userLongestCheckinStreak: number = 0;
    /**
     * 用户头像类型
     */
    userAvatarType: number = 0;
    /**
     * 用户确认邮件发送时间
     */
    userSubMailSendTime: number = 0;
    /**
     * 用户最后更新时间
     */
    userUpdateTime: number = 0;
    /**
     * userSubMailStatus
     */
    userSubMailStatus: YesNoStatus = YesNoStatus.No;
    /**
     * 是否加入积分排行
     */
    userJoinPointRank: YesNoStatus = YesNoStatus.No;
    /**
     * 用户最后登录时间
     */
    userLatestLoginTime: number = 0;
    /**
     * 应用角色
     */
    userAppRole: number = 0;
    /**
     * 头像查看模式
     */
    userAvatarViewMode: number = 0;
    /**
     * 用户状态
     */
    userStatus: number = 0;
    /**
     * 用户上次最长连续签到日期
     */
    userLongestCheckinStreakEnd: number = 0;
    /**
     * 是否公开关注帖子列表
     */
    userWatchingArticleStatus: PublicStatus = PublicStatus.Public;
    /**
     * 上次回帖时间
     */
    userLatestCmtTime: number = 0;
    /**
     * 用户省份
     */
    userProvince: string = '';
    /**
     * 用户当前连续签到计数
     */
    userCurrentCheckinStreak: number = 0;
    /**
     * 用户编号
     */
    userNo: number = 0;
    /**
     * 用户头像
     */
    userAvatarURL: string = '';
    /**
     * 是否公开关注标签列表
     */
    userFollowingTagStatus: PublicStatus = PublicStatus.Public;
    /**
     * 用户语言
     */
    userLanguage: string = '';
    /**
     * 是否加入消费排行
     */
    userJoinUsedPointRank: YesNoStatus = YesNoStatus.No;
    /**
     * 上次签到日期
     */
    userCurrentCheckinStreakEnd: number = 0;
    /**
     * 是否公开收藏帖子列表
     */
    userFollowingArticleStatus: PublicStatus = PublicStatus.Public;
    /**
     * 是否启用键盘快捷键
     */
    userKeyboardShortcutsStatus: YesNoStatus = YesNoStatus.No;
    /**
     * 是否回帖后自动关注帖子
     */
    userReplyWatchArticleStatus: YesNoStatus = YesNoStatus.No;
    /**
     * 回帖浏览模式
     */
    userCommentViewMode: number = 0;
    /**
     * 是否公开清风明月列表
     */
    userBreezemoonStatus: PublicStatus = PublicStatus.Public;
    /**
     * 用户上次签到时间
     */
    userCheckinTime: number = 0;
    /**
     * 用户消费积分
     */
    userUsedPoint: number = 0;
    /**
     * 是否公开帖子列表
     */
    userArticleStatus: PublicStatus = PublicStatus.Public;
    /**
     * 用户积分
     */
    userPoint: number = 0;
    /**
     * 用户回帖数量
     */
    userCommentCount: number = 0;
    /**
     * 用户个性签名
     */
    userIntro: string = '';
    /**
     * 移动端主题
     */
    userMobileSkin: string = '';
    /**
     * 分页每页条目
     */
    userListPageSize: number = 0;
    /**
     * 文章 Id
     */
    oId: string = '';
    /**
     * 用户名
     */
    userName: string = '';
    /**
     * 是否公开 IP 地理信息
     */
    userGeoStatus: PublicStatus = PublicStatus.Public;
    /**
     * 最长连续签到起始日
     */
    userLongestCheckinStreakStart: number = 0;
    /**
     * 用户主题
     */
    userSkin: string = '';
    /**
     * 是否启用 Web 通知
     */
    userNotifyStatus: YesNoStatus = YesNoStatus.No;
    /**
     * 公开关注用户列表
     */
    userFollowingUserStatus: PublicStatus = PublicStatus.Public;
    /**
     * 文章数
     */
    userArticleCount: number = 0;
    /**
     * 用户角色
     */
    userRole: string = '';
    /**
     * 徽章
     */
    sysMetal?: MetalList;
}

export class Pagination {
    /**
     * 评论分页数
     */
    paginationPageCount: string = '';
    /**
     * 建议分页页码
     */
    paginationPageNums: Array<number> = [];
}

/**
 * 文章详情
 */
export class ArticleDetail {
    /**
     * 是否在列表展示
     */
    articleShowInList: boolean = true;
    /**
     * 文章创建时间
     */
    articleCreateTime: string = '';
    /**
     * 发布者Id
     */
    articleAuthorId: string = '';
    /**
     * 反对数
     */
    articleBadCnt: number = 0;
    /**
     * 文章最后修改时间
     */
    articleLatestCmtTime: string = '';
    /**
     * 赞同数
     */
    articleGoodCnt: number = 0;
    /**
     * 悬赏积分
     */
    articleQnAOfferPoint: number = 0;
    /**
     * 作者头像缩略图
     */
    articleThumbnailURL: string = '';
    /**
     * 置顶序号
     */
    articleStickRemains: number = 0;
    /**
     * 发布时间简写
     */
    timeAgo: string = '';
    /**
     * 文章更新时间
     */
    articleUpdateTimeStr: string = '';
    /**
     * 作者用户名
     */
    articleAuthorName: string = '';
    /**
     * 文章类型
     */
    articleType: ArticleType = ArticleType.Normal;
    /**
     * 是否悬赏
     */
    offered: boolean = false;
    /**
     * 文章创建时间字符串
     */
    articleCreateTimeStr: string = '';
    /**
     * 文章浏览数
     */
    articleViewCount: number = 0;
    /**
     * 作者头像缩略图
     */
    articleAuthorThumbnailURL20: string = '';
    /**
     * 关注数
     */
    articleWatchCnt: number = 0;
    /**
     * 文章预览内容
     */
    articlePreviewContent: string = '';
    /**
     * 文章标题
     */
    articleTitleEmoj: string = '';
    /**
     * 文章标题
     */
    articleTitleEmojUnicode: string = '';
    /**
     * 文章标题
     */
    articleTitle: string = '';
    /**
     * 作者头像缩略图
     */
    articleAuthorThumbnailURL48: string = '';
    /**
     * 文章评论数
     */
    articleCommentCount: number = 0;
    /**
     * 收藏数
     */
    articleCollectCnt: number = 0;
    /**
     * 文章最后评论者
     */
    articleLatestCmterName: string = '';
    /**
     * 文章标签
     */
    articleTags: string = '';
    /**
     * 文章 id
     */
    oId: string = '';
    /**
     * 最后评论时间简写
     */
    cmtTimeAgo: string = '';
    /**
     * 是否置顶
     */
    articleStick: number = 0;
    /**
     * 文章标签信息
     */
    articleTagObjs: Array<ArticleTag> = [];
    /**
     * 文章最后评论时间
     */
    articleLatestCmtTimeStr: string = '';
    /**
     * 是否匿名
     */
    articleAnonymous: boolean = false;
    /**
     * 文章感谢数
     */
    articleThankCnt: number = 0;
    /**
     * 文章更新时间
     */
    articleUpdateTime: string = '';
    /**
     * 文章状态
     */
    articleStatus: ArticleStatus = ArticleStatus.Normal;
    /**
     * 文章点击数
     */
    articleHeat: number = 0;
    /**
     * 文章是否优选
     */
    articlePerfect: boolean = false;
    /**
     * 作者头像缩略图
     */
    articleAuthorThumbnailURL210: string = '';
    /**
     * 文章固定链接
     */
    articlePermalink: string = '';
    /**
     * 作者用户信息
     */
    articleAuthor: Author = new Author();
    /**
     * 文章感谢数
     */
    thankedCnt?: number;
    /**
     * 文章匿名浏览量
     */
    articleAnonymousView?: number;
    /**
     * 文章浏览量简写
     */
    articleViewCntDisplayFormat?: string;
    /**
     * 文章是否启用评论
     */
    articleCommentable?: boolean;
    /**
     * 是否已打赏
     */
    rewarded?: boolean;
    /**
     * 打赏人数
     */
    rewardedCnt?: number;
    /**
     * 文章打赏积分
     */
    articleRewardPoint?: number;
    /**
     * 是否已收藏
     */
    isFollowing?: boolean;
    /**
     * 是否已关注
     */
    isWatching?: boolean;
    /**
     * 是否是我的文章
     */
    isMyArticle?: boolean;
    /**
     * 是否已感谢
     */
    thanked?: boolean;
    /**
     * 编辑器类型
     */
    articleEditorType?: number;
    /**
     * 文章音频地址
     */
    articleAudioURL?: string;
    /**
     * 文章目录 HTML
     */
    articleToC?: string;
    /**
     * 文章内容 HTML
     */
    articleContent?: string;
    /**
     * 文章内容 Markdown
     */
    articleOriginalContent?: string;
    /**
     * 文章缩略图
     */
    articleImg1URL?: string;
    /**
     * 文章点赞状态
     */
    articleVote?: VoteStatus;
    /**
     * 文章随机数
     */
    articleRandomDouble?: number;
    /**
     * 作者签名
     */
    articleAuthorIntro?: string;
    /**
     * 发布城市
     */
    articleCity?: string;
    /**
     * 发布者 IP
     */
    articleIP?: string;
    /**
     * 作者首页地址
     */
    articleAuthorURL?: string;
    /**
     * 推送 Email 推送顺序
     */
    articlePushOrder?: number;
    /**
     * 打赏内容
     */
    articleRewardContent?: string;
    /**
     * reddit分数
     */
    redditScore?: string;
    /**
     * 评论分页信息
     */
    pagination?: Pagination;
    /**
     * 评论是否可见
     */
    discussionViewable: boolean = true;
    /**
     * 文章修改次数
     */
    articleRevisionCount: number = 0;
    /**
     * 文章的评论
     */
    articleComments?: Array<ArticleComment>;
    /**
     * 文章最佳评论
     */
    articleNiceComments?: Array<ArticleComment>;
}

/**
 * 文章评论
 */
export class ArticleComment {
    /**
     * 是否优评
     */
    commentNice: boolean = false;
    /**
     * 评论创建时间字符串
     */
    commentCreateTimeStr: string = '';
    /**
     * 评论作者 id
     */
    commentAuthorId: string = '';
    /**
     * 评论分数
     */
    commentScore: number = 0;
    /**
     * 评论创建时间
     */
    commentCreateTime: string = '';
    /**
     * 评论作者头像
     */
    commentAuthorURL: string = '';
    /**
     * 评论状态
     */
    commentVote: VoteStatus = VoteStatus.normal;
    /**
     * 评论引用数
     */
    commentRevisionCount: number = 0;
    /**
     * 评论经过时间
     */
    timeAgo: string = '';
    /**
     * 回复评论 id
     */
    commentOriginalCommentId: string = '';
    /**
     * 徽章
     */
    sysMetal: MetalList = [];
    /**
     * 点赞数
     */
    commentGoodCnt: number = 0;
    /**
     * 评论是否可见
     */
    commentVisible: YesNoStatus = YesNoStatus.No;
    /**
     * 文章 id
     */
    commentOnArticleId: string = '';
    /**
     * 评论感谢数
     */
    rewardedCnt: number = 0;
    /**
     * 评论地址
     */
    commentSharpURL: string = '';
    /**
     * 是否匿名
     */
    commentAnonymous: boolean = false;
    /**
     * 评论回复数
     */
    commentReplyCnt: number = 0;
    /**
     * 评论 id
     */
    oId: string = '';
    /**
     * 评论内容
     */
    commentContent: string = '';
    /**
     * 评论状态
     */
    commentStatus: ArticleStatus = ArticleStatus.Normal;
    /**
     * 评论作者
     */
    commenter: Author = new Author();
    /**
     * 评论作者用户名
     */
    commentAuthorName: string = '';
    /**
     * 评论感谢数
     */
    commentThankCnt: number = 0;
    /**
     * 评论点踩数
     */
    commentBadCnt: number = 0;
    /**
     * 是否已感谢
     */
    rewarded: boolean = false;
    /**
     * 评论作者头像
     */
    commentAuthorThumbnailURL: string = '';
    /**
     * 评论音频地址
     */
    commentAudioURL: string = '';
    /**
     * 评论是否采纳，1 表示采纳
     */
    commentQnAOffered: number = 0;
}

/**
 * 文章列表
 */
export class ArticleList {
    /**
     * 文章列表
     */
    articles: Array<ArticleDetail> = [];
    /**
     * 分页信息
     */
    pagination = new Pagination();
    /**
     * 标签信息，仅查询标签下文章列表有效
     */
    tag?: ArticleTag;
};


/**
 * 帖子列表查询类型
 */
export enum ArticleListType {
    /**
     * 最近
     */
    Recent = '',
    /**
     * 热门
     */
    Hot = '/hot',
    /**
     * 点赞
     */
    Good = '/good',
    /**
     * 最近回复
     */
    Reply = '/reply',
    /**
     * 优选，需包含标签
     */
    Perfect = '/perfact'
}

/**
 * 点赞类型
 */
export enum VoteStatus {
    /**
     * 点赞
     */
    Voted = 0,
    /**
     * 取消点赞
     */
    Unvote = -1
}

export class CommentPost {
    /**
     * 文章 Id
     */
    articleId: string = '';
    /**
     * 是否匿名评论
     */
    commentAnonymous: boolean = false;
    /**
     * 评论是否楼主可见
     */
    commentVisible: boolean = true;
    /**
     * 评论内容
     */
    commentContent: string = '';
    /**
     * 回复评论 Id
     */
    commentOriginalCommentId?: string;
}

/**
 * 私聊内容
 */
export class ChatData {
    /**
     * 接收者 Id
     */
    toId: string = '';
    /**
     * 预览内容
     */
    preview: string = '';
    /**
     * 消息用户 Session
     */
    user_session: string = '';
    /**
     * 发送者头像
     */
    senderAvatar: string = '';
    /**
     * 消息 Markdown
     */
    markdown: string = '';
    /**
     * 接收者头像
     */
    receiverAvatar: string = '';
    /**
     * 消息 Id
     */
    oId: string = '';
    /**
     * 发送时间
     */
    time: string = '';
    /**
     * 来源 Id
     */
    fromId: string = '';
    /**
     * 发送者用户名
     */
    senderUserName: string = '';
    /**
     * 消息内容 HTML
     */
    content: string = '';
    /**
     * 接收者用户名
     */
    receiverUserName: string = '';
}

/**
 * 私聊撤回消息
 */
export class ChatRevoke {
    /**
     * 消息 Id
     */
    data: string = '';
    type: 'revoke' = 'revoke';
}

/**
 * 禁言用户信息
 */
export class MuteItem {
    /**
     * 解除禁言时间戳
     */
    time: number = 0;
    /**
     * 用户头像
     */
    userAvatarURL: string = '';
    /**
     * 用户名
     */
    userName: string = '';
    /**
     * 用户昵称
     */
    userNickname: string = '';
}

/**
 * 通知消息
 */
export class NoticeMsg {
    /**
     * 通知类型 
     */ 
    command: 'refreshNotification' | 'chatUnreadCountRefresh' | 'newIdleChatMessage' | 'warnBroadcast' = 'refreshNotification';
    /*
     * 通知接收者用户Id
     */
    userId: string = '';
    /**
     * 私聊内容预览，仅 `newIdleChatMessage` 有信息
     */
    preview?: string;
    /**
     * 私聊发送者头像，仅 `refreshNotification` 有信息
     */
    senderAvatar?: string;
    /**
     * 私聊发送者用户名，仅 `refreshNotification` 有信息
     */
    senderUserName?: string;
    /**
     * 私聊消息数，仅 `chatUnreadCountRefresh` 有信息
     */
    count?: number;
    /**
     * 全局公告内容，仅 `warnBroadcast` 有信息
     */
    warnBroadcastText?: string;
    /**
     * 全局公告发布者，仅 `warnBroadcast` 有信息
     */
    who?: string;
}

export class Log {
    /**
     * 操作时间
     */
    key1: string = '';
    /**
     * IP
     */
    key2: string = '';
    /**
     * 内容
     */
    data: string = '';
    /**
     * 是否公开
     */
    public: boolean = true;
    /**
     * 操作类型
     */
    key3: string = '';
    /**
     * 唯一标识
     */
    oId: string = '';
    /**
     * 类型
     */
    type: string = '';
}