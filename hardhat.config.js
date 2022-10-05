require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: "https://ethereum-goerli-rpc.allthatnode.com/",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 5
    }
  }
};
