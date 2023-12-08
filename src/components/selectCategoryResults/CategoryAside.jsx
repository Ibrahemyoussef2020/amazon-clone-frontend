import { Link } from "react-router-dom"

import {
  ascending,
  descending,
  heighestPrice,
} from '../../utilities/sortLists'

import { catchCtaegoryDesc } from "../../utilities"
import { useEffect, useState } from "react"



let multipleStrings = [];

const CategoriesAside = ({ handleFilter, reSortLists, selectedValue, constantList , setProducts}) => {

  const [productsColor, setProductsColor] = useState([])
  const [productsBrand, setProductsBrand] = useState([])
  const [productsType, setProductsType] = useState([])

  const [selectedType,setSelectedType] = useState('')

  useEffect(()=>{
    const colors = new Set(constantList.map(product => product.color))
    setProductsColor([...colors])

    const brands = new Set(constantList.map(product => product.brand))
    setProductsBrand([...brands])

    const types = new Set(constantList.map(product => product.type))
    setProductsType([...types])
  },[selectedValue,constantList,multipleStrings])


    const handleBooleanValues = (e) => {
      handleFilter({
        prop: e.target.name,
        checked: e.target.checked,
        type: 'boolean',
        filterFn:(product,filter) => product[e.target.name] === filter.checked
      }, e.target.checked)
    }

    const handleNumberValues = (e) => {
      
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
  }

  const handleRemoveFilter = (filter)=>{
    handleFilter({
      prop:filter,
      checked:true,
      type: 'remove-filter',
      value:null,
    } , true)
  }

  const handleClearFilters = ()=>{
    handleFilter({
      prop:null,
      checked:true,
      type: 'clear',
      value: null,
    } , true)
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
          />
          <span className={`ml-2 mr-1`}>
            <img src="/images/amazone-small-arrow.png" alt=""  className="w-[15px] h-[10px] -mb-2"/>
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
        <button className="clear pt-1">
          <i className="fa-solid fa-angle-left"></i> <span>Clear</span> 
        </button>
        <label>
          <input
            onChange={handleBooleanValues}
            type="checkbox"
            id="to_home"
            name="to_home"
            value="to_home"
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
                onChange={handleNumberValues} 
                type="radio" 
                name="type" 
                value={type}
                data-values={multipleStrings}
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
            onChange={handleNumberValues}
            type="radio"
            id="equal-bigger-5"
            name="avgRating"
            value="5"
          />
          <div>
            <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
            <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
            <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
            <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
            <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
          </div>
          <span className=" ml-2  a-size-small"> Only</span>
        </label>


        <label className="flex no-check-shape mb-3">
          <input
            onChange={handleNumberValues}
            type="radio"
            id="equal-bigger-4"
            name="avgRating"
            value="4"
          />
          <div> 
            <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
            <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
            <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
            <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
            <i className="fa-regular fa-star fa-lg text-[#ffa41c]"></i> 
          </div>
          <span className=" ml-2  a-size-small">& Up</span>
        </label>

        <label className="flex no-check-shape mb-3">
          <input
            onChange={handleNumberValues}
            type="radio"
            id="equal-bigger-3"
            name="avgRating"
            value="3"
          />
          <div> 
            <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
            <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
            <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
            <i className="fa-regular fa-star fa-lg text-[#ffa41c]"></i> 
            <i className="fa-regular fa-star fa-lg text-[#ffa41c]"></i> 
          </div>
          <span className=" ml-2  a-size-small">& Up</span>
        </label>

        <label className="flex no-check-shape mb-3">
          <input
            onChange={handleNumberValues}
            type="radio"
            id="equal-bigger-2"
            name="avgRating"
            value="2"
          />
          <div> 
            <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
            <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
            <i className="fa-regular fa-star fa-lg text-[#ffa41c]"></i> 
            <i className="fa-regular fa-star fa-lg text-[#ffa41c]"></i> 
            <i className="fa-regular fa-star fa-lg text-[#ffa41c]"></i> 
          </div>
          <span className=" ml-2  a-size-small">& Up</span>
        </label>

        <label className="flex no-check-shape mb-3">
          <input
            onChange={handleNumberValues}
            type="radio"
            id="equal-bigger-1"
            name="avgRating"
            value="1"
          />
          <div> 
            <i className="fa-solid fa-star fa-lg  text-[#ffa41c]"></i>
            <i className="fa-regular fa-star fa-lg text-[#ffa41c]"></i> 
            <i className="fa-regular fa-star fa-lg text-[#ffa41c]"></i> 
            <i className="fa-regular fa-star fa-lg text-[#ffa41c]"></i> 
            <i className="fa-regular fa-star fa-lg text-[#ffa41c]"></i> 
          </div>
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
                onChange={handleNumberValues} 
                type="radio" 
                name="color" 
                value={color}
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



  /*const handleBooleanValues = (e)=>{
    
    handleFilter({
      type:'boolean',
      checked:e.target.checked,
      prop:e.target.name,
      filterFn:(product,filter) => product[filter.prop] === filter.checked
    })
  }*/

  /*const handleNumberValues = (e)=>{
    handleFilter({
      type:'costum',
      checked:e.target.checked,
      prop:e.target.name,
      value:e.target.value,
      //filterFn:(product,filter)=> product[e.target.name] >= filter.value
      filterFn: (item) => item['avgRating'] >= e.target.value,
    })
  } */