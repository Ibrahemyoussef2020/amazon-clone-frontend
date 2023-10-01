import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { fetchData } from "../apis";
import { ProductBuy, ProductDetailsInfo, ProductPadge, ProductRating } from "../components";
import {compeletPriceSerial} from '../utilities'
import { Link } from "react-router-dom";


const SelectCategoryResults = () => {
    const [products,setProducts] = useState();

    const location = useLocation()
    const {searchType} = useParams();
    const selectedValue = location.state.toLowerCase();
    const category = searchType === 'searchAllBrands' ? 'brand' : 'section';

 
    //console.log(selectedValue);

   useEffect(() => {
        fetchData(searchType , setProducts);
    }, [products]); 

  
  if(!products?.length) return <h2>Loading ...</h2>

  return (
    <div className={`flex justify-around flex-wrap`}>
        {
            products?.filter(product => product[category]?.toLowerCase() === selectedValue?.toLowerCase())
            .map(product => 
            
            <article className=" text-sm xl:text-md flex max-w-[220px] p-2 text-center font-semibold" key={product?.id}>
                <div className="mx-auto flex items-center justify-center bg-white p-2 max-h-[200px] max-w-[100%]">
                  <img className="max-h-[100%] max-w-[100%]" src={`/${product?.image}.jpg`} alt="d" />  
                </div>
                <div>
                    <p>{product.section?.toUpperCase()}</p>
                    <p className=" font-thin">{product.description.slice(0,50)}</p>
                    <div className="mb-1">
                    <ProductRating avgRating={product.avgRating} ratings={product.ratings} ratingValue={true} />
                    </div>
                    <div className="">
                      <ProductPadge badge={product.badge} />
                    </div>
                    <div className="flex justify-center mt-3">
                        <sub>EGP</sub>
                        <span className=" text-gray-800 font-normal text-2xl xl:text-3xl">
                          {compeletPriceSerial(product.price)}
                        </span>
                        <sub>000</sub>
                    </div>
                    <div>
                   <span className="mx-2 text-md sm:text-sm text-gray-500">& FREE Shipping.</span>  
                    <Link className=" text-md sm:text-sm text-[#007185] hover:text-red-400 hover:underline" 
                    to={`/product-details/${searchType}/${product.id}`}
                    >Details</Link>
                    </div>
                </div>
            </article> 
            )
        }
    </div>
  )
}

export default SelectCategoryResults