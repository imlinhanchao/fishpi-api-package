# 摸鱼派 API Package
摸鱼派社区 (https://fishpi.cn/) 的 API Package，可以快速开发出一款应用支援社区功能。

## 支援
- 用户信息；
- 聊天室；
- 文件上传；
- 通知信息；

## 安装

```bash
npm install fishpi
```

## 用例

```ts
import FishPi from 'fishpi';

// 登录获取 apiKey
let apiKey = '';
let fish = new FishPi();
let rsp = await fish.login({ 
    username: 'username', 
    passwd: 'password123456' 
});
if (rsp.code == 0) apiKey = rsp.Key;

// 通过 apiKey 获取登录用户信息
let fish = new FishPi(apiKey);
console.dir(await fish.info());

// 获取用户自定义表情包
let emojis = await fish.emoji.get();
// 获取默认表情包
let defaultEmoji = fish.emoji.default;

// 监听聊天室消息
fish.chatroom.addListener((ev:any) => console.dir(ev));
// 向聊天室发送信息（需要登录）
await fish.chatroom.send('Hello World!');
// 向聊天室发送红包
await fish.chatroom.redpacket.send({
    type: 'random';
    money: 32;
    count: 2;
    msg: '摸鱼者，事竟成！';
    recivers: [];
})

```
