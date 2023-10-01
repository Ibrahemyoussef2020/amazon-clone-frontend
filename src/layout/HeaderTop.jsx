import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/layOut/Search";
const HeaderTop = () => {
  return (
    <>
      <div className="pc hidden sm:flex  justify-between  sm:px-0  w-[100%] bg-costum-clr_primary px-1 ">
        <Link
          to="/"
          className="flex mr-2 max-h-[45px]  !flex-nowrap  lg:max-h-[50px] max-w-[120px] lg:max-w-[150px] my-1 py-2 justify-center rounded-sm	 hover:outline outline-1 outline-white text-white "
        >
          <img
            src="/images/amazon.png"
            alt="amazon"
            className="h-[100%] w-[100%] "
          />
          <span className="text-sm relative -bottom-1 font-bold">.eg</span>
        </Link>

        <div className=" hidden lg:grid flex-1 grid-cols-4 gap-x-5 min-w-[80px] max-w-[80px]  max-h-[60px] py-1 my-1 px-1  rounded-sm	 hover:outline outline-1 outline-white cursor-not-allowed">
          <span className="col-start-2 col-end-5 text-xs text-[#ccc]">
            Dliver to
          </span>
          <i className="fa-solid fa-location-dot col-start-1 col-end-2 fa-xl"></i>
          <span className="col-start-2 col-end-5 text-sm font-black	">
            Egypt
          </span>
        </div>
        {/**************************************** */}
        <Search />
        {/**************************************** */}
        <div className="country hidden lg:flex items-baseline my-1 py-3 lg:mr-1 gap-[1px] hover:outline outline-1 rounded-sm outline-white cursor-not-allowed">
          <img src="/images/usa.png" alt="USA" className="max-h-[15px]" />
          <span className="font-black text-sm">EN</span>
          <button className="outline-none border-none bg-transparent" disabled>
            <i className="fa-solid fa-caret-down"></i>
          </button>
        </div>

        <div className="login  flex sm:hidden md:block py-1 my-1 px-1  hover:outline outline-1 rounded-sm outline-white ">
          <div className="flex gap-2 items-center sm:block lg:flex text-xs cursor-pointer">
            <i className="fa-regular fa-user fa-2xl sm:hidden"></i>
            <span className="block">Hello , </span>
            <Link to="/login"> Login </Link>
          </div>

          <div className="font-black text-xs lg:text-sm  hidden lg:block">
            <span>Account & Lists</span>
            <button
              className="outline-none border-none bg-transparent mx-2 cursor-not-allowed"
              disabled
            >
              <i className="fa-solid fa-caret-down"></i>
            </button>
          </div>
        </div>

        <Link
          to="/orders"
          className=" hidden md:flex py-2 my-1 px-1 lg:px-2 text-sm lg:text-md font-black  flex-col gap-1  justify-end hover:outline outline-1 rounded-sm outline-white"
        >
          <i className="fa-solid fa-truck-pickup block fa-lg "></i>
          <span className="block">Orders</span>
        </Link>

        <Link
          to="/cart"
          className=" py-3 my-1 px-2 text-sm flex items-baseline hover:outline outline-1 rounded-sm outline-white"
        >
          <i className="fa-solid fa-cart-flatbed text-white fa-2xl block mt-3 relative">
            <span className="absolute -top-4 left-2 w-[30px] h-[20px]  bg-costum-clr_primary text-sm text-orange-300 font-black flex justify-center items-center">
              0
            </span>
          </i>
          <span className="text-md font-black mx-1">Cart</span>
        </Link>

        <button className="outline-none border-none bg-transparent mx-1 inline-block lg:hidden justify-self-end">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/*******************mobile******************** */}

      <div className="mobile w-[100%] flex justify-between items-center sm:hidden bg-costum-clr_primary px-1 lg:px-2">
        <div className="flex">
          <button className="outline-none mr-5 hover:text-green-500 border-none bg-transparent  inline-block -mt-2 lg:hidden justify-self-end">
            <i className="fa-solid fa-bars fa-xl"></i>
          </button>
          <Link
            to="/"
            className="flex mx-1 max-h-[50px] w-[100px] !flex-nowrap  my-1 py-2 justify-center  text-white "
          >
            <img
              src="/images/amazon.png"
              alt="amazon"
              className="h-[100%] w-[100%] "
            />
            <span className="text-sm relative -bottom-1 font-bold"> .eg</span>
          </Link>
        </div>

        <div className="flex gap-x-1 text-white ">
          <div className="login  flex sm:hidden md:block py-1 my-1 px-1 hover:text-green-500">
            <div className="flex gap-2 items-center sm:block lg:flex text-xs cursor-pointer">
              <i className="fa-regular fa-user fa-xl sm:hidden"></i>
              <Link to="/login"> Login </Link>
            </div>

            <div className="font-black text-xs lg:text-sm  hidden lg:block">
              <span>Account & Lists</span>
              <button
                className="outline-none border-none bg-transparent mx-2 cursor-not-allowed"
                disabled
              >
                <i className="fa-solid fa-caret-down"></i>
              </button>
            </div>
          </div>
          <Link
            to="/cart"
            className=" py-0 my-1 px-2 text-sm flex items-baseline  text-white hover:text-green-500"
          >
            <i className="fa-solid fa-cart-flatbed text-white fa-2xl block mt-3 relative  text-inherit">
              <span className="absolute -top-4 left-2 w-[30px] h-[20px]  bg-costum-clr_primary text-sm text-orange-300 font-black flex justify-center items-center">
                0
              </span>
            </i>
            <span className="text-md font-black mx-1 text-inherit ">Cart</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
