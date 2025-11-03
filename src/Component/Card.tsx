import type { ApidataType, QuantityApidata } from "../Types/Types";
import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../Redux/Reducer";

function Card(props: any) {
  const { data, isLoading } = props;
  const dispatch = useDispatch();
  const storeData = useSelector((state: any) => state.task);
  const DataProducts: QuantityApidata[] = data?.products;
  if (isLoading) {
    return <div>Loading</div>;
  }``
  return (
    <div className="w-full flex px-3">
      <ul className=" grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-3.5 ">
        {DataProducts?.map((i) => (
          <div key={i.id} className="shadow-2xl rounded-2xl ">
            <NavLink to={`/shopping/${i.id}`} className="w-full">
              <li className="p-3">
                <div className="w- full">
                  {/* <img src={i.images[0]} alt={i.category} /> */}
                </div>
                <div>
                  <p className="text-2xl">{i.title}</p>
                  <p className="text-xl">Price:{i.price}</p>
                </div>
              </li>
            </NavLink>
            {storeData.find((curr: ApidataType) => curr.id === i.id) ? (
              <div className="flex justify-center align-bottom gap-2">
                <button
                  onClick={() => dispatch(addTocart(i))}
                  className="bg-black text-white p-2 rounded-xl"
                >
                  +
                </button>
                <div className="text-black p-2">
                  {storeData.map((curr: QuantityApidata) =>
                    curr.id === i.id ? curr.quantity :""
                  )}
                </div>
                <button className="bg-black text-white p-2 rounded-2xl">
                  -
                </button>
              </div>
            ) : (
              <button
                onClick={() => dispatch(addTocart(i))}
                className="block bg-black text-white p-2.5 rounded m-auto mb-2"
              >
                Add
              </button>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(Card);
