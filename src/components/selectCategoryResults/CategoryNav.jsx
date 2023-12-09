import { Link } from "react-router-dom"
import { catchCtaegoryDesc } from "../../utilities"
import { useEffect, useState } from "react";








const CategoriesNav = ({selectedValue , fromMethod = 'categories'}) => {
  const [suggestions , setSuggestions] = useState([])


  useEffect(()=>{
    const filter = catchCtaegoryDesc(selectedValue);
    
    setSuggestions([...filter.filters]);

  },[selectedValue])

  return (
    <>
      <ul className="hidden lg:flex !flex-nowrap bg-[#fafafa]">
      {
        suggestions.length ? suggestions
        .filter(suggestion => suggestion.includes(selectedValue) )
        .map(suggestion => {
          const visibleSuggestion = suggestion.split('_').join(' ');

          return <li key={suggestion} className={`relative  font-medium border-solid ${fromMethod === 'categories' ? 'border-[#f90]  border-b-2' : ''} top-[1px] text-[#333] hover:text[#e47911] hover:border-b-2 hover:border-solid hover:border-[#f90] text-[13px]`}>
            <Link to={`/search-results/${suggestion.split(' ')[0]}`} className="block py-1 px-2 lg:px-3 leading-8">
                  {visibleSuggestion[0]?.toUpperCase()}{visibleSuggestion.slice(1)}
            </Link>
          </li>
        })
     : null }
      {
        suggestions.length ? suggestions
        .filter(suggestion => !suggestion.includes(selectedValue) )
        .map(suggestion => {
          const visibleSuggestion = suggestion.split('_').join(' ');


          return <li key={suggestion} className={`relative top-[1px] text-[#333] hover:text[#e47911] hover:border-b-2 hover:border-solid hover:border-[#f90] text-[13px]`}>
            <Link to={`/search-results/${suggestion.split(' ')[0]}`} className="block py-1 px-2 lg:px-3 leading-8">
            {visibleSuggestion[0]?.toUpperCase()}{visibleSuggestion.slice(1)}
            </Link>
          </li>
        })
     : null }
    </ul>


    {/******************    mobile   **************** */}

    <div className="lg:hidden flex-1 nav__categories bg-[#364759] text-[12px] text-white flex items-center  py-3 px-2">
    <i className="fa-solid fa-location-dot"></i>
    <span className="ml-1">Deliver to Egypt</span>
    <i className="fa-solid fa-angle-down text-sm text-gray-600"></i>
    </div>
    </>

  )
}

export default CategoriesNav

/*
<nav className="py-2 pl-4 pr-4 sm:pr-12 flex gap-3 justify-between">
      <label className="block">
          <input
            onChange={e => handleFiletr(e,true,true)} 
            type="checkbox" 
            id="premium_offer" 
            name="premium_offer" 
            value="premium_offer"
            checked={lastCheckbox["premium_offer"]}
            className="no-check-box"       
            /> 
          <span className={`${lastCheckbox["premium_offer"] ? 'selected' : ''}`}>
            <span className=" hidden sm:inline">Amazone_</span>Premium_Offer
          </span>
      </label>

      <label className="block">
          <input
            onChange={e => handleFiletr(e,true,true)} 
            type="checkbox" 
            id="to_home" 
            name="to_home" 
            value="to_home"
            checked={lastCheckbox["to_home"]}
            className="no-check-box"       
            /> 
          <span className={`${lastCheckbox["to_home"] ? 'selected' : ''}`}>
          Home_delivery<span className=" hidden sm:inline">_Offer</span>
          </span>
      </label>

      <label className="block">
          <input
            onChange={e => handleFiletr(e,true,true)} 
            type="checkbox" 
            id="has_discount" 
            name="has_discount" 
            value="has_discount"
            checked={lastCheckbox["has_discount"]}
            className="no-check-box"       
            /> 
          <span className={`${lastCheckbox["has_discount"] ? 'selected' : ''}`}>
          <span className=" hidden sm:inline">Products_</span>has_Discount
          </span>
      </label>
    </nav>
*/