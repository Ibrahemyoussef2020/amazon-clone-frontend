

const ProductRating = ({avgRating , ratings  , ratingValue = false}) => {
  return (
    <div>
       {new Array(5).fill("").map((_, i) => {
          if (i < avgRating) {
            return (
              <i key={i} className="fa-solid fa-star  text-yellow-400"></i>
            );
          } else {
            return <i key={i} className="fa-regular fa-star text-yellow-400"></i>;
          }
        })} 
        {ratings && 
        ratingValue ? 
        <span className="mx-2 text-gray-600">{avgRating}</span>
        :
        <span className='ml-3 text-blue-500 lowercase'>{ ratings} ratings</span>}
    </div>
  )
}

export default ProductRating