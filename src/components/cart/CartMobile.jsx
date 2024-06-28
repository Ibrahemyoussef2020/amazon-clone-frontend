import {toggleAside,handleBill,handleProductsQuantity,removeFromCart,increaseQuantity,decreaseQuantity} from "../../redux/slices"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import {compeletPriceSerial} from "../../utilities"
import { useEffect,useState } from "react";
import {ProductSuggestions} from "../../components";

const CartMobile = () => {

  const dispatch = useDispatch()
    
  const {products} = useSelector(state => state.cart)
  const {purchases} = useSelector(state => state.cart)
  const {productCount} = useSelector(state => state.cart)
  const {bill} = useSelector(state => state.cart);

  const [newProducts,setNewProducts] = useState(products)
  const [modifyQuantity,setModifyQuantity] = useState('1')

  const navigate = useNavigate()
  

const handleModifyQuantity = (e ,id)=>{

  const newQuantity = {
      id:id,
      value:+e.target.value
  }

  dispatch(handleProductsQuantity(newQuantity))
}

const handleByProcess = ()=>{
  dispatch(handleBill())
  navigate('/orders')
}


  return (
    <div>
      <div className="md:hidden flex-1 nav__categories bg-[#364759] text-white flex items-center  py-3 px-2"><i className="fa-solid fa-location-dot pb-[2px]"></i><span className="ml-1">Deliver to Egypt</span><i className="fa-solid fa-angle-down text-sm text-gray-600"></i></div>
      {products.length ?
      <div className="max-w-[300px] mx-auto py-5 mb-4 border-b border-solid border-[#ccc]">
        <div className=" bg-white text-[18px] pt-2 mb-2 flex">
              <span className="!font-thin">Subtotal ({productCount} Items) : </span>
              <span className="!font-semibold ml-1"> EGP {compeletPriceSerial(bill)}</span>
          </div>
          <button className="bg-[#F7CA00] text-[#333] mb-4 border border-solid  hover:border-[#008296] buy-shadow block w-full rounded-lg  py-2" onClick={handleByProcess}>
              Proceed to Buy
          </button>
          <label htmlFor='gift' className="flex items-center gap-2 text-sm mb-2">
              <input type="checkbox" name='gift' id="gift"/>
              <span>Send as a gift. Include custum message</span>
          </label>
      </div>  : null}
      <div>
        
        {

          !products.length ?

          <div>
            <div className="p-8">
              <img src="/images/empty-cart-mob.webp" alt="empty" className="max-w-[300px] mx-auto" />
            </div>
            <h2 className="text-3xl text-center !font-semibold mb-2">Your Amazon cart is empty</h2>

            <Link to='/todays_offers' className="text-center text-lg block w-fit mx-auto hover:text-[#B12704] text-[#007185] hover:underline">
                Shop today's deals
            </Link>
            <div className="px-4">
              <Link to='/login' className="mt-3 text-2xl max-w-[350px] mx-auto block  bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-lg text-center mb-3">Sign in to your account</Link>
              <Link to='/logout' className="py-2 px-4  max-w-[350px] mx-auto block text-2xl rounded-lg border boredr-solid border-[#ccc] hover:bg-blue-50 text-center mb-12">Sign Up now</Link>
            </div>

            <div className="px-4 border-t-[40px] border-solid py-2 border-blue-50">
              <Link to='/' className="mt-3 text-2xl max-w-[350px] mx-auto block  bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-lg text-center mb-3">Continue shopping</Link>         
            </div>
          </div>

          :

          products.map(product =>{
            const discount = Math.ceil(100 - (parseInt(product.price) / product.oldPrice) * 100);
            return (
              <article key={product.id} className="mb-4 bg-[#607d8b00] py-4 pl-4">
                <div className="top flex !flex-nowrap gap-5">
                  <div key={product.id} className="min-w-[30%] max-w-[110px] max-h-[170px] sm:max-w-[200px] sm:max-h-[200px] mb-4">
                    <img src={`/${product.image}.webp`} alt={product.type} className="w-[100%] h-[100%]"/>
                  </div>
                  <div className="flex-2 text-xl">
                    <p className=" !font-thin mb-3">
                      {product.description.slice(0,40)}...
                    </p>
                    {
                      product.has_discount && product.oldPrice > product.price ?
                      <div className=" text-md">
                        <span className="py-1 px-2 bg-red-800 font-medium text-white mr-2">{discount} % off</span>
                        <span className="text-red-800">Deal</span>
                    </div>
                    : null
                    }
                    <div className="flex !flex-nowrap mt-4 mb-1 gap-5 max-w-[230px] max-h-[30px] ">
                      <div className="flex !flex-nowrap font-bold">
                        <sub className="text-[11px]">EGP</sub>
                        <span className=" text-[#0F1111] text-[20px]">350</span>
                        <sub className="text-[11px]">00</sub>
                      </div>
                      <span className="ml-2 text-[#555] ">List Price: <span className="line-through whitespace-nowrap">EGP 400</span></span>
                    </div>
                    <div className=" text-xl">
                      <p className="text-[#007600] mb-2">In Stock</p>
                      <div>
                        <span className=" font-semibold">Style  : </span>
                        <span>{product.brand}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="control flex gap-2 py-4">
                    <div className="min-w-[150px] rounded-2xl bg-[#ebf0f0] flex justify-between w-[120px] border-solid border-[1px] border-[#ccc] select-count-shadow">
                      <button
                        onClick={_=>dispatch(decreaseQuantity(product.id))}         
                        className="flex-1 text-center py-1">
                        <i className="fa-regular fa-trash-can text-2xl"></i>
                      </button>
                      <div className="text-2xl bg-white flex-1 text-center py-1">
                        {product.quantity || 1}
                      </div>
                      <button className="flex-1 text-center py-1"
                        onClick={_=>dispatch(increaseQuantity(product.id))}
                      >
                        <i className="fa-solid fa-plus text-2xl"></i>
                      </button>
                    </div>
                    <button
                      onClick={_=>dispatch(removeFromCart(product.id))} 
                      className=" bg-white border-solid border-[1px] text-xl border-[#ccc] flex justify-center items-center py-2 px-6 rounded-2xl select-count-shadow">
                      Delete
                    </button>
                    <button disabled className=" bg-white cursor-not-allowed  border-solid border-[1px] py-3 text-xl border-[#ccc] flex justify-center items-center px-6 rounded-2xl select-count-shadow">
                      Save for later
                    </button>
                    <button disabled className="bg-white  cursor-not-allowed border-solid border-[1px] py-3 text-xl border-[#ccc] flex justify-center items-center px-6 rounded-2xl select-count-shadow">
                      Compare similar
                    </button>
                </div>
              </article>
            )
          })
        }
      </div>
      {products.length ? <div className="w-[100%]">
          <ProductSuggestions/>
      </div> : null}
    </div>
  )
}

export default CartMobile