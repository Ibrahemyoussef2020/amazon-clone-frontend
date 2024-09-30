import { Link } from "react-router-dom"


import {
  ascending,
  descending,
  heighestPrice,
} from '../../utilities/sortLists'

import { catchCtaegoryDesc } from "../../utilities"
import { createRef, useEffect, useRef, useState } from "react"
import { useSelector , useDispatch } from "react-redux"
import { toggleMobileFilterSuggegtionsDrop } from "../../redux/slices"

let multipleStrings = []


const CategoryMobileAside = ({ handleFilter, reSortLists, selectedValue, constantList , setProducts ,isMobileFilterOppen ,setIsMobileFilterOppen,clear ,setClear}) => {
        const  [sug, setSug] = useState('');
        const [sugList , setSugList] = useState([]);
        const [productsColor, setProductsColor] = useState([])
        const [productsBrand, setProductsBrand] = useState([])
        const [productsType, setProductsType] = useState([])
      
        const [selectedType,setSelectedType] = useState('')
        const [filtersDrop,setFiltrsDrop] = useState({
          'booleans':true,       
          'rating':true,
          'brand':true,
          'color':true,
          'sort':true
        })

        const [sortStartegy,setSortStartegy] = useState({
          isActive:false,
          isDropped:false,
          selectedStrategy:'Featured',  
      })

        const dispatch = useDispatch()
        const {mobileFilterSuggegtions} = useSelector(state => state.suggegtionsMobileFilter)
        const clearSearchRef = createRef()

        useEffect(()=>{
            const colors = new Set(constantList.map(product => product.color))
            setProductsColor([...colors])
        
            const brands = new Set(constantList.map(product => product.brand))
            setProductsBrand([...brands])
        
            const types = new Set(constantList.map(product => product.type))
            setProductsType([...types])

            setSugList([...brands,...types])   
            
            if (!isMobileFilterOppen) {
              
              clearSearchRef.current.focus()
              clearSearchRef.current.select()
            }

          },[selectedValue,constantList,multipleStrings,sug,isMobileFilterOppen])


        /************** mobile filter  ****************** */  

        const handleSearchFilterMobile = (e)=>{

          let searchedProduct;

          let filter = e.target.getAttribute('data-name');

          if(e.target.getAttribute('data-type') === 'clear'){
            setClear(true)
            searchedProduct  = constantList;
            console.log('hhh');
            return true
          }
          else{
            setClear(false)
            if (e.target.getAttribute('data-type') === 'boolean') {
              
              searchedProduct = constantList.filter(item => item[filter] === e.target.checked);
            }
            else if (e.target.getAttribute('data-type') === 'number'){
              
              searchedProduct = constantList.filter(item => item[filter] >= e.target.value);

            }
            else if (e.target.getAttribute('data-type') === 'string'){

              searchedProduct = constantList.filter(item => item[filter] === e.target.value)
            }

            setProducts(searchedProduct)
          }
          
        }

        /*****  search methods ********** */
  

        const handleSug = (e)=>{

          if (e.target.value === '') {

              dispatch(toggleMobileFilterSuggegtionsDrop([]))

              setSug(e.target.value)
          }
          else{
            const newSuggegtions = sugList.filter(suggegtion => suggegtion.includes(sug))

            dispatch(toggleMobileFilterSuggegtionsDrop([...newSuggegtions]))
   
            setSug(e.target.value)
          }
         
        }


        /**********************  close aseide  ******************** */


        function handleClose(){
          setIsMobileFilterOppen(false)
          setClear(true)
          setProducts(constantList)
        }


        /********************  sort  ************************* */

        const handleSortStrategy = (e, hierarchy, prop)=>{
          const {isActive,isDropped} = sortStartegy;
    
          reSortLists(e, hierarchy, prop)
    
          const newSortStrategy = {
              isActive : true,
              isDropped:false,
              selectedStrategy:e.target.innerText
          }
    
          setSortStartegy(newSortStrategy)
          //setIsSelectParentClicked(true)
        }

        /***************** Filter Drop ******************** */

        const handleFilterDrop = (e)=>{
          
          let drop;
          if (e.target.classList.contains('btn-drop')) {
            drop = e.target;
          }else if (e.target.parentElement.classList.contains('btn-drop')) {
            drop = e.target.parentElement
          }else if (e.target.parentElement.parentElement.classList.contains('btn-drop')) {
            drop = e.target.parentElement.parentElement
          }

          const value = drop.id;
          const newFiltersDrop = {
            ...filtersDrop,
             [value]:!filtersDrop[value]
          }

          setFiltrsDrop(newFiltersDrop)

        }

        

        /********* dom ******* */

  return (
    <div className={`md:hidden pb-8 font-medium border-solid border-y-[1px] border-[#999] text-[F0] bg-white absolute top-[50vh] min-h-[50vh] z-50 left-0 right-0 mobile-filter  ${isMobileFilterOppen ? 'oppend-mobile-filter' : 'closed-mobile-filter'}`}>

      <div className={`relative no-check-shape flex gap-3 p-4  border-solid  border-b-[1px] border-[#9e9e9e47]`}>
          <input 
                type="text"
                value={sug}
                className="block grow z-20 flex-1 outline-none border border-solid pl-8 border-[#222] rounded"
                id="clear-Sear-chRef"
                onChange={handleSug}
                ref={clearSearchRef}
              />
              <button onClick={handleClose} className="z-20">
                Close
              </button>
              <ul className=" absolute top-[50px] left-0 right-0 px-4 bg-white z-10">

              {mobileFilterSuggegtions.length ?
                <label className="block mb-4 mt-3 pl-2  ml-2">
                    <input
                        onChange={handleSearchFilterMobile} 
                        type="radio"
                        data-type="clear" 
                        name="mobile-filter"
                        data-name ='clear' 
                        value='all'
                        checked={clear}
                        // data-values={multipleStrings}
                        />
                    <span> Show All</span>
                </label> : null}
              {
                mobileFilterSuggegtions.length ?
                mobileFilterSuggegtions?.map((sug,index )=>{               
                          
              return <li key={sug +''+ index} className="mb-1 p-2">
                          
                          {productsBrand.includes(sug) ?

                          <label key={sug + '' + index} className="block mb-2 pl-3">
                              <input
                                  onChange={handleSearchFilterMobile} 
                                  type="radio"
                                  data-type='string' 
                                  name="mobile-filter"
                                  data-name ='brand' 
                                  value={sug}
                                  />
                              <span>{sug[0].toUpperCase()}{sug.slice(1)}</span>
                          </label>

                          : productsType.includes(sug) &&
                          <label key={sug +''+ index} className="block no-check-shape pl-3">
                          <input
                              onChange={handleSearchFilterMobile} 
                              type="radio" 
                              name="search"
                              data-name ='type' 
                              value={sug}
                              />
                          <span>{sug}</span>
                          </label> 
                      }                                 
                      </li>       
                  })
            : null }
              </ul>
      </div>

      <div className={`boolean-filters px-4 sm:px-8 py-4 border-b-[1px] border-[#9e9e9e47]`}>
        <button className="mb-4 !w-[100%] btn-drop" 
        id="booleans"
          onClick={handleFilterDrop}
        >
          <h2 className="flex justify-between">
            <span>Prime and delivery</span>
            <i className={`inline-block fa-solid ${ filtersDrop['booleans'] ? 'fa-angle-up' : 'fa-angle-down'} sm:mr-8`}></i>      
          </h2>
        </button>
        <div className={`mobile-filter overflow-hidden ${filtersDrop['booleans'] ? 'with-height' : 'without-height'}`}>
          <h3 className=" mb-4 text-lg">
            Delivery options
          </h3>
          <label className="py-2 px-3 flex items-center w-fit_content bg-[#9e9e9e47] rounded-xl  no-check-shape">
              <input
              onChange={handleSearchFilterMobile}
              type="radio"
              data-type="boolean"
              id="free_delivery"
              name="mobile-filter"
              data-name="free_delivery"
              value="free_delivery"
            />

            <img loading="lazy" src="/images/amazone-small-arrow.webp" alt="" className="w-[15px] h-[10px] -mb-2" />
            <span className=" text-lg pl-2">|</span>
            <span className="pl-1 mt-1"> Fulfield by Amazone</span>  
          </label>

          <p className="text-sm  font-medium mt-5 mb-2">
            All Custmors get FREE Shipping on orders on shipped by Amazone
          </p>

          <label className="pt-2 pb-3 px-3 flex items-center w-fit_content bg-[#9e9e9e47] rounded-xl  no-check-shape">
              <input
              onChange={handleSearchFilterMobile}
              type="radio"
              data-type="boolean"
              id="premium_offer"
              name="mobile-filter"
              data-name="free_delivery"
              value="free_delivery"
            />

            <span className="pl-1 mt-1"> Free Shipping</span>  
          </label>
        </div>
      </div>
      
      <div className={` ratings px-4 sm:px-8 py-4 border-b-[1px] border-[#9e9e9e47]`}>
          <button className="mb-4 !w-[100%] btn-drop" id="rating"
            onClick={handleFilterDrop}
          >
            <h2 className="flex justify-between">
              <span>Avg.Customer Review</span>
              <i className={`inline-block fa-solid ${ filtersDrop['rating'] ? 'fa-angle-up' : 'fa-angle-down'} sm:mr-8`}></i>      
            </h2>
          </button>
          <div className={`mobile-filter overflow-hidden ${filtersDrop['rating'] ? 'with-height' : 'without-height'}`}>
            <label className="flex no-check-shape mb-3">
              <input
                onChange={handleSearchFilterMobile}
                type="radio"
                data-type="number"
                id="equal-bigger-5"
                name="mobile-filter"
                data-name="avgRating"
                value="5"
              />
              <span>
                <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
                <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
                <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
                <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
                <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
              </span>
              <span className=" ml-2  a-size-small"> Only</span>
            </label>


            <label className="flex no-check-shape mb-3">
              <input
                onChange={handleSearchFilterMobile}
                type="radio"
                data-type="number"
                id="equal-bigger-4"
                name="mobile-filter"
                data-name="avgRating"
                value="4"
              />
              <span> 
                <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
                <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
                <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
                <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
                <i className="fa-regular fa-star fa-lg text-[#ffa41c]"></i> 
              </span>
              <span className=" ml-2  a-size-small">& Up</span>
            </label>

            <label className="flex no-check-shape mb-3">
              <input
                onChange={handleSearchFilterMobile}
                type="radio"
                data-type="number"
                id="equal-bigger-3"
                name="mobile-filter"
                data-name="avgRating"
                value="3"
              />
              <span> 
                <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
                <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
                <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
                <i className="fa-regular fa-star fa-lg text-[#ffa41c]"></i> 
                <i className="fa-regular fa-star fa-lg text-[#ffa41c]"></i> 
              </span>
              <span className=" ml-2  a-size-small">& Up</span>
            </label>

            <label className="flex no-check-shape mb-3">
              <input
                onChange={handleSearchFilterMobile}
                type="radio"
                data-type="number"
                id="equal-bigger-2"
                name="mobile-filter"
                data-name="avgRating"
                value="2"
              />
              <span> 
                <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
                <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
                <i className="fa-regular fa-star fa-lg text-[#ffa41c]"></i> 
                <i className="fa-regular fa-star fa-lg text-[#ffa41c]"></i> 
                <i className="fa-regular fa-star fa-lg text-[#ffa41c]"></i> 
              </span>
              <span className=" ml-2  a-size-small">& Up</span>
            </label>

            <label className="flex no-check-shape mb-3">
              <input
                onChange={handleSearchFilterMobile}
                type="radio"
                data-type="number"
                id="equal-bigger-1"
                name="mobile-filter"
                data-name="avgRating"
                value="1"
              />
              <span> 
                <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
                <i className="fa-regular fa-star fa-lg text-[#ffa41c]"></i> 
                <i className="fa-regular fa-star fa-lg text-[#ffa41c]"></i> 
                <i className="fa-regular fa-star fa-lg text-[#ffa41c]"></i> 
                <i className="fa-regular fa-star fa-lg text-[#ffa41c]"></i> 
              </span>
              <span className=" ml-2  a-size-small">& Up</span>
            </label>
          </div>          
      </div>

      <div className={`brands px-4 sm:px-8 py-4 border-b-[1px] border-[#9e9e9e47]`}>
        <button className="mb-4 !w-[100%] btn-drop" id="brand"
          onClick={handleFilterDrop}
        >
          <h2 className="flex justify-between">
            <span>Brands</span>
            <i className={`inline-block fa-solid ${ filtersDrop['brand'] ? 'fa-angle-up' : 'fa-angle-down'} sm:mr-8`}></i>      
          </h2>
        </button>
        <div className={`mobile-filter overflow-hidden flex ${filtersDrop['brand'] ? 'with-height' : 'without-height'} `}>
        {
          productsBrand.map((brand,index) => {
              return <label key={brand + '' + index} className="py-2 px-3 flex items-center w-fit_content bg-[#9e9e9e47] m-1 rounded-xl  no-check-shape">
              <input
                onChange={handleSearchFilterMobile} 
                type="radio"
                data-type="string" 
                name="mobile-filter"
                data-name="brand" 
                value={brand}
                data-values={multipleStrings}
                />
              <span>{brand[0].toUpperCase()}{brand.slice(1)}</span>
            </label>
          }  
        )
        }
        </div>              
      </div>

      <div className={`colors px-4 sm:px-8 pt-4 pb-8 border-b-[1px] border-[#9e9e9e47]`}>
        <button className="mb-4 !w-[100%] btn-drop" id="color"
          onClick={handleFilterDrop}
        >
          <h2 className="flex justify-between">
            <span>Colors</span>
            <i className={`inline-block fa-solid ${ filtersDrop['color'] ? 'fa-angle-up' : 'fa-angle-down'} sm:mr-8`}></i>      
          </h2>
        </button>
        <div className={`mobile-filter overflow-hidden flex gap-x-2 gap-y-4 ${filtersDrop['color'] ? 'with-height' : 'without-height'}`}>
          { 
          productsColor?.length ?
          productsColor
          .map((color,index) =>{
                return <label key={color + ''+ index} className={`relative inline-block w-[60px] h-[50px] rounded-xl  hover:outline outline-[1px] outline-blue-400 no-check-shape pl-3 border-solid border-[1px] border-[#ccc]`} style={{background:color}}>
                <input
                  onChange={handleSearchFilterMobile} 
                  type="radio"
                  data-type="string" 
                  name="mobile-filter" 
                  data-name="color" 
                  value={color}
                  />
                <i className={`selected-color fa-solid fa-check ${color === '#fff' || color === 'white' ? 'text-slate-500' : 'text-white'} absolute bottom-2 right-2`}></i>
              </label>
              }
            )   
         : null } 
        </div>              
      </div> 

      <div className={`sort px-4 sm:px-8 pt-4`}>
        <button className="mb-4 !w-[100%] btn-drop" id="sort"
          onClick={handleFilterDrop}
        >
          <h2 className="flex justify-between">
            <span>Sort Categories</span>
            <i className={`inline-block fa-solid ${ filtersDrop['sort'] ? 'fa-angle-up' : 'fa-angle-down'} sm:mr-8`}></i>      
          </h2>
        </button>
        <div className={`mobile-filter overflow-hidden ${filtersDrop['sort'] ? 'with-height' : 'without-height'}`}>
          <ul className="flex gap-4">
            <li className=" flex items-center w-fit_content bg-[#9e9e9e47] rounded-xl">
              <Link onClick={e => handleSortStrategy(e, ascending, 'price')}
              className="py-2 px-3"
              >
                Price: heigh to Low
              </Link>
            </li>
            <li className="flex items-center w-fit_content bg-[#9e9e9e47] rounded-xl">
              <Link onClick={e => handleSortStrategy(e, descending, 'price')}
                className="py-2 px-3"
              >
                Price: Low to heigh
              </Link>
            </li>

            <li className="flex items-center w-fit_content bg-[#9e9e9e47] rounded-xl">
              <Link onClick={e => handleSortStrategy(e, ascending, 'avgRating')}
                className="py-2 px-3"
              >
                Avg.Customer Review
              </Link>
            </li>
            
            <li className="flex items-center w-fit_content bg-[#9e9e9e47] rounded-xl">
              <Link onClick={e => handleSortStrategy(e, ascending, 'latest')}
                className="py-2 px-3"
              >
                Newest  Arrivals
              </Link>
            </li>
          </ul>
        </div>
      </div> 

    </div>
  )
}

export default CategoryMobileAside