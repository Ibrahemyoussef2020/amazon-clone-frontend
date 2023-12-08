import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {toggleAside} from "../../redux/slices";


const InitialAside = ({asideData}) => {


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
    <div className={`sub-aside main-aside absolute z-50  p-2`}>
        
    <div className=" bg-white text-[#222] ">
      <ul>
        <h3 className=" font-semibold text-lg text-[#222] mb-6 p-0">
        Trending
        </h3>
        <li className="mb-5 ">
          <Link to='/search-results/highest_rating'>
           Best ratings
          </Link> 
        </li>
        <li className="mb-5 ">
          <Link to="/search-results/sports">
            We Shose for you
          </Link> 
        </li>
      </ul>

      <ul>
        <li className="mb-6">
          <h3 className=" font-semibold text-lg text-[#222] m-0 p-0">
          Famous Shopping  Strategies
          </h3>
        </li>
        <li className="mb-6">
          <Link className="pr-8 !flex justify-between"  onClick={e => showSearchStartegy(e,true,category)}>
          <span>Amazone Shop By Category</span> <i className="fa-solid fa-chevron-right ml-4 text-[#777] relative top-1"></i>
          </Link> 
        </li>
        <li className="mb-6">
          <Link className="pr-8 !flex justify-between"  onClick={e => showSearchStartegy(e,true,brand)}>
          <span>Amazone Shop By Brand</span> <i className="fa-solid fa-chevron-right ml-4 text-[#777] relative top-1"></i>
          </Link> 
        </li>
        <li className="mb-5">
          <Link className="pr-8 !flex justify-between"  onClick={e => showSearchStartegy(e,true,section)}>
          <span>Amazone Shop By Section</span> <i className="fa-solid fa-chevron-right ml-4 text-[#777] relative top-1"></i>
          </Link> 
        </li>   
      </ul>


      <ul>
        <li className="mb-6">
         <h3 className=" font-semibold text-lg text-[#222] m-0 p-0">
          Important products
          </h3>
        </li>
        <li className="mb-5">
          <Link to='/search-results/books'>
           Books
          </Link> 
        </li>
        <li className="mb-5">
          <Link to='/search-results/highest_rating'>
           The heighest ratings
          </Link> 
        </li>
        <li className="mb-5">
          <Link to='/search-results/pets'>
            Pets food corner
          </Link> 
        </li>
      </ul>
      <a to='#' onClick={e=>e.preventDefault()} className="text-xl premium cursor-not-allowed">
        About Amazon Premium
      </a>
    </div>
    </div>
  )
}

export default InitialAside