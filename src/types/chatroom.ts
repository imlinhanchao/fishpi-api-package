import { ClientType, MetalList, RedPacket, RedPacketMessage, RedPacketStatusMsg } from "../typing";

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

/**
 * 在线用户信息
 */
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
