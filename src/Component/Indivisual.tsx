import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { ApiIdResponse } from "../Axios/Axios";
import type { ApidataType } from "../Types/Types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Reviews from "./Reviews";
import Button from "./Button";

function Indivisual() {
  const id = useParams().id;
  const nevigate = useNavigate();
  const apiIdData = useQuery({
    queryKey: ["indivisual", id],
    queryFn: () => ApiIdResponse(String(id)),
  });
  const { data, isLoading } = apiIdData;
  const indivisualData: ApidataType = data;
  if (isLoading) {
    console.log(isLoading);
    return (
      <div className=" shadow-sm p-5 bg-blue-100 flex flex-row mx-3 rounded-3xl mt-2.5  justify-between gap-3.5 ">
        <div className="w-1/3">
          <Skeleton className="bg-amber-50 w-1/3 h-full " count={1} />
        </div>
        <div className="w-2/3">
          <Skeleton
            className="w-2/3 gap-2 flex bg-amber-50"
            count={5}
            height={15}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className=" shadow-sm p-5 bg-blue-100 flex flex-row  mx-3 rounded-3xl mt-2.5  justify-between gap-3.5 ">
        <div className="image w-1/3 h-fit">
          <img
            src={indivisualData.images[0]}
            alt={indivisualData.category}
            className="w-max h-auto object-contain"
          />
        </div>
        <div className="design flex flex-col gap-2">
          <div className="font-semibold">
            <h2 className="text-xl">{indivisualData.title}</h2>
          </div>
          <div className="">{indivisualData.category}</div>
          <div className="font-medium text-2xl">
            Discount Price:
            {(
              indivisualData.price -
              (indivisualData.discountPercentage * indivisualData.price) / 100
            ).toFixed()}
          </div>
          <div className="line-through text-red-400">
            Price:{indivisualData.price}
          </div>
          <div>Brand: {indivisualData.brand}</div>

          <div className="text-violet-800">
            Warranty:{" "}
            {indivisualData.warrantyInformation.split(" ").slice(0, 2)}
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
}

export default Indivisual;
