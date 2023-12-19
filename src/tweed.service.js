const { TweedBackendSDK, Environment } = require("@paytweed/backend-sdk");
const nftService = require("./nft.service");
const tokenService = require("./token.service");

class TweedService {
  async initialize() {
    this._client = await TweedBackendSDK.setup({
      apiKey: "rlSyUu57IElwqHXJjeSR1UXQRdpmFMRz",
      apiSecret:
        "gqyuZu2zzFcaITtU5i--l7rQwtGcbtXKJpbI9GwTJryct4SLqebSNbaZvoN0RBhB",
      defaultBlockchainIds: ["ethereumSepolia"],
      callbacks: {
        getNftPurchaseData: async ({ nftId }) => nftService.getById(nftId),
        getTokenPurchaseData: async ({ tokenId }) =>
          tokenService.getById(tokenId),
      },
    });
    return this._client;
  }
}

module.exports = new TweedService();
