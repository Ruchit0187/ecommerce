import React from "react";
import { useSelector } from "react-redux";
import type { QuantityApidata } from "../Types/Types";

function Billing() {
  const dataItem:QuantityApidata[] = useSelector((state: any) => state.task);

  return (
    <div className="flex  w-12/14 bg-amber-200 rounded-2xl mr-2.5 px-5 justify-between gap-1">
      <div className="">
        <h1 className="font-semibold">Products</h1>
        <ul>
            <li>
                {
                    dataItem.map((curr)=><li>{curr.title}*{curr.quantity}</li>)
                }
            </li>
        </ul>
      </div>
      <div className="">
        <h1 className="font-semibold">Price</h1>
      </div>
    </div>
  );
}

export default Billing;
