import { Account } from '../src/typing';
import FishPi from '../src';

async function test(apiKey: string) {
    let fish = new FishPi(apiKey);
    console.dir(await fish.account.info());
    console.dir(await fish.chatroom.more());
    fish.chatroom.addListener((ev:any) => console.dir(ev));
}

test('3Qs6LE4ZzPy4eEPZpusmVHmYchKTjbQD');