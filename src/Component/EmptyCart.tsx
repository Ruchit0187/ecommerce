
import { useNavigate } from "react-router-dom";

function EmptyCart() {
  const nevigate = useNavigate();
  return (
    <div className=" w-full mt-10 ">
      <div className=" sm:w-full md:w-2/3 lg:w-1/3 mx-auto shadow-2xl p-2.5 rounded-2xl">
        <div>
          <img src="src\Images\EmptyCart.webp" alt="" />
        </div>
        <div className=" font-semibold text-2xl my-1.5 text-center">Your Cart is Empty</div>
        <button
          className="bg-blue-400 text-black block mx-auto p-2.5 rounded cursor-pointer"
          onClick={() => nevigate("/shopping")}
        >
          Go to Sopping
        </button>
      </div>
    </div>
  );
}

export default EmptyCart;
