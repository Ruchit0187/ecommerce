import type { QuantityApidata } from "../Types/Types";

import { NavLink } from "react-router-dom";
import Button from "./Button";

function Card(props: any) {
  const { data } = props;
  const DataProducts: QuantityApidata[] = data?.products;
  return (
    <div className="w-full flex px-3">
      <ul className=" grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-3.5 ">
        {DataProducts?.map((i) => (
          <div key={i.id} className="shadow-2xl rounded-2xl hover:shadow-2xl">
            <NavLink to={`/shopping/${i.id}`} className="w-full">
              <li className="p-3">
                <div className="w-full">
                  <img src={i.images[0]} alt={i.category} />
                </div>
                <div>
                  <p className="text-2xl">{i.title}</p>
                  <p className="text-xl">Price:{i.price}</p>
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

export default Card;
