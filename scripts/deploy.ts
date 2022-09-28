
const { ethers, upgrades } = require("hardhat");

async function main() {

    //    acc  = ethers.getSigners()
    const [owner] = await ethers.getSigners();

    // Deploying
    const sbt = await ethers.getContractFactory("SBT");
    const instance = await upgrades.deployProxy(
        sbt,
        [
            "Soulbound Token",
            "SBT",
            owner.address,
        ],
        {
            initializer: "initialize",
            kind: "transparent",
            unsafeAllow: ['delegatecall']
        }
    );

    let ret = await instance.deployed();
    console.log(ret)

//   await upgradeProxy(proxyAddress, implementationFactory, { unsafeAllow: ['delegatecall'] });

//   Upgrading
//   const BoxV2 = await ethers.getContractFactory("BoxV2");
//   const upgraded = await upgrades.upgradeProxy(instance.address, BoxV2);
}

main();