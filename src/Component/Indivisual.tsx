import { useQuery } from "@tanstack/react-query";
import { Activity, Suspense, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiIdResponse } from "../Axios/Axios";
import type { ApidataType } from "../Types/Types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Reviews from "./Reviews";
import Button from "./Button";

function Indivisual() {
  const id = useParams().id;
  const nevigate = useNavigate();
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const apiIdData = useQuery({
    queryKey: ["indivisual", id],
    queryFn: () => apiIdResponse(String(id)),
  });
  const { data: indivisualData, isLoading } = apiIdData;
  if (isLoading) {
    return (
      <div className="w-screen flex justify-center items-center">
        <div className="w-12 h-12 mt-70 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    );
  }
  // const indivisualData: ApidataType = data;
  return (
    <div className="shadow-sm p-5 bg-blue-100 flex flex-row  max-[600px]:flex-col max-[600px]:gap-2  mx-3 rounded-3xl mt-2.5  justify-between gap-3.5 ">
      <div className="image w-1/3 h-fit max-[600px]:w-full max-[600px]:mx-full">
        {imageLoading && (
          <div className="mx-auto my-auto max-w-fit">
            <Skeleton height={486} width={486} />
          </div>
        )}
        <img
          style={{display:`${imageLoading?"none":"block"}`}}
          src={indivisualData?.images[0]}
          alt={indivisualData?.category}
          className="w-max h-auto object-contain"
          onLoad={() => setImageLoading(false)}
        />
      </div>
      <div className="design flex flex-col gap-2">
        <div className="font-semibold">
          <h2 className="text-xl">{indivisualData.title}</h2>
        </div>
        <div className="">{indivisualData.category}</div>
        <div className="font-medium text-2xl">
          Discount Price: $
          {(
            indivisualData.price -
            (indivisualData.discountPercentage * indivisualData.price) / 100
          ).toFixed(2)}
        </div>
        <div className="line-through text-red-400">
          Price: ${indivisualData.price}
        </div>
        <div>Brand: {indivisualData.brand}</div>

        <div className="text-violet-800">
          Warranty: {indivisualData.warrantyInformation.split(" ").slice(0, 2)}
        </div>
        <div>
          <p className="font-semibold">Reviews:</p>
          <Reviews values={indivisualData.reviews} />
        </div>
        <div className="flex justify-center">
          <Button value={indivisualData} />
        </div>
        <div>
          <button
            onClick={() => nevigate(-1)}
            className="bg-black p-2.5 text-white rounded-2xl block mx-auto cursor-pointer"
          >
            Get Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Indivisual;
