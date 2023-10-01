import React from "react";
import { filterSection, filterBrand, filterType } from "../redux/slices";

import "../index.css";

import HeaderTop from "./HeaderTop";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header id="header" className="text-white h-[60x]  flex items-center    ">
      <HeaderTop />
      <NavBar />
    </header>
  );
};

export default Header;
