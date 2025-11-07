import { useSelector } from "react-redux";
import type { QuantityApidata } from "../Types/Types";
import type { RootState } from "../Redux/Store";

function Billing() {
  const dataItem: QuantityApidata[] = useSelector(
    (state: RootState) => state.task
  );
  const totalAmount = dataItem.reduce(
    (prev, next) =>
      prev +
      next.quantity *
        (next.price - (next.discountPercentage * next.price) / 100),
    0
  );
  const totalProductPrice = Number(totalAmount.toFixed(2));
  const totalTex = dataItem.reduce(
    (prev, next) => next.price * 0.18 * next.quantity + prev,
    0
  );
  const shippingCost = dataItem.length * 50;
  let totalPayableAmount = 0;
  if (totalProductPrice + totalTex > 100) {
    totalPayableAmount = totalProductPrice + totalTex;
  } else {
    totalPayableAmount = totalProductPrice + totalTex + shippingCost;
  }
  return (
    <div className="flex max-sm-flex-col: w-12/14  bg-amber-200 rounded-2xl mr-2.5 px-5 justify-between gap-2 mt-2 py-2">
      <div className="">
        <h1 className="font-semibold">Products</h1>
        <ul className="flex flex-col gap-2">
          {dataItem.map((curr) => (
            <li className="" key={curr.id}>
              {curr.title}-{curr.quantity}
            </li>
          ))}
          <p className="border-t-2 mt-2 pt-2">Tex:</p>
          <p
            className={`${
              totalProductPrice + totalTex >= 100 ? "line-through" : ""
            }`}
          >
            Shipping Cost
          </p>
          <p className="text-2xl font-bold">Total Price:</p>
        </ul>
      </div>
      <div className="">
        <h1 className="font-semibold">Price</h1>
        <ul className="flex flex-col gap-2">
          {dataItem.map((curr) => (
            <li key={curr.id}>
              {(
                (curr.price - (curr.discountPercentage * curr.price) / 100) *
                curr.quantity
              ).toFixed(2)}
            </li>
          ))}
          <p className="mt-2 pt-2">{totalTex.toFixed(2)}</p>
          <p
            className={`${
              totalProductPrice + totalTex >= 100 ? "line-through" : ""
            }`}
          >
            {shippingCost}
          </p>
          <p className="text-2xl font-bold">${totalPayableAmount.toFixed(2)}</p>
        </ul>
      </div>
    </div>
  );
}

export default Billing;
