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
      <FooterTop />
      <FooterBottom />
    </div>
  );
};

export default LayOut;
