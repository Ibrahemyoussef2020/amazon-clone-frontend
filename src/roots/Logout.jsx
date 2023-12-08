import React, { useState } from "react";
import {logUp} from "../redux/slices"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Logout = () => {
  const {textError,setTextError} = useState('')
  const [user,setUser] = useState({
    userName:'Ibrahim Youssef',
    userEmail:'ibrahimYoussef95.12',
    userPassword:'Amazone123'
  })

  const dispath = useDispatch()
  const navigate = useNavigate()

  const handleLogUp = (e)=>{
    e.preventDefault();
    dispath(logUp(user));
    setTimeout(_=> navigate('/'),100)
  }
  
  return <section className="p-4 w-[90%] max-w-[400px]  mx-auto">
    <Link className="" to="/">
      <img src="/images/amazone-login.png" alt="Amazone" className="mx-auto" />
    </Link>
    <form action="#" className="mt-6 border border-solid border-[#ccc] p-6">
      <h1 className=" text-4xl font-thin mb-4">Create account</h1>

      <label htmlFor="user-name" className="block mb-5 text-md no-check-shape log-label">
        <p className="font-semibold mb-1">Your name</p>
        <input defaultValue={user.userName}
          type="text" name="user-name"
          id="user-name"
          className="log rounded-md w-full border-2 p-2 border-solid border-[#333] hover:border-[#0cd4f3]  buy-shadow" 
          />
          <p className="text-red-500 text-sm pt-1 pl-4">
            {textError}
          </p>
      </label>

      <label htmlFor="user-email" className="block mb-7 text-md no-check-shape log-label">
        <p className="font-semibold mb-1">Mobile number or email</p>
        <input defaultValue={user.userEmail}
          type="email" name="user-email"
          id="user-email"
          className="log rounded-md w-full border-2 p-2 border-solid border-[#333] hover:border-[#0cd4f3]  buy-shadow" 
          />
          <p className="text-red-500 text-sm pt-1 pl-4">
            {textError}
          </p>
      </label>

      <label htmlFor="user-password" className="block mb-7 text-md no-check-shape log-label">
        <p className="font-semibold mb-1">Password</p>
        <input defaultValue='Amazone-Ibrahim-2019'
          type="password" name="user-password"
          id="user-password"
          className="log rounded-md w-full border-2 p-2 border-solid border-[#333] hover:border-[#0cd4f3]  buy-shadow" 
          />
          <p className="text-sm pt-1 pl-4 font-thin">
          Passwords must be at least 6 characters.
          </p>
      </label>

      <label htmlFor="user-repassword" className="block mb-7 text-md no-check-shape log-label">
        <p className="font-semibold mb-1">Re-enter password</p>
        <input defaultValue='Amazone-Ibrahim-2019'
          type="password" name="user-repassword"
          id="user-repassword"
          className="log rounded-md w-full border-2 p-2 border-solid border-[#333] hover:border-[#0cd4f3]  buy-shadow" 
          />
      </label>

      <button
        onClick={handleLogUp} 
        className=" bg-yellow-300 block text-center w-full p-2 mt-5 rounded-lg hover:bg-yellow-500">
        Continue
      </button>


      <p className="p-4 my-4">
        By signing in, you agree to Amazon's <a href="#" className=" text-[#0066c0] cursor-not-allowed">Conditions of Use</a> and  <a href="#"  className="text-[#0066c0] cursor-not-allowed">Privacy Notice</a>
      </p>
      <div className="flex items-center px-4 pt-7 text-sm border-t border-solid border-[#ccc]">
        <span>Already have an account?</span>
        <button 
          onClick={()=> navigate('/login')} 
          className="ml-1 text-[#0066c0] hover:text-red-400 cursor-pointer">
          <span className="mr-1">Sign in</span>
          <i className="fa-solid fa-caret-right hover:text-red-400"></i>
        </button>
      </div>
    </form>

    <div className="p-4 relative  mt-12 border-t border-solid border-[#ccc]">
      <span className=" bg-white text-[#777] text-sm absolute w-fit px-4 -top-3 left-[30%] right-0 ">New to Amazon?</span>
    </div>
  </section>;
};

export default Logout;
