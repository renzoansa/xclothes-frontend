import axios from "axios";
import * as endpoints from "../endpoints";

export const getById = async (id) => {
  try {
    const response = await axios.get(`${endpoints.clothes}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
