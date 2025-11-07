import axios from "axios";
const api = axios.create({
  baseURL: "https://dummyjson.com/products",
});

export const apiResponse = async (
  skipvalue: number,
  search?: string,
  order?: string,
  sortField?: string,
) => {
  try {
    const response = await api.get(
      `/search?q=${search}&sortBy=${sortField}&limit=${10}&order=${order}&skip=${skipvalue}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
};
export const apiIdResponse = async (id: string) => {
  try {
    const response = await api.get(`${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
};

// https://dummyjson.com/products/search?q=powder&sortBy=price&order=desc&limit=10
