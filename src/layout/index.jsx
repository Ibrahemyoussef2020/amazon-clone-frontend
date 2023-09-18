import React from "react";

import Header from "./Header";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import { Outlet } from "react-router";

const LayOut = () => {
  return (
    <div>
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
