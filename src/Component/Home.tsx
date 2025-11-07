import { useNavigate } from "react-router-dom";

function Home() {
  const nevigate = useNavigate();
  return (
    <div className="w-full h-full">
      <div className=" absolute h-full bottom-0 w-full overflow-hidden ">
        <img
          src="src\Images\pexels-vladalex94-1486222.jpg"
          className=" h-auto object-cover"
        />
      </div>
      <div className="relative inline-block  left-1/3  text-center translate-x-1/2 translate-y-full p-10 bg-white rounded-2xl mt-20">
        <h2 className="text-2xl">Welcome To Shopping Website</h2>
        <button
          onClick={() => nevigate("/shopping")}
          className="cursor-pointer bg-black p-2.5 text-white rounded-2xl mt-2"
        >
          Go to Shopping
        </button>
      </div>
    </div>
  );
}

export default Home;
