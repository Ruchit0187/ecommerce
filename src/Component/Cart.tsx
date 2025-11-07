import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import type { QuantityApidata } from "../Types/Types";
import Button from "./Button";
import Billing from "./Billing";
import Confomation from "./Confomation";

function Cart() {
  const dataItem: QuantityApidata[] = useSelector((state: any) => state.task);
  if (dataItem.length === 0) {
    return <EmptyCart />;
  } else {
    return (
      <div className="w-full flex p-4 ">
        <div className="w-2/4 flex flex-col max-[500px]:w-full max-[500px]:mx-full">
          <ul className=" flex flex-col gap-2">
            {dataItem.map((curr, index) => (
              <li key={index} className="w-full felx gap-2">
                <div className="w-full mx-auto rounded-xl bg-white shadow-md md:max-w-2xl">
                  <div className="md:flex">
                    <div className="md:shrink-0">
                      <img
                        className="h-48 w-full object-contain md:h-full md:w-48"
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
                        ).toFixed(2)}
                      </p>
                      <p className="text-black">
                        Total Price:
                        {(
                          (curr.price -
                            (curr.discountPercentage * curr.price) / 100) *
                          curr.quantity
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className=" flex justify-center gap-2">
                    <Button value={curr} />
                    <Confomation id={curr.id} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/4 fixed right-0 max-[500px]:w-full">
          <Billing />
        </div>
      </div>
    );
  }
}

export default Cart;
