import axios from "axios";
import * as endpoints from "../endpoints";
import request from "../request";

export const getAccessToken = async (email, password) => {
  const base64Credentials = Buffer.from(`${email}:${password}`).toString(
    "base64"
  );

  try {
    const response = await request.post(
      `${endpoints.users}/access-token`,
      null,
      {
        withCredentials: true,
        headers: {
          Authorization: `Basic ${base64Credentials}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const createUser = async (user) => {
  try {
    const response = await request.post(`${endpoints.users}`, user);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const refreshAccessToken = async () => {
  try {
    const response = await axios.post(
      `${endpoints.users}/refresh-access-token`,
      null,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const revokeRefreshToken = async () => {
  try {
    await request.post(`${endpoints.users}/revoke-refresh-token`, null, {
      withCredentials: true,
    });
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
