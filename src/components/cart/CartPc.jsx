import {toggleAside,handleBill,handleProductsQuantity,removeFromCart} from "../../redux/slices"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import {compeletPriceSerial} from "../../utilities"
import { useEffect,useState } from "react";
import {ProductSuggestions} from "../../components";


const CartPc = () => {

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
    <section className="pc-cart grid grid-cols-12 p-6 gap-5 !justify-between bg-[#EAEDED]">
        <div className="col-span-8">
            <div className="all-data bg-white mb-9">
                <div className="flex justify-between items-end bg-white px-4 border-solid border-b-2 border-[#eee]">
                    <h1 className=" text-4xl font-normal pt-7 pb-4">
                        Shopping Cart           
                    </h1>
                    <h2 className=" text-[#777]">
                        Price
                    </h2>
                </div>
                <div>
                {
                  !products.length ?
                
                    <div className="flex p-8 gap-4 items-end lg:items-center">
                        <div className="w-full lg:w-fit">
                            <img loading="lazy" src="/images/empty-cart-pc.svg" className="w-[300px] lg:w-[230px] mx-auto" alt="kkk"/>
                        </div>
                        <div>
                            <h2 className="text-3xl !font-semibold mb-1">Your Amazon cart is empty</h2>

                            <Link to='/todays_offers' className="hover:text-[#B12704] text-[#007185] hover:underline">
                                Shop today's deals
                            </Link>

                            <div className="mt-3 text-lg">
                                <Link to='/login' className=" bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-lg mr-3">Sign in to your account</Link>
                                <Link to='/logout' className="py-2 px-4 rounded-lg border boredr-solid border-[#ccc] hover:bg-blue-50">Sign Up now</Link>
                            </div>
                        </div>                       
                    </div>
                        
                    :

                    products?.map(product => {
                        return <article key={product.id} className="grid grid-cols-12 pt-4 pb-10 px-4 bg-white border-b border-solid border-[#ccc]">

                        <div className="col-span-4 flex justify-center items-center p-1">
                            <img loading="lazy" src={`/${product?.image}.webp`} alt={product.brand}  className="min-h-[200px] max-h-[220px]"/>
                        </div>
                        <div className="col-span-8 pl-4 flex !flex-nowrap items-start">
                            <div className="details flex-1 font-thin">
                                <h3 className="text-md lg:text-2xl !leading-8 mb-3 max-w-[360px]">{product?.title}{product?.description.slice(0,20)}...</h3>
                                <p className="text-[#007600] mb-2">In Stock</p>
                                <label htmlFor={product.id} className="flex items-center gap-2 text-sm mb-2">
                                    <input type="checkbox" name={product.id} id={product.id}/>
                                    <span>This is a gift</span>
                                    <span className=" text-[#007185]">Learn more</span>
                                </label>
                                <p>
                                    <span className=" text-sm font-semibold">Brand: </span>
                                    <span>{product.brand[0].toUpperCase()}{product?.brand.slice(1)}</span>
                                </p>
                                <div className=" flex gap-x-3 gap-y-1 items-center">
                                    <div className=" w-fit_content text-sm mt-1 rounded-lg py-[6px] px-2 border border-solid border-[#ccc] bg-[#F0F2F2] select-count-shadow">Qty: 
                                        <select name={product.id} value={product.quantity} onChange={e=> handleModifyQuantity(e,product.id)} className=" bg-inherit border border-none outline-none cursor-pointer">
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
                                    <div dir="rtl" className=" w-fit_content text-sm">
                                        <button
                                            onClick={_=>dispatch(removeFromCart(product.id))} 
                                            className=" text-[#007185] hover:underline px-4 border-x mr-9 border-solid border-[#ccc]">
                                            Delete
                                        </button> 
                                    </div>
                                    <div dir="rtl" className=" w-fit_content text-sm">
                                        <button className=" text-[#007185] cursor-not-allowed hover:underline pr-4 border-s border-solid border-[#ccc]">
                                            Save for later
                                        </button> 
                                    </div>
                                    <div dir="rtl" className=" w-fit_content text-sm">
                                        <button className=" text-[#007185] cursor-not-allowed hover:underline pr-4 border-s border-solid border-[#ccc]">
                                            Compare with similar items
                                        </button> 
                                    </div>
                                    <div dir="rtl" className=" w-fit_content text-sm">
                                        <button className=" text-[#007185] cursor-not-allowed hover:underline pr-4 border-s border-solid border-[#ccc]">
                                            Share
                                        </button> 
                                    </div>
                                </div>                   
                            </div>
                            <div className="price hidden lg:block">
                                <p className=" text-2xl font-semibold text-black">
                                    EGP {compeletPriceSerial(product.price * product.quantity + product.deliveryPrice)}
                                </p>
                            </div>
                        </div>
                    </article>
                    })
                }
                </div>
                {products.length && productCount > 0 ?
                <div className=" bg-white text-2xl pt-2 pb-8 px-4 flex justify-end">
                    <span className=" !font-thin">Subtotal ({productCount}) : </span>
                    <span className="!font-semibold ml-1"> EGP {compeletPriceSerial(bill)}</span>
                </div>
                : null}
            </div>
            <div className="blank-div bg-white h-[100px]">
                
            </div>
        </div>

        {/******************  total-buy  ************************ */}

        <div className=" col-span-4">
            <div className="proceed bg-white p-3 lg:p-4 mb-7">
                <div className="flex !flex-nowrap gap-1">
                    <i className="fa-solid fa-circle-check text-lg lg:text-xl text-[#067D62] mr-2 hidden lg:inline"></i>
                    <p className=" text-[#008500] !font-thin text-md lg:text-md">
                    Part of your order qualifies for FREE Shipping.
                    <span className="mx-2 text-[#555] hidden lg:inline">Choose this option at checkout.</span>
                    <br />  
                    <a href="#" className="text-md text-[#007185] cursor-not-allowed">
                        See details
                    </a>
                    </p>
                </div>
                 <div className=" bg-white text-lg lg:text-[18px] pt-2 mb-2 px-4 flex">
                    <span className="!font-thin">Subtotal ({productCount} Items) : </span>
                    <span className="!font-semibold ml-1"> EGP {compeletPriceSerial(bill)}</span>
                </div> 
                <button className="bg-[#F7CA00] text-[#333] mb-4 border border-solid  hover:border-[#008296] buy-shadow w-full rounded-lg mx-auto py-2" onClick={handleByProcess}>
                    Proceed to Buy
                </button>
            </div>

            <div>
                <ProductSuggestions/>
            </div>
        </div>
    </section>
  )
}

export default CartPc