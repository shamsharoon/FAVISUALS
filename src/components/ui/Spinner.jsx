import React from "react";
import logo from "../../assets/FaVisuals_Logo.jpg";

function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="spinner border-[5px] border-primary border-t-transparent rounded-full h-12 w-12 animate-spin"></div>
      <img src={logo} alt="Logo" className="w-24 h-auto mb-4 pt-5" />
    </div>
  );
}

export default Spinner;
