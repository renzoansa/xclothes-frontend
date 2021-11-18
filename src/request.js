import axios from "axios";
import moment from "moment";
import { refreshAccessToken } from "./store/shared/userSlice";

const request = axios.create();

let store;

const isExpired = (accessToken) => {
  return (
    moment().diff(accessToken.obtainingDate, "seconds") >=
    accessToken.secondsToExpire
  );
};

request.interceptors.request.use(
  async function (config) {
    const accessToken = store.getState().user?.accessToken;

    if (!accessToken?.token) return config;

    config.headers["Authorization"] = `Bearer ${
      store.getState().user.accessToken.token
    }`;

    if (!isExpired(accessToken)) return config;

    await store.dispatch(refreshAccessToken());

    config.headers["Authorization"] = `Bearer ${
      store.getState().user.accessToken.token
    }`;

    return config;
  },
  function (error) {
    Promise.reject(error);
  }
);

export const injectStore = (theStore) => {
  store = theStore;
};

export default request;
