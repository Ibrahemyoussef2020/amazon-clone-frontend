import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleAside } from "../redux/slices";
import { AlterAside, InitialAside } from "../components";

const Aside = () => {
  const [isSearchStrategyShowen , setIsSearchStrategyShowen] = useState(false);
  const [searchStrategy , setSearchStrategy] = useState('');

  
  const dispatch = useDispatch();
  const {isOppend} = useSelector(state => state.aside)
  const {isLogged} = useSelector(state => state.log)


  const category = 'searchAllCategories',
      section = 'searchAllSections',
      brand  = 'searchAllBrands',
      rating = 'searchAllheighestRating';

    

const asideData = {

  searchStrategy:searchStrategy,
  setSearchStrategy:setSearchStrategy,
  isSearchStrategyShowen:isSearchStrategyShowen,
  setIsSearchStrategyShowen:setIsSearchStrategyShowen,

  category:category,
  section:section,
  brand:brand,
  rating:rating,
}


  return (
    <aside className={`aside z-40 relative h-[100vh] bg-blue-400 ${isOppend ? 'oppend-aside' : 'colsed-aside'}`}>
      <button onClick={_=> dispatch(toggleAside(false))} className="close absolute top-1  right-[-35px] text-white text-2xl bg-transparent outline-none border-none">
        <i className="fa-solid fa-xmark font-regular text-[2.7rem] text-white "></i>
      </button> 
      <header className='bg-costum-clr_acc_blue text-stone-50 p-2 divide-solid divide-2 divide-slate-50'>
        <Link to="/login">
            <h2 className='flex'>
                <div className="flex justify-center text-xs bg-white w-[35px] h-[35px] rounded-full gap-2 items-center">
                    <i className="fa-solid fa-user fa-2xl text-[#232f3e]"></i>
                </div>

                <div className="flex align-baseline ml-2 font-bold text-3xl">
                  <span className="block mr-1">Hello, </span>
                  <span className="text-2xl">{isLogged ? 'Ibrahim' : 'sign In'}</span> 
                </div>
            </h2>
          </Link>
      </header>

      <InitialAside asideData={asideData} />


      <AlterAside asideData={asideData} />


    </aside>
  )
}

export default Aside