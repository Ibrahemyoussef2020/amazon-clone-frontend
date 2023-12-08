import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {toggleAside} from "../../redux/slices";


const AlterAside = ({asideData}) => {


    const {
    searchStrategy,
    setSearchStrategy,
    isSearchStrategyShowen,
    setIsSearchStrategyShowen,
    rating,
    category,
    brand,section
    } = asideData


    const {isOppend} = useSelector(state => state.aside)

    const dispatch = useDispatch()
    const navigate = useNavigate()
   
    
    const showSearchStartegy = (e,isShowen,stategy)=>{
      e.preventDefault();
      setIsSearchStrategyShowen(isShowen);
      setSearchStrategy(stategy)
    }

  return (
    <div className={`sub-aside alter-aside bg-orange-400  p-2  ${isSearchStrategyShowen ? 'oppend-aside' : 'colsed-aside'}`}>
      <header>
       <Link onClick={e=> showSearchStartegy(e,false,'')} className="font-bold text-[#333]">
        <i className="fa-solid fa-arrow-left mr-3"></i> 
        <span>Main Menu</span>
       </Link>
      </header>
      <div className="bg-white text-[#222]">
        <ul className={`${searchStrategy === section ? 'block' : 'hidden'}`}>
          <li className=" mb-5">
            <Link to='/search-results/products'>Several Products</Link>
          </li>
          <li className=" mb-5">
            <Link to='/search-results/todays_offers'>Todays Offers</Link>
          </li>
          <li className=" mb-5">
            <Link to='/search-results/pets'>Pets Corner</Link>
          </li>
          <li className=" mb-5">
            <Link to='/search-results/saving_Corner'>Saving Corner</Link>
          </li>
          <li className=" mb-5">
            <Link to='/search-results/hair_devices'>Hair Care</Link>
          </li>
          <li className=" mb-5">
            <Link to='/search-results/consider'> Consider to Corner</Link>
          </li>
          <li className=" mb-5">
            <Link to='/search-results/sports'>Sports & Fitness</Link>
          </li>
        </ul>

        <ul className={`${searchStrategy === brand ? 'block' : 'hidden'}`}>
          <li data-searh-value="#" disabled className='mb-5'>
            <h2 className=" font-bold text-[#333]">Shop By Brand</h2>  
          </li>
          <li className='mb-5'>
            <Link to='/search-results/poma'>
              Poma
            </Link>
          </li>
          <li className='mb-5'>
            <Link to="/search-results/lacoste">
              Lacoste
            </Link>
          </li>
          <li className='mb-5'>
            <Link to="/search-results/toshiba">
              Toshiba
            </Link>
          </li>
          <li className='mb-5'>
            <Link to="/search-results/sharp">
              Sharp
            </Link>
          </li>       
          <li className='mb-5'>
            <Link to="/search-results/D_&_C">
              D & C
            </Link>
          </li>
          <li className='mb-5'>
            <Link to="/search-results/corn">
              Corn
            </Link>
          </li>
          <li className='mb-5'> 
            <Link to="/search-results/black_Roket">
              Black Roket
            </Link>
          </li>
        </ul>


        <ul className={`${searchStrategy === category ? 'block' : 'hidden'}`}>
          <li className='mb-5' data-searh-value="#">
            <h2 className="font-bold text-[#333]">Shop By Category</h2>  
          </li>
          <li className='mb-5'>
            <Link to="/search-results/computers">
              Computers & Software
            </Link>
          </li>
          <li className='mb-5'>
            <Link to="/search-results/mobiles">
              Mobiles & Accessories
            </Link>
          </li>
          <li className='mb-5'>
            <Link to="/search-results/appliaces">
              Amazone Appliaces
            </Link>
          </li>      
          <li className='mb-5'>
            <Link to="/search-results/fashion">
                Fasion & Beauty
            </Link>
          </li>
          <li className='mb-5'>
            <Link to="/search-results/pets">
                Pets Meals
            </Link>
          </li>
          <li className='mb-5'>
            <Link to="/search-results/hair_devices">
                Skin Care
            </Link>
          </li>       
        </ul>

          <article className=" p-6 text-xs lg:text-sm !leading-8">
                Please if you have any suggestion to improve our servcesses , Do not hesitate to inform us to Improve our selvesess and according to clients wishes , Best wishes in Browsing our market.
          </article> 
      </div>
    </div>
  )
}

export default AlterAside