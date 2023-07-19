const cors = require('cors');
const express = require('express');
const  tweedService = require("./tweed.service")
const authService = require("./auth.service")

const DEFAULT_PORT = 3010


const main = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  const tweedClient = await tweedService.initialize()

  app.get('/user', async (req, res) => {
    const authUser = authService.getAuthUser()
    res.send(authUser);
  });

  app.post("/user", async (req, res) => {
    const id = req.body.id
    const email = req.body.email
    const updatedUser = authService.updateUser({id, email})
    res.send(updatedUser)
  })

  app.post('/message', async (req, res) => {
    const authenticatedUser = authService.getAuthUser()
    const answer = await tweedClient.handleMessageFromFrontend(
      req.body.message,
      authenticatedUser.id,
      authenticatedUser.email
    );
    res.send({ answer });
  });

  app.listen(DEFAULT_PORT, () => console.log(`App is listening on port ${DEFAULT_PORT}`));
};

main();
