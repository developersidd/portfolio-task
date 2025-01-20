import React from "react";
import Header from "../_components/Header/Header";

const NavFooterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default NavFooterLayout;
