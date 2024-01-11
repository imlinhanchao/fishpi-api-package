
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

/**
 * 红包基本信息
 */
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
