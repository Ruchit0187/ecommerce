import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import { ApiResponse } from "../Axios/Axios";
function Shopping() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => ApiResponse("/products"),
    gcTime: 300000,
  });
  return <Card data={data} isLoading={isLoading} isError={isError} />;
}

export default Shopping;
