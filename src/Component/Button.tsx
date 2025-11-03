import type { QuantityApidata } from "../Types/Types";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, removeQuantity } from "../Redux/Reducer";

function Button(props: any) {
  const storeData: QuantityApidata[] = useSelector((state: any) => state.task);
  const dispatch = useDispatch();
  const propsvalue: QuantityApidata = props.value;
    const item = storeData.find((curr) => curr.id === propsvalue.id);

  if (item) {
    return (
      <div className=" flex justify-center gap-2">
        <button
          onClick={() => dispatch(addTocart(propsvalue))}
          className="bg-black text-white p-2 rounded-xl mb-2 cursor-pointer "
        >
          +
        </button>
        <div className="text-black p-2">
          {storeData.map((curr: QuantityApidata) =>
            curr.id === propsvalue.id ? curr.quantity : ""
          )}
        </div>
        <button
          onClick={() => dispatch(removeQuantity(item))}
          className="bg-black text-white p-2 rounded-2xl mb-2 cursor-pointer"
        >
          -
        </button>
      </div>
    );
  } else {
    return (
      <button
        onClick={() => dispatch(addTocart(propsvalue))}
        className="block bg-black text-white p-2.5 rounded m-auto mb-2 cursor-pointer"
      >
        Add
      </button>
    );
  }
}

export default Button;
