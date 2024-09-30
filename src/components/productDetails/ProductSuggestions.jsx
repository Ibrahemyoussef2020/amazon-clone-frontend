import { useEffect,useState } from "react";
import { fetchData } from "../../apis";
import { addToCart } from "../../redux/slices";
import { compeletPriceSerial,selectDate } from "../../utilities";
import ProductRating from "./ProductRating";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";



const StorageSuggestions = localStorage.getItem('suggest-to-addCart') !== null ? JSON.parse(localStorage.getItem('suggest-to-addCart')) : [];

const ProductSuggestions = () => {
    const [suggestions,setSuggetions] = useState(StorageSuggestions);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {products} = useSelector(state => state.cart)


    useEffect(()=>{
      fetchData('highest_rating',setSuggetions); 
    },[products])


    const handleAddToCart = (product)=>{
        const delivery = product.price < 50 ?  Math.ceil(product.price / 4) : product.price > 50 &&  product.price < 100 ? 20 :  50;
        const uniqeId = !parseInt(product.id)  ? product.id : product.brand+'-'+product.id.toString()

        const addedProduct = {
          ...product,
          id:uniqeId,
          quantity:1,
          orderDate:selectDate(0),
          receivedDateStart:selectDate(1),
          receivedDateEnd:selectDate(3),
          deliveryPrice:delivery || 0,
          total:product.price + (delivery || 0)
      }

        dispatch(addToCart(addedProduct))
        navigate('/cart')
      }




  return (
    <div className=" bg-white sm:p-2 p-4 text-md rounded-xl">
        <h2 className=" text-xl font-medium mb-5 sm:text-center md:text-start">Pair with your cart</h2>
        <div className="flex justify-between sm:pl-12 sm:pr-4 md:pl-0 md:pr-0">
        {
            suggestions.map(suggestion => 
            <article key={suggestion.id} className="grid grid-cols-12 mb-7 gap-2 max-w-[46%] sm:max-w-[100%] md:max-w-[46%] mx-auto lg:max-w-[100%]">
                <div className="col-span-12 lg:col-span-5 flex">
                    <img loading="lazy" src={`/${suggestion.image}.webp`} alt={suggestion.brand}  className="max-h-[150px] lg:min-h-[110px]"/>
                </div>
                <div className="col-span-12 lg:col-span-7 flex">
                    <a 
                        className="mb-1 leading-6 inline-block hover:text-[#B12704] text-[#007185] hover:underline"
                        href="#">{suggestion.description.slice(0,40)}
                    </a> 
                    <div className="mb-1 flex w-[120px] text-sm">
                        <ProductRating avgRating={suggestion.avgRating} ratings={suggestion.ratings}  />
                        <p className="text-[#007185] relative">{suggestion.ratings}</p>
                    </div>
                    <div className="text-lg text-[#b12704e6] w-full">
                    EGP {compeletPriceSerial(suggestion.price)}
                    </div>
                    <p className="mb-1 text-sm text-[#555]">
                        Only left {parseInt(suggestion.ratings.toString().slice(0,3))} in stock orders
                    </p>
                    <button 
                        onClick={_=>handleAddToCart(suggestion)}
                        className="bg-[#F7CA00] text-[#333] mb-4 border border-solid  hover:border-[#008296] buy-shadow rounded-xl lg:mx-0 px-2 py-1 text-sm">
                        add to Cart
                    </button>
                </div>
            </article>)
        }
        </div>
    </div>
  )
}

export default ProductSuggestions