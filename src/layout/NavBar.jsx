import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterType } from "../redux/slices";
import { Link } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.type);

  const selectType = (type) => {
    dispatch({ type: type });
  };
  

  return (
    <div className="naaaaaaaaaaaaaa flex  bg-costum-clr_acc_blue w-[100%] p-1">
      <nav>
        <ul className="flex gap-3">
          <li>
            <button
              className="outline-none border-none bg-transparent  justify-self-end mx-2"
              onClick={() => selectType("mobile")}
            >
              <i className="fa-solid fa-bars fa-lg"></i>
            </button>
          </li>
          <li>
            <Link
              href="#"
              onClick={() => selectType("pets")}
              className="font-bold text-xs xl:text-sm"
            >
              Pets
            </Link>
          </li>
          <li>
            <Link href="#todays-offer" className="font-bold text-xs xl:text-sm">
              Today's offer
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
