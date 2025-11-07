import type { QuantityApidata } from "../Types/Types";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import Skeleton from "react-loading-skeleton";
import EmptySearchData from "./EmptySearchData";
import {  useState } from "react";
function Card(props: any) {
  const { data, isLoading } = props;
  const [loaded, setLoaded] = useState(false);
  const dataProducts: QuantityApidata[] = data?.products;
  if (isLoading) {
    return (
      <div className="w-screen flex justify-center items-center">
        <div className="w-12 h-12 mt-70 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div className="w-full mt-2.5 px-3">
      {dataProducts.length === 0 ? (
        <div>
          <EmptySearchData />
        </div>
      ) : (
        <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-3.5 ">
          {dataProducts?.map((i) => (
            <div
              key={i.id}
              className="shadow-2xl flex flex-col rounded-2xl hover:shadow-2xl"
            >
              <NavLink to={`/shopping/${i.id}`} className="w-full">
                <li className="p-3">
                  <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white  md:max-w-2xl">
                    <div className="flex flex-col">
                      <div className="md:shrink-0 mx-auto">
                        {!loaded && <Skeleton height={200} width={200} />}
                        <img
                          className="h-48 w-full object-cover md:h-full md:w-48"
                          src={i.images[0]}
                          alt={i.category}
                          onLoad={() => setLoaded(true)}
                        />
                      </div>
                      <div className="p-8">
                        <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                          {i.title}
                        </div>
                        <div className="mt-1.5">{i.description}</div>
                        <p className="text-xl font-semibold mt-2">
                          {" "}
                          Discount Price: $
                          {(
                            i.price -
                            (i.discountPercentage * i.price) / 100
                          ).toFixed(2)}
                        </p>
                        <p className="mt-2  line-through text-red-400">
                          Price: ${i.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </NavLink>
              <div className="align-bottom mt-auto">
                <Button value={i} />
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Card;
