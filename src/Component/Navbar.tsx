import { NavLink } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { useSelector } from "react-redux";
function Navbar() {
  const storeData=useSelector((state:any)=>state);
  return (
    <div className="sticky top-0 w-full h-20 shadow-lg flex items-center z-10 bg-blue-300 ">
      <div className="flex justify-between px-3 py-2 w-full items-center text-xl">
        <div className="flex w-1/2 h-full ">
          <ul className="flex justify-around w-full">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shopping"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                shopping
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/form"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                form
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-3 mr-5">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "underline px-2.5" : "px-2.5"
            }
          >
            About US
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "underline px-2.5 flex" : "flex px-2.5"
            }
          >
            <GrCart />
            { storeData.totalQuantity > 0 && <p>{storeData.totalQuantity}</p>}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
