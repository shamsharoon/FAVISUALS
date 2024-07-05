import React, { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import videoBg from "../assets/bg.mp4";
import Spinner from "./ui/Spinner";
function Hero() {
  const [text] = useTypewriter({
    words: ["Videographer", "Photographer", "Editor"],
    loop: { loop: true },
    deleteSpeed: 100,
    typeSpeed: 100,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showStartText, setShowStartText] = useState(true);
  const [showFerdawsText, setShowFerdawsText] = useState(false);
  useEffect(() => {
    const video = document.getElementById('bg-video');
    const handleLoadedData = () => {
      setIsLoading(false);
      document.body.classList.add('loaded');
      video.play()
        .then(() => {
          setIsVideoPlaying(true);
        })
        .catch(error => {
          console.error('Error playing video:', error);
        });
    };
    video.addEventListener('loadeddata', handleLoadedData);
    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);
  const handlePlayVideo = () => {
    const video = document.getElementById('bg-video');
    video.play()
      .then(() => {
        setIsVideoPlaying(true);
        setShowStartText(false);
        setShowFerdawsText(true);
      })
      .catch(error => {
        console.error('Error playing video:', error);
      });
  };
  const handleDivClick = () => {
    if (!isVideoPlaying) {
      handlePlayVideo();
    } else {
      setShowStartText(false);
      setShowFerdawsText(true);
    }
  };
  return (
    <div className="relative w-full h-screen" onClick={handleDivClick}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-500 ease-in-out opacity-100">
          <Spinner />
        </div>
      )}
      <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <video
          id="bg-video"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="metadata"
          src={videoBg}
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative top-10 left-0 z-10 flex flex-col items-center justify-center w-full h-full text-center">
          <p className="lg:text-[20px] text-[12px] font-medium text-white">
            📍 TORONTO, ONTARIO
          </p>
          <h1 className="text-primary text-[36px] lg:text-[96px] font-bold lg:pb-12 pb-[200px]">
            {text}
            <Cursor />
          </h1>
          {showStartText && (
            <p className="absolute lg:bottom-32 bottom-44 text-md font-bold lg:hidden flex justify-center w-full">
              <button className="button-34" role="button">Start Video</button>
            </p>
          )}
          {showFerdawsText && (
            <div></div>
          )}
          <p className="lg:text-[18px] lg:block hidden text-[16px] mx-52 font-medium text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro consequuntur quis quae perferendis. Temporibus, sunt impedit non voluptas distinctio, architecto dolores nam quibusdam optio neque fuga quas. Accusamus, alias et!
          </p>
          <div className="absolute lg:bottom-32 bottom-28 flex justify-center w-full">
            <svg className="w-12 h-12 animate-bounce text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;