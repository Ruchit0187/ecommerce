import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import { ApiIdResponse } from "../Axios/Axios";
import type { ApidataType } from "../Types/Types";

function Indivisual() {
  const id=useParams().id;
  const apiIdData=useQuery({
    queryKey:[''],
    queryFn:()=>ApiIdResponse(String(id)),
  })
  const  {data}=apiIdData;
  const indivisualData:ApidataType=data;
  return (
    <div>
      {indivisualData?.title}
    </div>
  )
}

export default Indivisual