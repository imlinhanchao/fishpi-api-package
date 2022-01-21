export type ApiResponse<T> = {
    code: number;
    msg: string;
    data: T | undefined
}

export type Account = {
    username: string;
    passwd: string;
} 

export type UserInfo = {
    userCity: string,
    userOnlineFlag: false,
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
    sysMetal: string;
    userRole: string;
    followerCount: number;
    userURL: string;
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

export type ChatRoomMessage = {
    userAvatarURL: string;
    userNickname: string;
    sysMetal: string;
    time: string;
    oId: string;
    userName: string;
    content: string | RedPacketMessage;
}