
const { ethers, upgrades } = require("hardhat");

async function main() {
  // Deploying
  const sbt = await ethers.getContractFactory("SBT");
  const instance = await upgrades.deployProxy(sbt );
  await instance.deployed();

//   Upgrading
//   const BoxV2 = await ethers.getContractFactory("BoxV2");
//   const upgraded = await upgrades.upgradeProxy(instance.address, BoxV2);
}

main();