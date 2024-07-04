import React from "react";
import logo from "../../assets/FaVisuals_Logo.jpg";

function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={logo} alt="Logo" className="w-24 h-auto mb-4 pt-5" />
      <h3 className="text-primary text-3xl font-bold">Loading...</h3>
    </div>
  );
}

export default Spinner;
