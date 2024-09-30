import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAside } from "../redux/slices";
import { filterType } from "../redux/slices"; // will delleted frorm here & the main
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";



const NavBar = () => {
  
  const dispatch = useDispatch()

  return (
    <div className="flex !flex-nowrap sm:justify-between pt-2 lg:pt-0 pl-1 lg:pl-4   bg-costum-clr_acc_blue  sm:h-[40px] w-[100%]">
      <nav className="flex flex-1 pb-2 sm:pb-3 !flex-nowrap items-end overflow-hidden">
        <div className="pr-3 hidden sm:block relative ">
            <button
              className="outline-none border-none bg-transparent"
              onClick={e=> dispatch(toggleAside())}
            >
              <i className="fa-solid fa-bars text-[16px] mr-2"></i>
              <span className="font-bold ">All</span>
            </button>
        </div>
        <div className=" sm:hidden flex-1 nav__categories flex align-bottom  w-[385px] sm:w-[400px] px-2">
          <Swiper
            slidesPerView={4}
            loop={true}
           navigation={true}
            spaceBetween={2}
          modules={[Navigation]}
          
        
            breakpoints={{
              570: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <Link to='/offers'>
              Deals
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link to="/search-results/fashion">
              Fashion           
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link to="/search-results/mobiles">
                Mobiles <span className=" hidden sm:inline">Phones</span>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link to="/search-results/computers">
                Computers
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link to="/search-results/hair_devices">
              Beauty
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>

        {/***************  pc nav ********************* */}

        <div className="hidden flex-1 nav__categories sm:flex align-bottom   px-4 pt-2">
          
          <ul className="flex justify-between w-[100%]">
            <li>
              <Link to='/offers'>
              white Friday Deals
              </Link>
            </li>

            <li>
              <Link to="/search-results/fashion">
              Fashion           
              </Link>
            </li>

            <li>
              <Link to="/search-results/mobiles">
                Mobiles <span className=" hidden sm:inline">Phones</span>
              </Link>
            </li>

            <li>
              <Link to="/search-results/computers">
                Computers <span className="lg:hidden">& Software</span>
              </Link>
            </li>

            <li>
              <Link to="/search-results/hair_devices">
              Beauty
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/********************  pooster ********************** */}

      <div className="justify-end ml-4 mr-2 text-3xl hidden lg:flex">
        <img loading="lazy" src="/images/amazone-sale.webp" alt="11.11 Sale" className="max-h-[40px] min-w-[400px]" />
      </div>
    </div>
  );
};

export default NavBar;
