import { Link, useNavigate } from "react-router-dom";
import {toggleAside ,logOut, logUp} from "../redux/slices"
import Search from "../components/layOut/Search";
import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";

const HeaderTop = () => {
  const {productCount} = useSelector(state => state.cart)
  const {isOppend} = useSelector(state => state.aside)

  const dispatch = useDispatch()
  const {isLogged} = useSelector(state => state.log)
  const navigate = useNavigate()

  useEffect(()=>{

  },[isLogged])


  const handleLogOut = ()=>{
      dispatch(logOut())
  }

  const handleLogUp = ()=>{
    navigate('/login')
  }


  return (
    <>
      <div className="pc sm:pb-2 hidden sm:flex  justify-between  sm:px-0 sm:pt-1 lg:px-2  w-[100%] bg-costum-clr_acc_blue sm:bg-costum-clr_primary px-1 ">
        <Link
          to="/"
          className="flex mr-2 max-h-[45px]  !flex-nowrap  lg:max-h-[50px] max-w-[120px] lg:max-w-[130px] my-1 py-2 justify-center rounded-sm	 hover:outline outline-1 outline-white text-white "
        >
          <img
            src="/images/amazon.png"
            alt="amazon"
            className="h-[100%] max-w-[100%] "
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

          <button
          id="main-menu-dropbown" 
            className="outline-none border-none bg-transparent" disabled>
            <i className="fa-solid fa-caret-down"></i>
          </button>
        </div>

        <div className="login  flex sm:hidden md:block py-1 my-1 px-1  hover:outline outline-1 rounded-sm outline-white ">
          <div className="flex gap-2  items-center sm:block lg:flex text-xs cursor-pointer">
            <i className="fa-regular fa-user fa-2xl sm:hidden"></i>
            <span className="block">Hello , </span>
            <Link to="/login"> {isLogged ? 'Ibrahim' : 'Login'} </Link>
          </div>

          <div className="font-black text-xs lg:text-sm  hidden lg:block">
          {isLogged ? 
            <>
            
              <button
              id="Account-&-Lists-pc"
                className="outline-none !text-white border-none bg-transparent mx-2  cursor-pointer"
                onClick={handleLogOut}
              >
                <span className="mr-2 !text-white">Logout</span>
                <i className="fa-regular fa-user"></i>
              </button>
              </>
              :
              <> 
              <span>Account & Lists</span>
              <button
              className="outline-none !text-white border-none bg-transparent mx-2 cursor-not-allowed"
              disabled
              id="Account-&-Lists"
              >
              <i className="fa-solid !text-white fa-caret-down"></i>
              </button>
            </>
          }
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
              {productCount || 0}
            </span>
          </i>
        </Link>
      </div>

      {/*******************mobile******************** */}

      <div className="mobile w-[100%] flex justify-between items-center sm:hidden bg-costum-clr_acc_blue px-1 lg:px-2">
        <div className="flex mt-2">
          <button
            id="toggle-mib-main-aside" 
            onClick={_=> dispatch(toggleAside(true))} className="outline-none mr-5 hover:text-green-500 border-none bg-transparent  inline-block -mt-2 lg:hidden justify-self-end">
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
            {
              isLogged ?
              
              <div className="flex gap-2 items-center sm:block lg:flex text-xs cursor-pointer">
                <button onClick={handleLogOut} className="text-lg !font-thin"> Log out
                  <i className="fa-solid fa-chevron-right text-xs text-[#eee] inline-block mt-2 ml-1"></i>
                </button>
                <i className="fa-regular fa-user text-3xl sm:hidden"></i>

              </div>

              :

              <div className="flex gap-2 items-center sm:block lg:flex text-xs cursor-pointer">
                <button onClick={handleLogUp} className=" text-lg !font-thin"> Log in
                  <i className="fa-solid fa-chevron-right text-xs text-[#eee] inline-block mt-2 ml-1"></i>
                </button>
                <Link to='/orders'>
                  <i className="fa-regular fa-user text-3xl !text-white sm:hidden"></i>
                </Link>
              </div>
            }
          </div>
          <Link
            to="/cart"
            className=" py-0 my-1 px-2 text-sm flex items-baseline  text-white hover:text-green-500"
          >
            <i className="fa-solid fa-cart-flatbed text-white fa-2xl block mt-6 relative  text-inherit">
              <span className="absolute -top-4 left-2 w-[30px] h-[20px] bg-costum-clr_acc_blue  sm:bg-costum-clr_primary text-sm text-orange-300 font-black flex justify-center items-center">
                {productCount || 0}
              </span>
            </i>
          </Link>
        </div>
      </div>

      <div className=" sm:hidden pt-1 bg-costum-clr_acc_blue w-[100%] pb-4"> 
        {/**************************************** */}
            <Search smallScreen={true}/>
        {/**************************************** */}
      </div>
    </>
  );
};

export default HeaderTop;
