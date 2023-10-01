import {useDispatch }from 'react-redux'
import { toggleSuggegtionsDrop } from '../redux/slices';

import { Outlet } from "react-router";
import Header from "./Header";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";



const LayOut = () => {
  const dispatch = useDispatch();

  const closeSuggegtionsDrop = e => {
    if (!e.target.classList.contains('search__input') && !e.target.classList.contains('search-result')) {
      dispatch(toggleSuggegtionsDrop([]))
    }
  }
  return (
    <div onClick={e=>closeSuggegtionsDrop(e)}>
      <Header />
      <Outlet />
      <footer className="text-white ">
        <FooterTop />
        <FooterBottom />
      </footer>
    </div>
  );
};

export default LayOut;
