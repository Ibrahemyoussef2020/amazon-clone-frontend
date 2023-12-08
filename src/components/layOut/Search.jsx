import React, { useEffect, useState } from "react";
import {useDispatch , useSelector} from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { fetchData } from "../../apis";
import doesObjectInclude from '../../utilities/doesObjectInclude'
import { toggleSuggegtionsDrop } from "../../redux/slices";


/*const title = 'title',
      section = 'searchAllSections',
      brand  = 'searchAllBrands'; */


const Search = ({smallScreen}) => {
  const [sug , setSug] = useState('')
  const [sugList,setSugsList] = useState([])
  const [selectedValue , setSelectedValue] = useState('')
  const [magnifyingGlassColor , setMagnifyingGlassColor] = useState('text-costum-clr_primary')

  const {suggegtionsFromRedux} =  useSelector(state => state.suggegtions)

 

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{
      fetchData('suggestions' , setSugsList);
  },[sug])


  const handleSug  = (e)=>{
    dispatch(toggleSuggegtionsDrop([...doesObjectInclude(sugList , e.target.value)]))  
    setSug(e.target.value)
  }


  const handleSubmitSelectResults = e =>{
    if (e.target.value === '') {
      navigate('/')
    }
    else{
      navigate(`/search-results/${selectedValue}`)
    }
     dispatch(toggleSuggegtionsDrop([]))
     setMagnifyingGlassColor('text-costum-clr_primary');
  }


  const handleSearchTitle = sugResultId => {
      navigate(`/product-details/searchAllTitles/${sugResultId}`)
      dispatch(toggleSuggegtionsDrop([]))
  }

  const handleChangeSelectResults = (e)=>{
    setSelectedValue(e.target.value)
    setMagnifyingGlassColor('text-green-800 click-on-me');
  }


  return (
    <div className={`search relative flex-1  grow ${ smallScreen ? 'flex' : 'hidden'} ${smallScreen ? 'sm:hidden' : 'sm:flex' } mx-2 justify-between hover:outline outline-4 outline-orange-300  h-[40px] mt-[7px]  rounded-lg`}>
      <div className="search__drop hidden sm:flex  w-[80px] bg-[#ccc] cursor-pointer items-center">
        <select
          name="search"
          id="main-select-drop"
          className="border-none outline-none w-[80px]  bg-transparent text-black text-start cursor-pointer text-xs"
          onChange={e=>handleChangeSelectResults(e)}
        >
          <option value=''>All Parts</option>
          
            <option value="poma">Poma</option>
            <option value="lacoste">Lacoste</option>
            <option value="toshiba">Toshiba</option> 
            <option value="sharp">sharp</option>     
            <option value="D_&_C">D-C-R</option>
            <option value="corn">Corn</option>
            <option value="black_Roket">Black Roket</option>
        
        
            <option value="products" >Our Products</option>
            <option value="todays_offers">Todays Offers</option>
            <option value="pets">Pets Corner</option>
            <option value="saving_corner">Saving corner</option>
            <option value="hair_devices">Hair Corner</option>
            <option value="consider">Consider to</option>
            <option value="sports">Sports Corner</option>
        
        </select>
      </div>

      <input className="search__input block flex-2 grow bg-white text-sm text-[#000] h-[100%] outline-none pr-0" 
      id="main-nav-search_"
      value={sug}
      onChange={handleSug}
      onFocus={_=>dispatch(toggleSuggegtionsDrop(sugList))}
      />

      <button onClick={handleSubmitSelectResults}
      id="handle-selected-items" 
        className=" bg-orange-300  border-none outline-none flex items-center  justify-center  px-2 -ml-2">
        <i className={`fa-solid fa-magnifying-glass fa-lg ${magnifyingGlassColor}`} ></i>
      </button>

      { suggegtionsFromRedux && suggegtionsFromRedux.length ? 
        
        <div  id="select-search-suggestions" className="select-search-suggestions absolute top-[100%] text-black left-0 w-full h-auto z-10 p-2 bg-white text-sm xl:text-base border border-solid border-[#CCC]">
        {
          suggegtionsFromRedux?.map(sugResult => 
              <button key={sugResult.id} onClick={()=> handleSearchTitle(sugResult.id)}  className='search-result block p-1 hover:bg-slate-400 hover:text-white'>{sugResult.title}</button>
          )
        }
        </div>
      : null}

    </div>
  );
};

export default Search;

// onBlur={_=>setSugResults([])}