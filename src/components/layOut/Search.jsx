import React, { useEffect, useState } from "react";
import {useDispatch , useSelector} from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { fetchData } from "../../apis";
import IsObjectIncludes from '../../utilities/IsObjectIncludes'
import { toggleSuggegtionsDrop } from "../../redux/slices";


const title = 'title',
      section = 'searchAllSections',
      brand  = 'searchAllBrands';


const Search = () => {
  const [sug , setSug] = useState('')
  const [sugList,setSugsList] = useState([])
  const [selectSearchBy , setSelectSearchBy] = useState('')
  const [selectedValue , setSelectedValue] = useState('')
  const [magnifyingGlassColor , setMagnifyingGlassColor] = useState('text-costum-clr_primary')

  const {suggegtionsFromRedux} =  useSelector(state => state.suggegtions)

 

  const navigate = useNavigate()
  const dispatch = useDispatch()

  console.log(suggegtionsFromRedux);

  useEffect(()=>{
      fetchData('suggestions' , setSugsList);
  },[])


  const handleSug  = (e)=>{
    dispatch(toggleSuggegtionsDrop([...IsObjectIncludes(sugList , e.target.value)]))  
    setSug(e.target.value)
  }


  const handleSubmitSelectResults = _=>{
    if (selectSearchBy !== null &&   selectedValue !== '') {
      navigate(`search-results/${selectSearchBy}` , {replace:true, state:selectedValue})
    }
    else{
      navigate('/')
    }
     dispatch(toggleSuggegtionsDrop([]))
     setMagnifyingGlassColor('text-costum-clr_primary');
  }


  const handleSearchTitle = sugResultId => {
      navigate(`product-details/searchAllTitles/${sugResultId}`)
      dispatch(toggleSuggegtionsDrop([]))
  }

  const handleChangeSelectResults = (e)=>{
    setSelectSearchBy(e.target.options[e.target.selectedIndex].getAttribute('data-searh-by'));
    setSelectedValue(e.target.value)
    setMagnifyingGlassColor('text-green-800 click-on-me');
  }




  return (
    <div className="search relative flex-1 grow mx-3 hidden sm:flex  hover:outline outline-4 outline-orange-300  h-[40px] mt-[7px]   rounded-md">
      <div className="search__drop w-[80px] bg-[#ccc] cursor-pointer flex items-center">
        <select
          name="search"
          id="search"
          className="border-none outline-none px-2 w-[80px]  bg-transparent text-black text-start cursor-pointer text-xs"
          onChange={e=>handleChangeSelectResults(e)}
        >
          <optgroup>
            <option value="" data-searh-by="">All categories</option>
            <option value="#" disabled>
              By Section
            </option>
            <option value="Devices" data-searh-by={section} >Devices</option>
            <option value="Pets" data-searh-by={section} >Pets</option>
            <option value="Sports" data-searh-by={section} >Sports</option>
            <option value="Beauty" data-searh-by={section} >Beaty</option>
          </optgroup>

          <optgroup>
            <option value="#" disabled>
              By Brand
            </option>
            <option value="Poma" data-searh-by={brand}>Poma</option>
            <option value="Lacoste" data-searh-by={brand} >Lacoste</option>
            <option value="Toshiba" data-searh-by={brand} >Toshiba</option>      
            <option value="D-C-R" data-searh-by={brand} >D-C-R</option>
          </optgroup>
        </select>
      </div>

      <input className="search__input block flex-2 grow bg-white text-sm text-[#000] h-[100%] outline-none pr-0" 
      
      value={sug}
      onChange={handleSug}
      onFocus={_=>dispatch(toggleSuggegtionsDrop(sugList))}
      />

      <button onClick={handleSubmitSelectResults} className=" bg-orange-300  border-none outline-none flex items-center  justify-center  px-2 -ml-2">
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