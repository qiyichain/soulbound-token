# Sample Hardhat Project

![V神关于灵魂绑定代币的论文](./papaer/sbt.pdf)

此SBT的实现，基于EIP1967实现的可升级合约。

```

# 编译
yarn build

# 测试
yarn test

# 部署到测试链
yarn deploy


```

部署完成之后，在`.openzeppelin`目录下会有部署的详情

内容如下
```json
{
  "manifestVersion": "3.2",
  "admin": {
    "address": "0xeA48C4070e1b6f82a8480d844e119D1B55fe73e3",
    "txHash": "0x70ba0c4835d2dd247728122d9c3ce8b4e3b138d1f7e59e2101446ed66db39ce0"
  },
  "proxies": [
    {
      "address": "0x9C08968CF63D662141745d303A57C622D2dc6d85",
      "txHash": "0x4e62987290cf10c957700235f5ce3ce2e9d3168ec3ac70050d270dfd2e2fc9a7",
      "kind": "transparent"
    }
  ],
  "impls": {
    "0b69b624db2373cd37bdb6be1b0871e21688357630db69dde41f1eaa326a7a19": {
      "address": "0x545503ab5AbE8F58143dD188876bB6a3b33D6179",
      "txHash": "0xd1690b3f580a0532e8fafb482c2efcff9b7af03099db5bcaac960e24af809291",
      ....
    }
  }
}

```
其中：
- `admin`: 管理员合约
- `proxies`: 代理合约
- `impl`： 逻辑代码
