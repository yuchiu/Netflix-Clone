import jayson from "jayson";

import models from "./models";
import RPCInterfaces from "./RPCInterfaces";
import { SERVICE_USER_PORT, NODE_ENV } from "./config/secrets";

// create a server
const server = jayson.server(RPCInterfaces);

models.sequelize.sync().then(() => {
  server
    .http()
    .listen(SERVICE_USER_PORT, () =>
      console.log(
        `  User Service listenning on port ${SERVICE_USER_PORT} in "${NODE_ENV}" mode`
      )
    );
});
