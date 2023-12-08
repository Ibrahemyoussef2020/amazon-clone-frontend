import {useDispatch }from 'react-redux'
import { toggleSuggegtionsDrop } from '../redux/slices';

import { Outlet } from "react-router";
import Header from "./Header";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import Aside from './Aside';
import Layer from './Layer';




const LayOut = () => {
  const dispatch = useDispatch();

  const closeSuggegtionsDrop = e => {
    if (!e.target.classList.contains('search__input') && !e.target.classList.contains('search-result')) {
      dispatch(toggleSuggegtionsDrop([]))
    }
  }
  return (
    <div onClick={e=>closeSuggegtionsDrop(e)} className='relative'>
      <Layer />
      <Header />
      <Aside/>
      <Outlet />
      <footer className="text-white ">
        <FooterTop />
        <FooterBottom />
      </footer>
    </div>
  );
};

export default LayOut;
