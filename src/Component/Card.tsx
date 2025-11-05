import type { QuantityApidata } from "../Types/Types";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import Skeleton from "react-loading-skeleton";

function Card(props: any) {
  const { data, isLoading } = props;
  const DataProducts: QuantityApidata[] = data?.products;
  if (isLoading) {
    return <Skeleton count={5} className="bg-amber-400 w-1/3 h-1/5" />;
  } else if (DataProducts.length === 0) {
    return <div>123</div>;
  } else {
    return (
      <div className="w-full mt-2.5  px-3">
        <ul className=" grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-3.5 ">
          {DataProducts?.map((i) => (
            <div key={i.id} className="shadow-2xl rounded-2xl hover:shadow-2xl">
              <NavLink to={`/shopping/${i.id}`} className="w-full">
                <li className="p-3">
                  <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white  md:max-w-2xl">
                    <div className="md:flex">
                      <div className="md:shrink-0">
                        <img
                          className="h-48 w-full object-contain md:h-full md:w-48"
                          src={i.images[0]}
                          alt={i.category}
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
              <Button value={i} />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Card;
