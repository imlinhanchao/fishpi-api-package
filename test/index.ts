import { Account } from "..";
import FishPi from "../src";

async function test(account: Account) {
    let fish = new FishPi();
    console.dir(await fish.login(account));
    console.dir(await fish.info());
    fish.chatroom.addListener((ev:any) => console.dir(ev));
}

test({
    username: '',
    passwd: ''
});