import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import type { QuantityApidata } from "../Types/Types";
import Button from "./Button";
import { removeToCart } from "../Redux/Reducer";
import Billing from "./Billing";

function Cart() {
  const dataItem: QuantityApidata[] = useSelector((state: any) => state.task);
  const dispatch = useDispatch();
  if (dataItem.length === 0) {
    return <EmptyCart />;
  } else {
    return (
      <div className="w-full flex p-4">
        <div className="w-2/4 flex flex-col">
          <ul className=" flex flex-col gap-2">
            {dataItem.map((curr, index) => (
              <li key={index} className="w-full felx gap-2">
                <div className="w-full mx-auto rounded-xl bg-white shadow-md md:max-w-2xl">
                  <div className="md:flex">
                    <div className="md:shrink-0">
                      <img
                        className="h-48 w-full object-cover md:h-full md:w-48"
                        src={curr.images[0]}
                      />
                    </div>
                    <div className="p-8">
                      <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                        {curr.title}
                      </div>
                      <p className="mt-2 text-gray-500">{curr.description}</p>
                      <p className="mt-2 text-gray-500 font-semibold">
                        Discount Price:{" "}
                        {(
                          curr.price -
                          (curr.discountPercentage * curr.price) / 100
                        ).toFixed()}
                        <p>
                          Total Price:
                          {(
                            (curr.price -
                              (curr.discountPercentage * curr.price) / 100) *
                            curr.quantity
                          ).toFixed()}
                        </p>
                      </p>
                    </div>
                  </div>
                  <div className=" flex justify-center gap-2">
                    <Button value={curr} />
                    <button
                      onClick={() => dispatch(removeToCart(curr.id))}
                      className=" bg-black text-white px-2 rounded mb-2.5"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/4 fixed right-0"><Billing/></div>
      </div>
    );
  }
}

export default Cart;
