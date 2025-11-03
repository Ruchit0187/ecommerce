import axios from "axios";
const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const ApiResponse = async (root: string) => {
  try {
    const response = await api.get(root);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const ApiIdResponse = async (id: string) => {
  try {
    const response = await api.get(`/products/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
