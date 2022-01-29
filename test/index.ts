import { Account } from '../src/typing';
import FishPi from '../src';

async function test(account: Account) {
    let fish = new FishPi();
    console.dir(await fish.login(account));
    console.dir(await fish.account.info());
    fish.chatroom.addListener((ev:any) => console.dir(ev));
}

test({
    username: '',
    passwd: ''
});