const cors = require('cors');
const express = require('express');
const { Environment, TweedBackendSDK } = require('@paytweed/backend-sdk');

const authenticatedUser = {
  email: 'test@example.com',
  id: '22',
};

const start = async () => {
  const sdk = await TweedBackendSDK.setup({
    apiKey: 'YOUR_API_KEY',
    apiSecret: 'YOUR_API_SECRET',
    defaultBlockchainIds: ['tezosGhost', 'polygonMumbai', 'ethereumGoerli'],
    callbacks: {
      getNftPurchaseData: async ({ nftId }) => ({
        nftId,
        priceInCents: 100,
        fiatCurrencyId: 'USD',
        tokenUri: 'NFT_TOKEN_URI',
        contractAddress: 'CONTRACT_ADDRESS',
        chain: 'polygonMumbai',
        title: 'NFT_TITLE',
        description: 'NFT_DESCRIPTION',
        abi: 'mint(address,string)',
      }),
    },
  });

  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get('/user', async (res) => {
    res.send(authenticatedUser);
  });

  app.post('/message', async (req, res) => {
    const answer = await sdk.handleMessageFromFrontend(
      req.body.message,
      authenticatedUser.id,
      authenticatedUser.email
    );
    res.send({ answer });
  });

  const port = 3010;
  app.listen(port, () => console.log(`App is listening on port ${port}`));
};

start();
