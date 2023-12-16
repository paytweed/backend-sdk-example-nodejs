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

  /**
   * an example to an NFT checkout with the following mint function:
   * safemint(toAddress address, tokenId uint256) payable public
   * The abi should be taken from the compiled NFT contract
   * The params should be populated in the customMintParams object
   * There are two parameters that are getting populated from the frontend: toAddress and tokenURI
   **/
  getTokenById(id) {
    console.log("Getting token by ID");
    return {
      tokenId: "1",
      priceInCrypto: 40000000000000,
      thumbnailPath: "https://tweed-demo.web.app/tweedNft.png",
      fiatCurrencyId: "USD",
      contractAddress: "0x9C574b99f2C13acEf98F3af329767eE16F18eC4F",
      chain: "bnbTestnet",
      title: "NFT_TITLE",
      description: "NFT_DESCRIPTION",
      abi: "TweedBuyTokensFor(toAddress address, amount uint256",
      customMintParams: {
        toAddress: "0x0b0691967454Dfe32662100614585AaB7d17AC32",
        amount: 1
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
