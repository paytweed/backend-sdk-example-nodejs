const collectionsData = require("./constants/collections")

class NftService {
  constructor(blockchainId = "ethereumSepolia") {
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
  getById(id) {
    return {
      nftId: id,
      priceInCents: 0,
      //priceInCrypto: 0,
      tokenUri: "https://tweed-demo.web.app/tweedNft.png",
      fiatCurrencyId: "USD",
      contractAddress: collectionsData[this.blockchainId].contractAddress,
      chain: this.blockchainId,
      title: "Demo NFT",
      description: "This is a demo NFT",
        abi: collectionsData[this.blockchainId].abi, 
      customMintParams: {
        toAddress: "<WALLET_ADDRESS>",
        tokenUri: "http://google.com"
      },
    };
  }
}
module.exports = new NftService();
