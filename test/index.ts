import { Account, ArticleListType, NoticeType } from '../src/typing';
import FishPi from '../src';
import fetch from 'node-fetch'

globalThis.fetch = fetch as any;

async function test(apiKey: string) {
    let fish = new FishPi(apiKey);
    fish.setDomain('gaypi.cn');
    // user.ts
    console.dir('user info', await fish.account.info());
    console.dir('user emotions', await fish.account.emotions());
    console.dir('user liveness', await fish.account.liveness());
    console.dir('user isCheckIn', await fish.account.isCheckIn());
    console.dir('user isCollectedLiveness', await fish.account.isCollectedLiveness());
    console.dir('user rewardLiveness', await fish.account.rewardLiveness());

    // emoji.ts
    console.dir('emoji default', await fish.emoji.default);
    console.dir('emoji exists', await fish.emoji.exists('1f60d'));
    console.dir('emoji list', await fish.emoji.get());

    // notice.ts
    console.dir('notice list', await fish.notice.count());
    console.dir('notice list', await fish.notice.list(NoticeType.At));
    console.dir('notice list', await fish.notice.makeRead(NoticeType.At));

    // article.ts
    console.log('article list', await fish.article.list({ type: ArticleListType.Hot}));

    // chatroom.ts
    console.dir(await fish.chatroom.more());
    fish.chatroom.addListener((ev:any) => console.dir(ev));
    fish.chatroom.send('试试~');
}

test('your token');