const cors = require("cors");
const express = require("express");
const { Environment, TweedBackendSDK } = require("@paytweed/backend-sdk");

const authenticatedUser = {
  email: "test@example.com",
  id: "1",
};

const start = async () => {
  const sdk = await TweedBackendSDK.setup({
    apiKey: "YOUR_API_KEY",
    apiSecret: "YOUR_API_SECRET",
    environment: Environment.production
  });

  const app = express();
  app.use(cors());
  app.use(express.json());

  app.post("/message", async (req, res) => {
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
