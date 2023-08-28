const { TweedBackendSDK } = require('@paytweed/backend-sdk');
const nftService =  require('./nft.service');

class TweedService {
    async initialize() {
        this._client = await TweedBackendSDK.setup({
          apiKey: "YOUR-API-KEY",
          apiSecret: "YOUR-API-SECRET",
          defaultBlockchainIds: ["ethereumSepolia"],
          callbacks: {
            getNftPurchaseData: async ({ nftId }) => nftService.getById(nftId),
          },
        });
        return this._client
    }
}

module.exports =  new TweedService()