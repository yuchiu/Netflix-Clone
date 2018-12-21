import axios from "axios";
import localStore from "@/utils/localStore";

const apiV1 = () =>
  axios.create({
    baseURL: `http://localhost:3030/api/v1`,
    headers: {
      Authorization: `Bearer ${localStore.getToken()}`
    }
  });

export { apiV1 };
