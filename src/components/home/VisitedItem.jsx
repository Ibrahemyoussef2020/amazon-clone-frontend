import { Link } from "react-router-dom";

const VisitedItem = ({ product, rat , section}) => {
  return (
    <article className="w-[200px] m-auto p-3 flex flex-col justify-center  gap-3">
      <Link to={`/product-details/${section}/${product.id}`}>
        <img
          src={`${product.image}.webp`}
          alt={product.title}
          className="max-w-[200px] max-h-[150px]"
        />              
         <span>{product.description}</span> 
      </Link>
      <p>EGP{product.price}</p>
      <div>
        {new Array(5).fill("").map((_, i) => {
          if (i < product.avgRating) {
            return (
              <i key={i} className="fa-solid fa-star  text-yellow-400"></i>
            );
          } else {
            return <i key={i} className="fa-regular fa-star text-yellow-400"></i>;
          }
        })}
      </div>
      <p className="text-xs">{product.title}</p>
    </article>
  );
};

export default VisitedItem;
