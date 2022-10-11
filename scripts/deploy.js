// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy("changjiashuai");
    await domainContract.deployed();

    console.log("Contract deployed to:", domainContract.address);

    // CHANGE THIS DOMAIN TO SOMETHING ELSE! I don't want to see OpenSea full of bananas lol
    // let txn = await domainContract.register("banana", {value: hre.ethers.utils.parseEther('0.1')});
    // await txn.wait();
    // console.log("Minted domain banana.changjiashuai");
    //
    // txn = await domainContract.setRecord("banana", "Am I a banana or a changjiashuai??");
    // await txn.wait();
    // console.log("Set record for banana.changjiashuai");
    //
    // const address = await domainContract.getAddress("banana");
    // console.log("Owner of domain banana:", address);

    const balance = await hre.ethers.provider.getBalance(domainContract.address);
    console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
