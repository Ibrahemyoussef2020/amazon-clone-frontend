import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Product, ProductRating, Productbadge } from "../components";
import { compeletPriceSerial } from "../utilities";

const Orders = () => {
  const {purchases} = useSelector(state => state.cart)
  const {isLogged}  = useSelector(state => state.log)


  if (!purchases.length) {
    return (
      <section>
        <div className=" hidden md:block">
          <div className="flex !flex-nowrap p-4 pb-8 lg:gap-[70px] items-end lg:item-start">
              <div className="w-[50%]">
                  <img src="/images/empty-cart-pc.svg" className="w-[300px] lg:w-[400px] mx-auto" alt="kkk"/>
              </div>
              <div className="lg:pb-4">
                  <h2 className="text-4xl !font-semibold mb-2">You don't have Orders</h2>

                  <Link to='/todays_offers' className="text-2xl hover:text-[#B12704] text-[#007185] hover:underline mb-2 inline-block">
                      Shop today's deals
                  </Link>

                  <div className="mt-1 text-xl">
                      <Link to='/login' className=" bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-lg mr-3">Sign in to your account</Link>
                      <Link to='/logout' className="py-2 px-4 rounded-lg border boredr-solid border-[#ccc] hover:bg-blue-50">Sign Up now</Link>
                  </div>

                  <Link to='/' className="py-2 px-4 rounded-lg border boredr-solid border-[#ccc] hover:bg-blue-50 block max-w-[360px] mt-6 text-center">Continue Shopping</Link>

              </div>                       
            </div>
          </div>


          <div className=" md:hidden">
            <div className="md:hidden flex-1 nav__categories bg-[#364759] text-white flex items-center  py-3 px-2"><i className="fa-solid fa-location-dot pb-[2px]"></i><span className="ml-1">Deliver to Egypt</span><i className="fa-solid fa-angle-down text-sm text-gray-600"></i></div>
            <div className="p-8">
              <img src="/images/empty-cart-mob.jpg" alt="empty" className="max-w-[300px] mx-auto" />
            </div>
            <h2 className="text-3xl text-center !font-semibold mb-2">You don't have Orders</h2>

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
      </section>
    )
  }

   
  return (
    <div className="relative">

     { isLogged ? <section className="bg-white flex !flex-nowrap gap-3 py-4 pl-1 border-t-[30px] border-solid border-[#eee]">
        <div className="p-8 bg-slate-100 h-[100%]">
        <i className="fa-regular fa-user text-6xl"></i>
        </div>

        <div className="flex flex-1 gap-2 justify-between">
          <div className="flex-1 sm:border-s border-solid mr-5 border-[#ccc]" dir="rtl">
            <div className="w-full" dir="ltr">
              <div className="flex mb-3">
                  <h3 className="text-lg ">User Name : </h3>
                  <span className="text-lg ml-1">Ibrahim Youssef</span>
              </div>

              <div className="flex mb-3">
                  <h3 className="text-lg ">User Email : </h3>
                  <span className="text-lg ml-1">ibrahimYoussef95.12</span>
              </div>

              <div className="flex mb-3">
                  <h3 className="text-lg ">User Number : </h3>
                  <span className="text-lg ml-1">01147359396</span>
              </div>
            </div>
          </div>

          <div className="flex-1 hidden sm:block">
            <div className="flex mb-3">
                <h3 className="text-lg ">Subcription Plan : </h3>
                <p className=" mb-0">
                  <span className="ml-1 font-semibold">Amazone/</span>
                  <span className="text-[#1ba1ff] font-bold">prime</span>
                </p>
            </div>
            <div className="flex mb-3">
                <h3 className="text-lg ">Subcription Date : </h3>
                <p className=" mb-0">
                  <span className="ml-1 font-semibold">Mon Dec 03 2019</span>
                </p>
            </div>
            <div className="flex mb-3">
                <h3 className="text-lg ">Subcription Long : </h3>
                <p className=" mb-0">
                  <span className="ml-1 font-semibold">Yearly</span>
                </p>
            </div>
          </div>        
        </div>
      </section> : null}
    
      <div className={`flex flex-1 justify-between flex-wrap items-start`}>
        {
          purchases
            .map(product =>

              <article className="text-sm xl:text-md my-4 pt-5 flex  items-center border-t-[30px] border-solid border-[#eee] text-[#0F1111]  font-medium w-full" key={product?.id}>
                <div className="w-full lg:w-[33%] p-4">
                  <div className="mx-auto  mt-4 sm:mx-0 p-4 flex items-center justify-center sm:justify-start sm:border lg:border-none border-solid border-[#eee] text-[#0F1111]">
                    <img className="max-h-[300px]  w-[100%] max-w-[300px]" src={`/${product?.image}.jpg`} alt="d" />
                  </div>
                </div>

                <div className="pt-4 sm:pt-12 px-4 w-[100%] md:w-[45%] lg:w-[35%]">
                  <div className="flex mb-1  gap-1">
                    <h3 className="text-lg  whitespace-nowrap">Product Title: </h3>
                    <p className="font-semibold !text-[14px] text-[#0F1111] pt-1 max-w-[90%] whitespace-nowrap overflow-hidden">{product.title[0]?.toUpperCase()}{product.title.slice(1)}</p>
                  </div>

                  <div className="flex  mb-1 text-lg gap-1">
                  <h3 className="text-lg  whitespace-nowrap">Product Rating: </h3> 
                    <span className="font-semibold !text-[14px]">{product.avgRating}</span>
                  </div>

                  <div className="flex mb-1  gap-1 ">
                    <h3 className="text-lg  whitespace-nowrap ">Item Price: </h3>
                    <span className="text-lg text-[14px] font-semibold">{product.price}</span>
                  </div>

                  <div className="flex mb-1  gap-1 ">
                    <h3 className="text-lg  whitespace-nowrap ">Item Count: </h3>
                    <span className="text-lg text-[14px] font-semibold">{product.quantity}</span>
                  </div>

                  <div className="flex mb-1  gap-1 ">
                    <h3 className="text-lg  whitespace-nowrap ">total price: </h3>
                    <span className="text-lg text-[14px] font-semibold">{product.total}</span>
                  </div>

                  <div className="flex mb-1  gap-1 ">
                    <h3 className="text-lg  whitespace-nowrap ">payment method: </h3>
                    <span className="text-lg font-semibold !text-[14px]">Upon receipt</span>
                  </div>

                  <div className="flex mb-1  gap-1">
                    <h3 className="text-lg  whitespace-nowrap ">Request date: </h3>
                    <span className="text-lg text-[14px] font-semibold">{product.orderDate}</span>
                  </div>

                  <div className="flex mb-1  gap-1 max-w-[400px] ">
                    <h3 className="text-lg  whitespace-nowrap ">Receipt date: </h3>
                    <p className="text-lg">
                    The expected time to receipt your order will be any time between 
                    <span className="mx-2 font-semibold text-[14px]">{product.receivedDateStart}</span> && 
                    <span className="mx-2 font-semibold text-[14px]">{product.receivedDateEnd}</span> 
                    </p>
                  </div>            
                  
                </div>

                <div className="p-4 font-semibold w-full sm:w-[55%] md:pl-16 lg:w-[32%] pt-6 text-[14px] ">
                      <p className="mb-2">{product.title[0].toUpperCase()}{product.title.slice(1)}</p>
                      <p className="mb-2">{product.description}</p>                     

                      <div className="pt-4">
                    { product.premium_offer ? 
                      <p className=" mb-0">                     
                        <i className="fa-solid fa-check text-[#feac03] font-extrabold"></i>
                        <span className="text-[#1ba1ff] font-bold">prime</span>
                        <span className="ml-1">Get it as soon as</span> 
                      </p>
                   : null }

                    <p>
                      <span className="block font-bold text-[#0F1111]">tomorrow, 23 Nov</span>
                    </p>
                      
                      {product.free_delivery ? <span className="mt-2 text-[14px]  text-[#0F1111] inline-block">Fulfilled by Amazon - FREE Shipping</span>
                      
                      : <span className="mt-2  text-[#0F1111] text-[14px] inline-block">Fulfilled by Clients - Price and  Delivery</span> 
                      }
                    
                  </div>    

                      <div className="my-5">
                        <ProductRating avgRating={product.avgRating} ratings={product.ratings}  />
                      </div>

                      <div className="mb-6">
                        {<Productbadge badge={product.badge} />}
                      </div>

                      <div className="text-[#555] text-[15px] flex gap-3 mt-2 mb-4 leading-6 text-center">
                      {product.ratings.toString().slice(0,3)}+ bought in past month
                      </div>

                  </div>          
              </article>
            )
        }
      </div>
    </div>
  )
};

export default Orders;
