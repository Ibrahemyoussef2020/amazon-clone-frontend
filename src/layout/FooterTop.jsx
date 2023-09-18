import React from "react";
import { Link } from "react-router-dom";

const FooterTop = () => {
  return (
    <>
      <a
        href="#header"
        className="block w-[100%] bg-[#485769]  p-2 text-center font-bold"
      >
        Back to top
      </a>
      <div className="bg-[#232F3E] py-5">
        <div className="py-6 px-3 flex justify-around	gap-4 cursor-not-allowed lg:w-[900px] m-auto">
          <article className="w-[150px]">
            <ul>
              <li className="mb-4">
                <h3 className="font-bold">Get to Know Us</h3>
              </li>
              <li className="mb-2">
                <a className="text-sm  pointer-events-none" href="#">
                  About Amazon
                </a>
              </li>
              <li className="mb-2">
                <a className="text-sm  pointer-events-none	" href="#">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a className="text-sm  pointer-events-none	" href="#">
                  Amazon Science
                </a>
              </li>
            </ul>
          </article>

          <article className="w-[150px]">
            <ul>
              <li className="mb-4">
                <h3 className="font-bold">Shop with Us</h3>
              </li>
              <li className="mb-2">
                <a className="text-sm  pointer-events-none" href="#">
                  Your Account
                </a>
              </li>
              <li className="mb-2">
                <a className="text-sm  pointer-events-none	" href="#">
                  Your Orders
                </a>
              </li>
              <li className="mb-2">
                <a className="text-sm  pointer-events-none	" href="#">
                  Your Addresses
                </a>
              </li>
              <li className="mb-2">
                <a className="text-sm  pointer-events-none	" href="#">
                  Your Lists
                </a>
              </li>
            </ul>
          </article>

          <article className="w-[150px]">
            <ul>
              <li className="mb-4">
                <h3 className="font-bold">Make Money with Us</h3>
              </li>
              <li className="mb-2">
                <a className="text-sm  pointer-events-none" href="#">
                  Protect and build your brand
                </a>
              </li>
              <li className="mb-2">
                <a className="text-sm  pointer-events-none	" href="#">
                  Advertise Your Products
                </a>
              </li>
              <li className="mb-2">
                <a className="text-sm  pointer-events-none	" href="#">
                  Sell on Amazon
                </a>
              </li>
              <li className="mb-2">
                <a className="text-sm  pointer-events-none	" href="#">
                  Fulfillment by Amazon
                </a>
              </li>
            </ul>
          </article>

          <article className="w-[150px]">
            <ul>
              <li className="mb-4">
                <h3 className="font-bold">Let Us Help You</h3>
              </li>
              <li className="mb-2">
                <a className="text-sm  pointer-events-none" href="#">
                  Help
                </a>
              </li>
              <li className="mb-2">
                <a className="text-sm  pointer-events-none	" href="#">
                  Shipping & Delivery
                </a>
              </li>
              <li className="mb-2">
                <a className="text-sm  pointer-events-none	" href="#">
                  Returns & Replacements
                </a>
              </li>
              <li className="mb-2">
                <a className="text-sm  pointer-events-none	" href="#">
                  Amazon App Download
                </a>
              </li>
            </ul>
          </article>
        </div>

        <hr className="bg-[#eee] h-[.5px] border-none p-0 my-5" />

        <div className="py-6 flex justify-center flex-col sm:flex-row lg:w-[900px] m-auto">
          <img
            src="images/amazon.png"
            alt="amazone"
            className="h-[40px] sm:h-[30px] mx-auto sm:mx-0 sm:mr-[100px]  mb-5 sm:mb-0  relative sm:-bottom-[10px]"
          />

          <div className="flex justify-center gap-5">
            <div className="w-[122px] flex items-center gap-2 border-solid border rounded  border-white py-3  px-2  cursor-not-allowed">
              <i className="fa-solid fa-globe"></i>
              <input
                className="bg-inherit focus:outline-none text-xs  max-w-[60px] cursor-not-allowed"
                disabled
                value="English"
              ></input>
              <i className="fa-solid fa-xmark text-[#ffffff38]"></i>
            </div>

            <div className="w-[122px] flex items-center gap-2 border-solid border rounded  border-white py-3  px-2  cursor-not-allowed">
              <img src="images/usa.png" alt="USA" className="h-[15px]" />
              <input
                className="bg-inherit focus:outline-none text-xs max-w-[47px]  cursor-not-allowed"
                disabled
                value="USA"
              ></input>
              <i className="fa-solid fa-xmark text-[#ffffff38]"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTop;
