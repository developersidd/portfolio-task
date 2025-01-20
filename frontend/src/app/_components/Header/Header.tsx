"use client";
import Image from "next/image";
import { useState } from "react";

import Button from "../../../components/common/Button";
import NavLinks from "./NavLinks/NavLinks";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className={`2xl:container font-rubik flex justify-between mx-auto items-center px-3 sm:px-4 md:px-8 relative xl:px-8 z-30 ${
          isOpen ? "overflow-hidden scrollbar-hide" : ""
        }`}
      >
        {/* Logo */}
        <div className="flex items-end md:items-center gap-2">
          <Image
            className="size-[30px] sm:size-[35px] md:size-[100] xl:size-[125px]"
            src="/assets/images/dark-logo.svg"
            width={80}
            height={60}
            alt="logo"
          />
        </div>
        {/* Nav Link */}
        <div className="flex gap-8">
          <NavLinks />
          <Button
            btnText="CONTACT"
            btnClass="hidden font-bold md:flex px-8 py-2 border border-white bg-black/50"
          />
        </div>
      </header>
      {/*<ResponsiveNavLinks onClose={() => setIsOpen(false)} isOpen={isOpen} />*/}
    </>
  );
};

export default Header;
