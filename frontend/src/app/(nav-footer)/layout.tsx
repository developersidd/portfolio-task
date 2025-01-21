import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import React from "react";

const NavFooterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default NavFooterLayout;
