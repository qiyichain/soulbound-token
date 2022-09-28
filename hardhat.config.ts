import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

let real_accounts: Array<string> = [
    '0x5ea30eea9ba9500f3601f7659f0ccace819c562456e2f745fb2555918ab32277' ,
    '0xcfe945f87d61aa82e903804bcc32bacdf130ae47268a2f6d7a3d877cbf028ff6',
]


const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      initialDate: '2022-09-28T15:09:45.000+08:00',
    },
    qiyichain: {
      initialDate: '2022-09-28T15:09:45.000+08:00',
      url: `http://172.16.100.104:8545`,
      chainId: 12285,
      accounts: real_accounts,
      gas: 15000000,
      gasPrice: 2000000000,
      minGasPrice: 1000000000
    }
  },
};

export default config;
