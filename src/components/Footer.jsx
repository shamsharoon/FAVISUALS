import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";
import Logo from "../assets/FaVisuals_Logo.jpg";

function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-10 lg:py-20">
      <div className="container w-full mx-auto flex flex-col items-center justify-center">
        <Link to="hero" smooth={true} duration={1000} className='w-40 cursor-pointer pb-0'><img src={Logo} alt="Fa Visuals" /></Link>
        <p className="text-md lg:text-xl text-primary lg:pb-10 pb-5">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <a href="mailto:ferdawsamini2005@gmail.com" className="hover:underline">ferdawsamini2005@gmail.com</a>
          </p>
        <div className="flex space-x-6 lg:gap-28 gap-2 pb-4 lg:pb-10">
          <a href="https://www.youtube.com/@FA.Visuals" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className='text-primary hover:bg-primary hover:text-black p-4 lg:p-6 rounded-full' size="2x" />
          </a>
          <a href="https://www.instagram.com/_fa.visuals_/?hl=en" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className='text-primary hover:bg-primary hover:text-black p-4 lg:p-6 rounded-full' size="2x" />
          </a>
          <a href="https://www.tiktok.com/@fa.visuals" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} className='text-primary hover:bg-primary hover:text-black p-4 lg:p-6 rounded-full' size="2x" />
          </a>
        </div>
        <div className="text-center mb-6 lg:mb-10">
          <section className="text-lg lg:text-xl flex flex-col justify-center items-center text-primary pb-0">
            <p className=' text-gray-300 font-medium'>Contact me to Book Your Next Video Shoot</p>
            <div>
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            <a href="tel:+16475687620" className="hover:underline text-xl">(647) 568-7620</a>
            </div>
          </section>
        </div>
        <div className="text-center pb-4 lg:pb-10 text-primary">
          <p>&copy; {new Date().getFullYear()} FA Visuals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
