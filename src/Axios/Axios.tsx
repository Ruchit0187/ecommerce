import axios from "axios";
const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const ApiResponse = async (root: string,skipvalue:number) => {
  try {
    const response = await api.get(`${root}?limit=${10}&skip=${skipvalue}`);
    if (response.status === 200) {
      return response.data;
    }
    else{
      return []
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
    else{
      return []
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const ApiSearchProducts=async(value:string)=>{
  try {
    const response=await api.get(`/products/search?q=${value}&limit=${10}&skip`);
    if(response.status===200){
      return response.data
    }
    else{
      return[]
    }
  } catch (error) {
    console.log(error)
  }
}
