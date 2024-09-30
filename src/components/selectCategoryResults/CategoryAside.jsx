import { Link } from "react-router-dom"

import {
  ascending,
  descending,
  heighestPrice,
} from '../../utilities/sortLists'

import { catchCtaegoryDesc } from "../../utilities"
import { useEffect, useRef, useState } from "react"



let multipleStrings = [];

const CategoriesAside = ({ handleFilter, reSortLists, selectedValue, constantList , setProducts , pcClear , setPcClear}) => {

  const [productsColor, setProductsColor] = useState([])
  const [productsBrand, setProductsBrand] = useState([])
  const [productsType, setProductsType] = useState([])

  const [selectedType,setSelectedType] = useState('')

  const ref_premium_offer = useRef()
  const ref_free_delivery = useRef()
  const ref_to_home = useRef()

  const ref_typeEls = useRef([])
  const ref_ratingEls = useRef([])
  const ref_brandEls = useRef([])
  const ref_colorEls = useRef([])
  


  useEffect(()=>{
    const colors = new Set(constantList.map(product => product.color))
    setProductsColor([...colors])

    const brands = new Set(constantList.map(product => product.brand))
    setProductsBrand([...brands])

    const types = new Set(constantList.map(product => product.type))
    setProductsType([...types])

    setTimeout(()=> handleClearFilters(),0)

  },[selectedValue,constantList,multipleStrings,pcClear])


    const handleBooleanValues = (e) => {
      handleFilter({
        prop: e.target.name,
        checked: e.target.checked,
        type: 'boolean',
        filterFn:(product,filter) => product[e.target.name] === filter.checked
      }, e.target.checked)

      setPcClear(false)
    }

    const handleRadioValues = (e) => {
      
      if (e.target.name === 'type') {
        setSelectedType(e.target.value)
      }

     const isNumber = +e.target.value == e.target.value 

      handleFilter({
        prop: e.target.name,
        value: e.target.value,
        checked: e.target.checked,
        type: 'custom',
        filterFn: (item) => isNumber ? item[e.target.name] >= e.target.value : item[e.target.name] === e.target.value ,
      }, true)

      setPcClear(false)
    }


    const handleStringValues = (e)=>{

      if (e.target.checked) {
   
        multipleStrings =  [...multipleStrings,e.target.value]
      }
      else{
        multipleStrings = multipleStrings.filter(string => string !== e.target.value)
      }

        handleFilter({
            prop: e.target.name,
            checked: e.target.checked,
            type: 'list',
            values: multipleStrings,
            filterFn:(product,filter) => filter.values.includes(product[e.target.name]),
        } , e.target.checked)

        setPcClear(false)
  }



  const handleRemoveFilter = (filter)=>{
        if (filter === 'premium_offer') {
          ref_premium_offer.current.checked = false; 
        }
        else if (filter === 'free_delivery') {
          ref_free_delivery.current.checked = false; 
        }
        else if (filter === 'to_home') {
          ref_to_home.current.checked = false; 
        }
        else {

        const curentRef = filter === 'type' ?  ref_typeEls
        : filter === 'avgRating' ? ref_ratingEls
        : filter === 'brand' ? ref_brandEls
        : filter === 'color' ? ref_colorEls
        : null

        if (curentRef) { 
            curentRef.current.map(ref => ref.checked = false)
        }
        setPcClear(false)
    }

    handleFilter({
      prop:filter,
      checked:true,
      type: 'remove-filter',
      value:null,
    } , true)

    setPcClear(false)
  }

  function handleClearFilters(){
    if (pcClear) {
      ref_premium_offer.current.checked = false;
      ref_free_delivery.current.checked = false;
      ref_to_home.current.checked = false;

      console.log(ref_typeEls.current);
      
      ref_typeEls.current.filter(ref => ref !== null)
      .map(ref => ref.checked = false)
      ref_ratingEls.current.filter(ref => ref !== null)
      .map(ref => ref.checked = false)
      ref_brandEls.current.filter(ref => ref !== null)
      .map(ref => ref.checked = false)
      ref_colorEls.current.filter(ref => ref !== null)
      .map(ref => ref.checked = false)

      handleFilter({
        prop:null,
        checked:true,
        type: 'clear',
        value: null,
      } , true)
    }
  }



 

  return (
    <aside className="p-2 pl-4 max-w-[245px] hidden md:block">

      <div className="mb-3">
        <h2 className=" font-semibold ">Enabled in Premium</h2>
          <button className="clear pt-1" onClick={_=> handleRemoveFilter('premium_offer')}>
            <i className="fa-solid fa-angle-left"></i> <span>Clear</span> 
          </button>
        <label className="flex items-baseline">
          <input
            onChange={handleBooleanValues}
            type="checkbox"
            id="premium_offer"
            name="premium_offer"
            value="premium_offer"
            ref={ref_premium_offer}
          />
          <span className={`ml-2 mr-1`}>
            <img loading="lazy" src="/images/amazone-small-arrow.webp" alt=""  className="w-[15px] h-[10px] -mb-2"/>
          </span>
          <span className={`label__sub-title ml-1`}>
           |  Enabled in Premium          
          </span>
        </label>
      </div>


      <div className="mb-3">
        <h2 className="font-semibold">Eligible for Free Shipping</h2>
        <button className="clear pt-1" onClick={_=> handleRemoveFilter('free_delivery')}>
          <i className="fa-solid fa-angle-left"></i> <span>Clear</span> 
        </button>
        <label>
          <input
            onChange={handleBooleanValues}
            type="checkbox"
            id="free_delivery"
            name="free_delivery"
            value="free_delivery"
            ref={ref_free_delivery}
          />
          <span className={`label__sub-title ml-2`}>
            Free delivery
          </span>
          <br/>
          <span>
            All customers get FREE Shipping on orders shipped by Amazon
          </span>
        </label>
      </div>


      <div className="mb-5">
        <h2 className=" font-semibold ">Delivery Home</h2>
        <button className="clear pt-1"  onClick={_=> handleRemoveFilter('to_home')}>
          <i className="fa-solid fa-angle-left"></i> <span>Clear</span> 
        </button>
        <label>
          <input
            onChange={handleBooleanValues}
            type="checkbox"
            id="to_home"
            name="to_home"
            value="to_home"
            ref={ref_to_home}
          />
          <span className={`label__sub-title ml-2`}>
            Git it to Home
          </span>
        </label>
      </div>

      {/***********************  category  ************************** */}

      <div className="mb-8">
        <h2 className=" font-semibold mb-2 ">Category</h2>
        <h3 className="ml-1 font-semibold ">
          <i className="fa-solid fa-angle-left"></i> <span>{selectedValue}</span> 
        </h3>
        {
          selectedType !== '' && <h4 className="ml-3 font-semibold ">
          <i className="fa-solid fa-angle-left"></i> <span>{selectedType}</span> 
        </h4>
        }
        <button className="clear pt-1 ml-3" onClick={_=> handleRemoveFilter('type')}>
          <i className="fa-solid fa-angle-left"></i> <span>Clear</span> 
        </button>
        {
        productsType?.length ? 
        productsType?.filter(type => !multipleStrings.includes(type))  
        .map((type,index) => 
            <label key={type +''+ index} className="block no-check-shape pl-3">
              <input
                onChange={handleRadioValues} 
                type="radio" 
                name="type" 
                value={type}
                data-values={multipleStrings}
                ref={(el) => (ref_typeEls.current[index] = el)}
                />
              <span>{selectedValue.slice(0,-1)} a {type}</span>
            </label>
          
          )
          :
          <div>
            <h2 className="mt-2 mb-1">
              {catchCtaegoryDesc(selectedValue).title}
            </h2>
  
            <p className="text-sm  mb-5">
              {catchCtaegoryDesc(selectedValue).desc}
            </p>
          </div>
      }
      </div>

  {/******************  rating  ************************* */}


      <div className="mb-8 filter-rating">
        <h2 className="a-size-base font-semibold mb-3 ">Avg. Customer Review</h2>
        <button className="clear pt-1" onClick={_=> handleRemoveFilter('avgRating')}>
          <i className="fa-solid fa-angle-left"></i> <span>Clear</span> 
        </button>
        <label className="flex no-check-shape mb-3">
          <input
            onChange={handleRadioValues}
            type="radio"
            id="equal-bigger-5"
            name="avgRating"
            value="5"
            ref={(el) => (ref_brandEls.current[5] = el)}
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
            onChange={handleRadioValues}
            type="radio"
            id="equal-bigger-4"
            name="avgRating"
            value="4"
            ref={(el) => (ref_brandEls.current[4] = el)}
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
            onChange={handleRadioValues}
            type="radio"
            id="equal-bigger-3"
            name="avgRating"
            value="3"
            ref={(el) => (ref_brandEls.current[3] = el)}
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
            onChange={handleRadioValues}
            type="radio"
            id="equal-bigger-2"
            name="avgRating"
            value="2"
            ref={(el) => (ref_brandEls.current[2] = el)}
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
            onChange={handleRadioValues}
            type="radio"
            id="equal-bigger-1"
            name="avgRating"
            value="1"
            ref={(el) => (ref_brandEls.current[1] = el)}
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


       {/******************  brand  ************************* */}

      
      <div className="filter-brands mb-8">
        <h2 className=" font-semibold mb-2 ">Brand</h2>
        <button className="clear pb-2"  onClick={_=> handleRemoveFilter('brand')}>
          <i className="fa-solid fa-angle-left"></i> <span>Clear</span> 
        </button>
        {
          productsBrand.map((brand,index) => {
              return <label key={brand + '' + index} className="block mb-2 pl-3">
              <input
                onChange={handleStringValues} 
                type="checkbox" 
                name="brand" 
                value={brand}
                data-values={multipleStrings}
                ref={(el) => (ref_brandEls.current[index] = el)}
                />
              <span>{brand[0].toUpperCase()}{brand.slice(1)}</span>
            </label>
          }  
        )
        }
      </div>


    {/***********************  color  ************************** */}

      <div className="mb-8">
        <h2 className=" font-semibold mb-2 ">Color</h2>
        <button className="clear pt-1 mb-1 ml-3" onClick={_=> handleRemoveFilter('color')}>
          <i className="fa-solid fa-angle-left"></i> <span>Clear</span> 
        </button>
        <div className="flex gap-1">
        { 
        productsColor?.length && 
        productsColor
        .map((color,index) =>{
              return <label key={color + ''+ index} className={` relative inline-block w-[24px] h-[21px] rounded  hover:outline outline-[1px] outline-blue-400 no-check-shape pl-3 border-solid border-[1px] border-[#ccc]`} style={{background:color}}>
              <input
                onChange={handleRadioValues} 
                type="radio" 
                name="color" 
                value={color}
                ref={(el) => (ref_colorEls.current[index] = el)}
                />
              <i className={`selected-color fa-solid fa-check ${color === '#fff' || color === 'white' ? 'text-slate-500' : 'text-white'} absolute bottom-0 right-1`}></i>
            </label>
           }
          )   
        }
        </div>
      </div>

  </aside>
  )
}

export default CategoriesAside



