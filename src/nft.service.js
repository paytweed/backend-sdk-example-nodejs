const collectionsData = require("./constants/collections")

class NftService {
  constructor(blockchainId = "bnbTestnet") {
    this.blockchainId = blockchainId;
  }

  _getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  _getNftPrice() {
    return Math.trunc(this._getRandomArbitrary(100, 9999));
  }

  _setBlockchainId(blockchainId) {
    this.blockchainId = blockchainId;
  }

  getTokenById(id) {
    console.log("Getting token by ID");
    return {
      tokenId: "1",
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

getNFTById(id) {
  console.log("Getting NFT by ID");
  return {
    nftId: id,
    priceInCents: this._getNftPrice(),
    tokenUri: "https://tweed-demo.web.app/tweedNft.png",
    fiatCurrencyId: "USD",
    contractAddress: collectionsData[this.blockchainId].contractAddress,
    chain: this.blockchainId,
    title: "NFT_TITLE",
    description: "NFT_DESCRIPTION",
    abi: collectionsData[this.blockchainId].abi,
    customMintParams: {
      tokenId: id,
    },
  };
}
}

module.exports = new NftService();
