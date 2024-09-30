import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {

  const [email,setEmail] = useState('')
  const [textError,setTextError] = useState('')

  const {userEmail} = useSelector(state => state.log)
  const navigate = useNavigate()

  console.log(userEmail);

  const handleChange = (e)=>{
    setTextError('')
    const {value} = e.target;
    setEmail(value)
  }

  const handleLogin = (e)=>{
      e.preventDefault()

      if (email === '') {
        setTextError('! Enter your mobile phone number or email')
        return false
      }
      else if (email !== '' && email !== userEmail) {
        setTextError('! There is no email according to this')
        return false
      }
      else if (email !== '' && email === userEmail) {
        setTextError('')
        navigate('/')
      }
  }



  return <section className="p-4 w-[90%] max-w-[400px]  mx-auto">
    <Link className="" to="/">
      <img loading="lazy" src="/images/amazone-login.webp" alt="Amazone" className="mx-auto" />
    </Link>
    <form action="#" className="mt-6 border border-solid border-[#ccc] p-6">
      <h1 className=" text-5xl font-thin mb-4">Sign in</h1>
      <label htmlFor="login" className="no-check-shape log-label">
        <p className=" text-xl font-semibold mb-2">Email or mobile phone number</p>
        <input value={email}
          onChange={handleChange}
          type="text" name="login"
          id="login"
          className="log rounded-md w-full text-xl border-2 p-2 border-solid border-[#333] hover:border-[#0cd4f3]  buy-shadow" />
          <p className="text-red-500 text-sm pt-1 pl-4">
            {textError}
          </p>
      </label>
      <button
        onClick={handleLogin} 
        className=" text-xl bg-yellow-300 block text-center w-full p-3 mt-5 rounded-lg hover:bg-yellow-500">
        Continue
      </button>
      <p className="p-4 my-4">
        By signing in, you agree to Amazon's <a href="#" className=" text-[#0066c0] cursor-not-allowed">Conditions of Use</a> and  <a href="#"  className="text-[#0066c0] cursor-not-allowed">Privacy Notice</a>
      </p>
      <div className="flex items-center px-4 hover:text-red-400 text-sm">
      <i className="fa-solid fa-caret-right hover:text-red-400"></i>
      <button disabled className="ml-1 cursor-not-allowed text-[#0066c0] hover:text-red-400">Need help?</button>
      </div>
    </form>

    <div className="p-4 relative  mt-12 border-t border-solid border-[#ccc]">
      <span className=" bg-white text-[#777] text-sm absolute w-fit px-4 -top-3 left-[30%] right-0 ">New to Amazon?</span>
    </div>

    <button
      onClick={()=> navigate('/logout')} 
      className=" text-md hover:bg-[#e7e9ec] block text-center w-full p-1 mt-5 rounded-lg border border-solid border-[#ccc] ">
      Create your Amazon account
    </button>

  </section>;
};

export default Login;
