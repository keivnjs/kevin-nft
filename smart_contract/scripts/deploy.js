const main = async () => {
  const KevinNFT = await hre.ethers.getContractFactory('KevinNFT');
  const kevinNFT = await KevinNFT.deploy();

  await kevinNFT.deployed();

  console.log('KevinNFT deployed to:', kevinNFT.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
