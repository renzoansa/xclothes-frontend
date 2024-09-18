import axios from "axios";
import * as endpoints from "../endpoints";

export const fetchClothesByCategory = async (categoryId) => {
  try {
    const response = await axios.get(
      `${endpoints.clothingCategories}/${categoryId}/clothes`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const fetchClothesCategories = async () => {
  try {
    const response = await axios.get(
      endpoints.clothingCategories
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
