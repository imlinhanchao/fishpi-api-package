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
