const { TweedBackendSDK } = require('@paytweed/backend-sdk');
const nftService =  require('./nft.service');

class TweedService {
    async initialize() {
        this._client = await TweedBackendSDK.setup({
            apiKey: "N6yplF0qZs901C1R6yib1eYScECXJB9P",
            apiSecret: "mXYW-1bpLIS3EwL3GI1-BnGFcP2MjBL9CgbGyYW1WrlteKKBplhN25V-JcmYhgbj",
            defaultBlockchainIds: ["ethereumSepolia"],
            callbacks: {
                getNftPurchaseData: async ({ nftId }) => nftService.getById(nftId)
              },
        })
        return this._client
    }
}

module.exports =  new TweedService()