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
      priceInCrypto: 1000000000000000,
      thumbnailPath: "https://png.pngtree.com/png-clipart/20230329/ourmid/pngtree-money-bag-cartoon-coins-png-image_6671982.png",
      fiatCurrencyId: "USD",
      contractAddress: collectionsData[this.blockchainId].tokenAddress,
      chain: this.blockchainId,
      title: "TOKEN_TITLE",
      description: "TOKEN_DESCRIPTION",
      abi: collectionsData[this.blockchainId].tokenAbi,
      customMintParams: {
        toAddress: "0x0b0691967454Dfe32662100614585AaB7d17AC32",
        amount: "1"
      },
    };
  }
}

module.exports = new TokenService();
