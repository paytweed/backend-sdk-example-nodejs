const cors = require("cors");
const express = require("express");
const { Environment, TweedBackendSDK } = require("@paytweed/backend-sdk");

const authenticatedUser = {
  email: "test@example.com",
  id: "1",
};

const start = async () => {
  const sdk = await TweedBackendSDK.setup({
    apiKey: "P4hYqDPZlxnIles1a2urCmGJfFroPd08",
    apiSecret: "Qe3YJUXpSItZbvSOY88HH6zT3DNIrEkXIjLS5q5YCTJbHFBw5VRfhioNR7tuK6Vc",
    environment: Environment.staging,
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
