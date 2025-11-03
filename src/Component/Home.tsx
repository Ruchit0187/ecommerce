import { useNavigate } from "react-router-dom";


function Home() {
  const nevigate = useNavigate();

  function handleButton() {
    nevigate("/shopping");
  }
  return (
    <>
    <div className="w-full h-full">
      <div className="absolute left-1/3 text-center top-1/2 translate-x-3.5 p-10 bg-white rounded-2xl">
        <h2 className="text-2xl">Welcome To shopping</h2>
        <button
          onClick={handleButton}
          className="cursor-pointer bg-black p-2.5 text-white rounded-2xl mt-2"
        >
          Go to Shopping
        </button>
      </div>
    </div>
    </>
  );
}

export default Home;
