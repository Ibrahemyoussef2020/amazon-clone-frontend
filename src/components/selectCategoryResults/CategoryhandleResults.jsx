import { Link } from "react-router-dom"

import {
  ascending,
    descending,
    heighestPrice,
} from '../../utilities/sortLists'
import { useState } from "react"



const CategoryhandleResults = ({selectedValue,productsLenght,reSortLists,isSelectParentClicked,setIsSelectParentClicked,isMobileFilterOppen,setIsMobileFilterOppen,setClear}) => {
  const [sortStartegy,setSortStartegy] = useState({
      isActive:false,
      isDropped:false,
      selectedStrategy:'Featured',  
  })
    
    const [value,setValue] = useState('')
    const [prop,setProp] = useState('')

    const handleSortStrategy = (e, hierarchy, prop)=>{
      const {isActive,isDropped} = sortStartegy;

      reSortLists(e, hierarchy, prop)

      const newSortStrategy = {
          isActive : true,
          isDropped:false,
          selectedStrategy:e.target.innerText
      }

      setSortStartegy(newSortStrategy)
      setIsSelectParentClicked(true)
    }


    const handleSelectDrop = ()=>{
      const {isActive,isDropped,selectedStrategy} = sortStartegy;
      const newSortStrategy = {
        isActive : !isActive,
        isDropped:!isDropped,
        selectedStrategy
      }

      setSortStartegy(newSortStrategy)
    }

    const handleMobileFilterToggle = ()=>{
      if (isMobileFilterOppen) {
        setClear(clear => !clear)
      }
      setIsMobileFilterOppen(!isMobileFilterOppen)
    }

  return (
    <>
    <div 
      className='handle-category-results h-[3rem] items-center bg-white flex  gap-3 justify-between pl-2 sm:pl-4 pr-3' >
      <p>
         <span className={` font-bold ${productsLenght > 0 ? ' text-green-400' : ' text-red-600'}`}>{productsLenght}</span> results for<span className=' font-semibold text-[#c45500] ml-2'>"{ selectedValue || 'Your search' }"</span>
      </p>

      <div className="relative hidden md:block select-control">
        <button
          onClick={handleSelectDrop} 
          className={`select-control text-sm relative text-[#0F1111] z-10 px-2 rounded-md border-solid border-2 hover:bg-[#eee] ${ sortStartegy.isActive && isSelectParentClicked ? 'border-[#007185] bg-[#EDFDFF]' : 'bg-[#eee] shadow'}`}>
          sort by: {sortStartegy.selectedStrategy}
        </button>

        <ul className={`select-control absolute -top-2 right-0  pt-2  z-20 w-[170px] bg-white border-solid rounded-t-xl border-2 border-[#D5D9D9] sorted ${sortStartegy.isDropped && isSelectParentClicked ? 'sorted-dropped' : 'sorted-not-dropped'} `}>
        <li className="select-control mb-2 pl-2 border-solid border-[1px] border-[#007185] bg-[#EDFDFF]">
          <button className="w-[100%] text-left " 
          onClick={handleSelectDrop}>
            Featured
          </button>
        </li>

        <li className=" mb-1 pl-2 select-control">
          <Link onClick={e => handleSortStrategy(e, ascending, 'price')}>
            Price: heigh to Low
          </Link>
        </li>
        <li className="mb-1 pl-2 select-control">
          <Link onClick={e => handleSortStrategy(e, descending, 'price')}>
            Price: Low to heigh
          </Link>
        </li>

        <li className="mb-1 pl-2 select-control">
          <Link onClick={e => handleSortStrategy(e, ascending, 'avgRating')}>
            Avg.Customer Review
          </Link>
        </li>
        
        <li className="mb-1 pl-2 select-control">
          <Link onClick={e => handleSortStrategy(e, ascending, 'latest')}>
            Newest  Arrivals
          </Link>
        </li>  
      </ul>
      </div>  
        <button 
          onClick={handleMobileFilterToggle}
          className="md:hidden border-l-[2px] border-solid border-[#ddd] h-[100%] pl-2">
          <span className="mr-[2px]">Filters (5)</span>
          {
            isMobileFilterOppen ?
            <i className="fa-solid fa-angle-up"></i>:
            <i className="fa-solid fa-angle-down"></i>
          } 
          
        </button>
    </div>
    </>
  )
}

export default CategoryhandleResults