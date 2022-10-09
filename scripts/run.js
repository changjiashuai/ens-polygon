(async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const domainContractFactory = await hre.ethers.getContractFactory("Domains");
    const domainContract = await domainContractFactory.deploy("changjiashuai");
    await domainContract.deployed();
    console.log("Contract deployed to:", domainContract.address);
    console.log("Contract deployed by:", owner.address);

    let txn = await domainContract.register("mortal", {value: hre.ethers.utils.parseEther("0.1")});
    await txn.wait();

    const address = await domainContract.getAddress("mortal");
    console.log("Owner of domain mortal:", address);

    // txn = await domainContract.connect(randomPerson).setRecord("email", "changjiashuai@gmail.com");
    // await txn.wait();

    const balance = await hre.ethers.provider.getBalance(domainContract.address);
    console.log("Contract balance:", hre.ethers.utils.formatEther(balance));



















})().then(() => {
    process.exit(0);
}).catch((error) => {
    console.log(error);
    process.exit(1);
});
