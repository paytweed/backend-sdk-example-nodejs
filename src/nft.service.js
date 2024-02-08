const ethers = require("ethers")
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
  getById(nftId) {
    console.log(ethers.parseEther("0.001").toString())

    return {
      nftId: nftId,
      //priceInCents: 100000,
      priceInCrypto: ethers.parseEther("0.01").toString(),
      tokenUri: "https://tweed-demo.web.app/tweedNft.png",
      fiatCurrencyId: "USD",
      contractAddress: collectionsData[this.blockchainId].contractAddress,
      chain: this.blockchainId,
      title: "Demo NFT",
      description: "This is a demo NFT",
        abi: collectionsData[this.blockchainId].abi, 
      customMintParams: {
        //toAddress: toWalletAddress,
        tokenUri: "http://google.com"
      },
    };
  }
}
module.exports = new NftService();
