const { ethers } = require("hardhat");

async function main() {
  const cabContract = await ethers.getContractFactory("Cab");
  const deployedCabContract = await cabContract.deploy();
  await deployedCabContract.deployed();
  console.log("Cab contract deployed to:", deployedCabContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
