import GB_Currency from "../../utilities/Currency"

const ProductBuy = ({product}) => {
  return (
    <>
    <p className=" text-lg xl:text-2xl text-right text-red-700 font-semibold">{GB_Currency.format(product.price)}</p>
    <p className=" text-base xl:text-lg text-right text-gray-500 font-semibold">RRP: <span className=" line-through">{GB_Currency.format(product.oldPrice)}</span></p>
    <p  className=" text-sm xl:text-base text-blue-500 font-semibold mt-3">FREE Returns</p>
    <p className=" text-sm xl:text-base text-blue-500 font-semibold mt-1">FREE Delivery</p>
    <p className=" text-base xl:text-lg text-green-700 font-semibold mt-1">In Stock</p>
    <div className=" text-base xl:text-lg mt-1">Quantity : &nbsp;  
        <select className=" bg-white rounded-md border focus:border-indigo-600 outline-none cursor-pointer">
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
    <button className=" bg-yellow-300 w-full p-3 mt-5 rounded-lg text-xs lg:text-sm hover:bg-yellow-500">Add To Cart</button>
    </>
  )
}

export default ProductBuy