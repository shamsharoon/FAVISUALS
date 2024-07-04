import React, { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import videoBg from "../assets/bg.mp4";

function Hero() {
  const [text] = useTypewriter({
    words: ["Videographer", "Photographer", "Editor"],
    loop: { loop: true },
    deleteSpeed: 100,
    typeSpeed: 100,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const video = document.getElementById('bg-video');

    const handleLoadedData = () => {
      setIsLoading(false);
      document.body.classList.add('loaded');
      if (!isVideoPlaying) {
        video.play();
        setIsVideoPlaying(true);
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [isVideoPlaying]);

  const handlePlayVideo = () => {
    const video = document.getElementById('bg-video');
    video.play();
    setIsVideoPlaying(true);
  };

  return (
    <div className="relative w-full h-screen">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-500 ease-in-out opacity-100">
          <div className="text-white">Loading...</div>
        </div>
      )}
      <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <video
          id="bg-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          src={videoBg}
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
          <p className="lg:text-[20px] text-[12px] font-medium text-white">
            📍 TORONTO, ONTARIO
          </p>
          <h1 className="text-primary text-[36px] lg:text-[96px] font-bold">
            {text}
            <Cursor />
          </h1>
          <p className="lg:text-[24px] text-[16px] font-medium pb-5 lg:pb-10 text-white">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum .{" "}
          </p>
          {!isVideoPlaying && (
            <button className="h-14 w-48 lg:text-[24px] text-[20px] font-semibold bg-primary rounded-lg text-black" onClick={handlePlayVideo}>
              Play Video
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
