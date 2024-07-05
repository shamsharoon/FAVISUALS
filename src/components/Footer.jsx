import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="bg-black text-white py-32">
      <div className="container w-full mx-auto flex flex-col items-center justify-center">
        <div className="flex space-x-6 mb-4 gap-28 pb-10">
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className='text-primary hover:bg-primary hover:text-black p-6 rounded-full' size="3x" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className='text-primary hover:bg-primary hover:text-black p-6 rounded-full' size="3x" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} className='text-primary hover:bg-primary hover:text-black p-6 rounded-full' size="3x" />
          </a>
        </div>
        <div className="text-center mb-10">
          <p className="text-2xl pb-2">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            <a href="tel:+16475687620" className="hover:underline">+1 (647) 568-7620</a>
          </p>
          <p className="text-2xl">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <a href="mailto:ferdawsamini2005@gmail.com" className="hover:underline">ferdawsamini2005@gmail.com</a>
          </p>
        </div>
        <div className="text-center pb-10">
          <p>&copy; {new Date().getFullYear()} FA Visuals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
