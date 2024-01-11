/**
 * 摸鱼大闯关信息
 */ 
export class MoFishGame {
    userName = '';
    stage = '';
    time = 0;
}

/**
 * 用户 IP 信息
 */
export class UserIP {
    latestLoginIP = '';
    userId = '';
}

/**
 * 用户背包物品类型
 */
export enum UserBagType {
    checkin1day,
    checkin2days,
    patchCheckinCard,
    metalTicket,
}

/**
 * 用户背包信息
 */
export class UserBag {
    /**
     * 免签卡
     */
    checkin1day = 0;

    /**
     * 两日免签卡
     */
    checkin2days = 0;

    /**
     * 补签卡
     */
    patchCheckinCard = 0;

    /**
     * 摸鱼派一周年纪念勋章领取券
     */
    metalTicket = 0;
}
