import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import videoBg from "../assets/bg.mp4";

// TODO: Replace the "Videographer" with a typewriter type effect (Done)

function Hero() {
  const [text] = useTypewriter({
    words: ["Videographer", "Photographer", "Editor"],
    loop: { loop: true },
    deleteSpeed: 100,
    typeSpeed: 100,
  });

  return (
    <div className="Hero">
      <div className="overlay"></div>
      <video autoPlay loop muted src={videoBg}></video>
      <div className="content w-screen">
        <p className="lg:text-[20px] text-[12px] font-medium">
          📍 TORONTO, ONTARIO
        </p>
        <h1 className="text-primary text-[36px] lg:text-[96px] font-bold">
          {text}
          <Cursor />
        </h1>
        <p className="lg:text-[24px] text-[16px] font-medium pb-5 lg:pb-10">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum .{" "}
        </p>
        <button className="h-14 w-48 lg:text-[24px] text-[20px] font-semibold bg-primary rounded-lg text-black">
          Hire me
        </button>
      </div>
    </div>
  );
}

export default Hero;
