import { compeletPriceSerial } from "../../utilities";

const ProductRating = ({avgRating , ratings  , ratingValue = false , fullWidth = true}) => {
  return (
    <div className={`flex justify-between ${ fullWidth ? 'flex-1' : ''}`}>
       <div>
        {new Array(5).fill("").map((_, i) => {
            if (i < avgRating) {
              return (
                <i key={i} className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
              );
            } else {
              return <i key={i} className="fa-regular fa-lg fa-star text-[#ffa41c]"></i>;
            }
          })} 
       </div>
        {ratings && 
        ratingValue ? 
        <span className="mx-2 text-gray-600">{avgRating}</span>
        : ratingValue === true ?
        <span className=' text-[#007185] cursor-pointer hover:text-red-400 lowercase a-size-base'>
          <span className="pt-1 inline-block mr-[1px]">
          <i className="fa-solid fa-angle-down text-sm text-gray-600"></i>
          </span>
         <span>{compeletPriceSerial(ratings)}</span> 
        </span> : 
          ratingValue === null ? '' : null
        }
    </div>
  )
}

export default ProductRating