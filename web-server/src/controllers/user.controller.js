import { userService } from "../config/rpcClient.config";

const userController = {
  signUpUser: (req, res) => {
    const credentials = req.body;

    userService.request("signUpUser", credentials, (err, response) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          meta: {
            type: "error",
            status: 500,
            message: "server error"
          }
        });
      }
      const userServiceResponse = response.result;
      res.status(userServiceResponse.meta.status).send(userServiceResponse);
    });
  },
  signInUser: (req, res) => {
    const credentials = req.body;

    userService.request("signInUser", credentials, (err, response) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          meta: {
            type: "error",
            status: 500,
            message: "server error"
          }
        });
      }
      const userServiceResponse = response.result;
      res.status(userServiceResponse.meta.status).send(userServiceResponse);
    });
  },
  tryAutoSignIn: (req, res) => {
    const { user } = req;
    userService.request("tryAutoSignIn", user, (err, response) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          meta: {
            type: "error",
            status: 500,
            message: "server error"
          }
        });
      }
      const userServiceResponse = response.result;
      res.status(userServiceResponse.meta.status).send(userServiceResponse);
    });
  }
};

export default userController;
