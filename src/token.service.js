const ethers = require("ethers")
const collectionsData = require("./constants/collections")

class TokenService {
  constructor(blockchainId = "ethereumSepolia") {
    this.blockchainId = blockchainId;
  }
  
  _setBlockchainId(blockchainId) {
    this.blockchainId = blockchainId;
  }

  getById(id) {
    console.log(this.blockchainId)
    return {
      tokenId: id,
      priceInCrypto: ethers.parseEther("0.01").toString(),
      thumbnailPath: "https://png.pngtree.com/png-clipart/20230329/ourmid/pngtree-money-bag-cartoon-coins-png-image_6671982.png",
      fiatCurrencyId: "USD",
      contractAddress: collectionsData[this.blockchainId].tokenAddress,
      chain: this.blockchainId,
      title: "Demo Token",
      description: "This is a demo token",
      abi: collectionsData[this.blockchainId].tokenAbi,
      customMintParams: {
        toAddress: "<WALLET_ADDRESS>",
        amount: "1"
      },
    };
  }
}

module.exports = new TokenService();
