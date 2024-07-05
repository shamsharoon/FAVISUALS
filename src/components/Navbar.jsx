import React from "react";
import { Link } from "react-scroll";
import Logo from "../assets/FaVisuals_Logo.jpg";

function Navbar() {
  return (
    <>
      <nav className="w-[223px] z-50 h-screen hidden md:flex bg-black flex-col justify-between fixed">
        <Link to="hero" smooth={true} duration={1000} className="navImg cursor-pointer">
          <img src={Logo} alt="Logo" />
        </Link>

        <div className="navLinks pl-5">
          <h2 className="text-4xl font-bold text-primary">FERDAWS</h2>
          <h2 className="text-4xl font-bold text-primary">AMINI</h2>
          <div className="flex flex-col gap-[22px] pt-10">
            <Link to="about" smooth={true} duration={1000} className="text-[14px] font-extrabold hover:text-white text-primary cursor-pointer">
              ABOUT
            </Link>
            <Link to="portfolio" smooth={true} duration={1000} className="text-[14px] font-extrabold hover:text-white text-primary cursor-pointer">
              PORTFOLIO
            </Link>
            <Link to="testimonials" smooth={true} duration={1000} className="text-[14px] font-extrabold hover:text-white text-primary cursor-pointer">
              TESTIMONIALS
            </Link>
            <Link to="pricing" smooth={true} duration={1000} className="text-[14px] font-extrabold hover:text-white text-primary cursor-pointer">
              PRICING
            </Link>
          </div>
        </div>

        <div className="contact w-[223px] flex justify-center items-center rounded-md bg-primary h-14 font-bold text-black text-center">
          <Link to="contact" smooth={true} duration={1000} className="w-full h-full hover:text-primary hover:bg-black border-primary border-4 rounded-lg flex justify-center items-center cursor-pointer">
            CONTACT
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
