import axios from "axios";
import localStore from "@/utils/localStore";

const apiV1 = () => {
  // authenticate user if jwt token is in localstore
  if (localStore.getToken()) {
    return axios.create({
      baseURL: `http://localhost:3030/api/v1`,
      headers: {
        Authorization: `Bearer ${localStore.getToken()}`
      }
    });
  }

  return axios.create({
    baseURL: `http://localhost:3030/api/v1`
  });
};

export { apiV1 };
