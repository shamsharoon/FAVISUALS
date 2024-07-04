import React from "react";
import Logo from "../assets/FaVisuals_Logo.jpg";

function Navbar() {
  return (
    <>
      <nav className="w-[223px] z-50 h-screen hidden md:flex bg-black flex-col justify-between fixed">
        <div className="navImg">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="navLinks pl-5">
          <h2 className="text-4xl font-bold text-primary">FERDAWS</h2>
          <h2 className="text-4xl font-bold text-primary">AMINI</h2>
          <div className="flex flex-col gap-[22px] pt-10">
            <h3 className="text-[14px] font-extrabold text-primary">ABOUT</h3>
            <h3 className="text-[14px] font-extrabold text-primary">PORTFOLIO</h3>
            <h3 className="text-[14px] font-extrabold text-primary">TESTOMINALS</h3>
            <h3 className="text-[14px] font-extrabold text-primary">PRICING</h3>
          </div>
        </div>

        <div className="contact w-[223px] flex justify-center items-center rounded-md bg-primary h-14 font-bold text-black text-center">
          <button>CONTACT</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
