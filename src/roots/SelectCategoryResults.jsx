import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { fetchData } from "../apis";
import { CategoriesAside,CategoryMobileAside, CategoriesNav, CategoryhandleResults, ProductBuy, ProductDetailsInfo, Productbadge, ProductRating } from "../components";
import { compeletPriceSerial, sortLists, filterProductsList } from '../utilities'

import { Link } from "react-router-dom";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


let filterList = [];

const SelectCategoryResults = () => {
  const [products, setProducts] = useState([]);
  const [constantProducts, setConstantProducts] = useState([])
  const [productsColor, setProductsColor] = useState([])
  const [productsBrand, setProductsBrand] = useState([])
  const [productsType, setProductsType] = useState([])

  const [fileterdOption, setFileterdOption] = useState('all')
  const [hierarchyState, setHierarchyState] = useState('')
  const [isSelectParentClicked,setIsSelectParentClicked] = useState(true)
  const [isMobileFilterOppen, setIsMobileFilterOppen] = useState(false)
  const [clear,setClear] = useState(false)
 

  const location = useLocation()
   const { selectedValue } = useParams();

  useEffect(async => {
    fetchData(selectedValue, setProducts);
    fetchData(selectedValue, setConstantProducts);

  }, [selectedValue]);


  const reSortLists = (e, hierarchy, prop, letterly = false) => {
    e.preventDefault();
    setHierarchyState(hierarchy)
    sortLists(hierarchy, prop, products, letterly)
  }

  /******************************** */

 

  const handleFilter = (filterData, isAdded) => {
    
    let newFilterList = filterList;

    console.log(filterList);

    if (filterData.type === 'clear') {

      const modifiedProducts = filterProductsList([], constantProducts );
      setProducts(modifiedProducts);

      return true
    }

    else if(filterData.type === 'remove-filter'){
      filterList = filterList.filter(filter => filter.prop !== filterData.prop  )
      const modifiedProducts = filterProductsList(filterList, constantProducts );
      setProducts(modifiedProducts);
    }
    
    if (isAdded) {

      const isExist = filterList.find(filter => filter.prop === filterData.prop);

      if (isExist) {
        filterList = filterList.map(filter => filter.prop === filterData.prop ? filterData : filter)
      } else {
        filterList = [...filterList, filterData];
      }

    }
    else {
      if (filterData.type === 'list') {
          
          const newValues = filterData.values;
          const newFilterData = {...filterData , values:newValues}

          filterList = filterList.map(filterItem => newFilterData ) ;
      }else{
        filterList = filterList.filter(filterItem => filterItem.prop !== filterData.prop)
      }
    }


    const numberDependences =  filterData.hasOwnProperty('values') ?  filterData.values.length : 1;


    if (filterData.type === 'list') {
      filterList = !filterData.values.length ? filterList.filter(filterData => !filterData.hasOwnProperty('values')) : filterList;
      newFilterList = filterList
    }
    else{
      newFilterList = filterList;
    }
    
    const modifiedProducts = filterProductsList(newFilterList, constantProducts , numberDependences);
    
    setProducts(modifiedProducts);

  }

  const handleClearFilters = ()=>{
    handleFilter({
      prop:null,
      checked:true,
      type: 'clear',
      value: null,
    } , true)
  }

  /*********************************** */


  return (
    <div className="relative" onClick={e => e.target.classList.contains('select-control') || e.target.parentElement.classList.contains('select-control') ?  setIsSelectParentClicked(true) : setIsSelectParentClicked(false)}>
      <CategoriesNav
        selectedValue={selectedValue}
      />
      <CategoryhandleResults
        selectedValue={selectedValue}
        productsLenght={products.length}
        reSortLists={reSortLists}
        isSelectParentClicked={isSelectParentClicked}
        setIsSelectParentClicked={setIsSelectParentClicked}
        isMobileFilterOppen={isMobileFilterOppen}
        setIsMobileFilterOppen={setIsMobileFilterOppen}
        setClear={setClear}
      />
      <div className={`flex justify-around flex-nowrap pt-4 pb-8`}>

        <CategoriesAside
          handleFilter={handleFilter}
          reSortLists={reSortLists}
          selectedValue={selectedValue}
          constantList={constantProducts}
          setProducts={setProducts}

        />

        <CategoryMobileAside
          handleFilter={handleFilter}
          reSortLists={reSortLists}
          selectedValue={selectedValue}
          constantList={constantProducts}
          setProducts={setProducts}
          isMobileFilterOppen={isMobileFilterOppen}
          setIsMobileFilterOppen={setIsMobileFilterOppen}
          clear={clear}
          setClear={setClear}
        />

        <div className={`flex flex-1 justify-around flex-wrap items-start`}>
          {!products?.length && constantProducts?.length

          ? 
      <section>
        <div className=" hidden md:block">
          <div className=" p-4 pb-8 lg:gap-[70px] items-end lg:item-start">
              <div className="">
                  <img src="/images/empty-cart-mob.jpg" className="w-[200px] lg:w-[300px] mx-auto text-red-500" alt="kkk"/>
              </div>
              <div className="lg:pb-4">
                  <h2 className="text-2xl lg:text-3xl !font-semibold mb-2">No results according to your search</h2>

                  <button className="pt-1 pl-3 mb-4 text-xl lg:text-2xl" onClick={handleClearFilters}>
                    <i className="fa-solid fa-angle-left text-lg lg:text-xl"></i> <span>Clear All Filters</span> 
                  </button>

                  <div className="mt-1 text-xl">
                      <Link to='/login' className=" bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-lg mr-3">Sign in to your account</Link>
                      <Link to='/logout' className="py-2 px-4 rounded-lg border boredr-solid border-[#ccc] hover:bg-blue-50">Sign Up now</Link>
                  </div>

                  <Link to='/' className="py-2 px-4 rounded-lg border boredr-solid border-[#ccc] hover:bg-blue-50 block max-w-[360px] mt-6 text-center">Continue Shopping</Link>

              </div>                       
            </div>
          </div>


          <div className=" md:hidden">
            <div className="p-8">
              <img src="/images/empty-cart-mob.jpg" alt="empty" className="max-w-[300px] mx-auto" />
            </div>
            <h2 className="text-xl sm:text-2xl text-center !font-semibold mb-2">No results according to your search</h2>

            <button className="pt-1  text-lg sm:text-xl" onClick={handleClearFilters}>
                <i className="fa-solid fa-angle-left text-lg"></i> <span>Clear All Filters</span> 
            </button>

            <div className="px-4">
              <Link to='/login' className="mt-3 text-2xl max-w-[350px] mx-auto block  bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-lg text-center mb-3">Sign in to your account</Link>
              <Link to='/logout' className="py-2 px-4  max-w-[350px] mx-auto block text-2xl rounded-lg border boredr-solid border-[#ccc] hover:bg-blue-50 text-center mb-12">Sign Up now</Link>
            </div>
          </div>
      </section>

      : !products?.length && !constantProducts?.length ?

      <div className={`row text-center bg-inhrit`} style={{overflowX:'hidden'}}>
       <div className='Skeleton-container sm:col-span-6 md:col-span-4  my-1 text-center bg-inhrit'>
            <Skeleton height={200} width={'100%'}/>
        </div>
        <div className='Skeleton-container sm:col-span-6 md:col-span-4 my-1 text-center bg-inhrit'>
            <Skeleton height={200} width={'100%'}/>
        </div>
        <div className='Skeleton-container sm:col-span-6 md:col-span-4 my-1 text-center bg-inhrit'>
            <Skeleton height={200} width={'100%'}/>
        </div>
        <div className='Skeleton-container sm:col-span-6 md:col-span-4 my-1 text-center bg-inhrit'>
            <Skeleton height={200} width={'100%'}/>
        </div>
        <div className='Skeleton-container sm:col-span-6 md:col-span-4 my-1 text-center bg-inhrit'>
            <Skeleton height={200} width={'100%'}/>
        </div>
        <div className='Skeleton-container sm:col-span-6 md:col-span-4 my-1 text-center bg-inhrit'>
            <Skeleton height={200} width={'100%'}/>
        </div>
      </div>
      :
            products
              .map(product =>

                <article className="text-sm xl:text-md flex !flex-nowrap  sm:flex-col  max-w-[100%] sm:max-w-[210px] md:max-w-[230px] lg:max-w-[240px] xl:max-w-[260px] mb-8 border border-solid border-[#eee] text-[#0F1111]  font-medium" key={product?.id}>
                  <div className="mx-auto bg-[#efefef]  flex items-center justify-center p-4 sm:p-8 h-[300px] sm:h-[270px]  w-[100%]">
                    <img className="max-h-[100%] max-w-[100%] min-h-[200px]" src={`/${product?.image}.jpg`} alt="d" />
                  </div>

                  <div className="py-2 px-4">
                    
                    <Link to={`/product-details/${selectedValue}/${product.id}`} className="a-size-base-plus text-[#0F1111] hover:text-[#C7511F] m-0">{product.type?.toUpperCase().slice(1,15)} {product.title?.toUpperCase().slice(0,20)} {product.description.toUpperCase().slice(0, 30)}...</Link>
                    
                    <div className="flex gap-2"> 
                      <ProductRating avgRating={product.avgRating} ratings={product.ratings}  />
                    </div>

                    <div className="text-[#555] a-size-base flex gap-3 mt-2 mb-4 leading-6 text-center">
                    {product.ratings.toString().slice(0,3)}+ bought in past month
                    </div>

                    <div className="mb-6">
                      {<Productbadge badge={product.badge} />}
                    </div>

                    <div className="flex mb-3">
                      <div className="flex !flex-nowrap">
                        <sub className="text-[13px]">EGP</sub>
                        <span className=" text-[#0F1111] text-[28px]">
                          {compeletPriceSerial(product.price)}
                        </span>
                        <sub className="text-[13px]">00</sub>
                      </div>
                      {product.has_discount && 
                        <span className="ml-2 mt-2 text-[#555] ">List Price: <span className="line-through">EGP {compeletPriceSerial(product.oldPrice)}</span></span> 
                      }
                    </div>

                    <div className="">
                      { product.premium_offer ? 
                        <p className="a-size-base mb-0">                     
                          <i className="fa-solid fa-check text-[#feac03] font-extrabold"></i>
                          <span className="text-[#1ba1ff] font-bold">prime</span>
                          <span className="ml-1">Get it as soon as</span> 
                        </p>
                     : null }

                      <p>
                        <span className="block font-bold text-[#0F1111]">tomorrow, 23 Nov</span>
                      </p>
                        
                        {product.free_delivery ? <span className="mt-2 a-size-base text-[#0F1111] inline-block">Fulfilled by Amazon - FREE Shipping</span>
                        
                        : <span className="mt-2 a-size-base text-[#0F1111] inline-block">Fulfilled by Clients - Price and  Delivery</span> 
                        }
                      
                    </div>                
                    
                  </div>
                </article>
              )
          }
        </div>
      </div>
    </div>
  )
}

export default SelectCategoryResults