import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/slices"
import GB_Currency from "../../utilities/Currency"
import { selectDate } from "../../utilities"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"


const ProductBuy = ({product , setProduct , deliveryPrice}) => {
  const [quantity , SetQuantity] = useState('1')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{

  },[quantity])


  const handleQuantity = (e)=>{
    SetQuantity(e.target.value);
  }

  const handleAddToCart = ()=>{
    const uniqeId = !parseInt(product.id)  ? product.id : product.brand+'-'+product.id.toString()
    const addedProduct = {
      ...product,
      id:uniqeId,
      quantity:+quantity || 1,
      orderDate:selectDate(0),
      receivedDateStart:selectDate(1),
      receivedDateEnd:selectDate(3),
      deliveryPrice:deliveryPrice || 0,
      total:(product.price * quantity) + (deliveryPrice || 0)
  }

    dispatch(addToCart(addedProduct))
    navigate('/cart')
  }

  return (
    <>
    <p className=" text-3xl sm:text-lg text-right text-red-700 font-semibold">{GB_Currency.format(product.price + deliveryPrice)}</p>
{  product.has_discount ?  <p className="text-2xl sm:text-lg text-right text-gray-500 font-semibold">RRP: <span className=" line-through">{GB_Currency.format(product.oldPrice + deliveryPrice)}</span></p> : null}
   <div className="text-2xl sm:text-lg mt-1">Quantity : &nbsp;  
        <select onChange={(e)=> SetQuantity(e.target.value)} className=" bg-white rounded-md border focus:border-indigo-600 outline-none cursor-pointer">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
    </div>
    <Link
      onClick={handleAddToCart} 
      className=" text-lg sm:text-sm bg-yellow-300 block text-center w-full p-4 sm:p-2 mt-5 rounded-[50px] hover:bg-yellow-500">
        Add To Cart
    </Link>
    <Link
      //onClick={handleAddToCart} 
      className=" text-lg sm:text-sm bg-orange-400 block text-center w-full p-4 sm:p-2 mt-5 rounded-[50px] hover:bg-orange-500">
        Buy Now
    </Link>
    <p className="text-xl sm:text-sm  mb-3 sm:mb-0 flex justify-between mt-4 pl-2 pt-2 text-[#333]">
      <span>Ships from</span>
      <span>Amazone.eg</span> 
    </p>
    <p className="text-xl sm:text-sm mb-3 sm:mb-0 flex justify-between pl-2 pt-2 text-[#333]">
      <span>Sold by</span>
      <span>Amazone.eg</span> 
    </p>
    <p className="text-xl sm:text-sm mb-3 sm:mb-0 flex justify-between pl-2 pt-2 text-[#333]">
      <span>Payment</span>
      <span className="text-[#007185]">Cash during receipt</span> 
    </p>
    <div className="text-xl sm:text-sm mb-3 sm:mb-0 mt-8 sm:mt-3">
      <button disabled className="py-4 sm:py-2 px-3 w-full   cursor-not-allowed border border-solid border-[#ccc]">
        Add to List
      </button>
    </div>
    </>
  )
}

export default ProductBuy