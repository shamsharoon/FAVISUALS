import React, { useState, useEffect, useRef } from "react";
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

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

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

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        video.play().catch(error => console.error('Error playing video:', error));
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handlePlayVideo = () => {
    const video = videoRef.current;
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
          ref={videoRef}
          id="bg-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
          <p className="lg:text-[20px] text-[12px] font-medium text-white">
            📍 TORONTO, ONTARIO
          </p>
          <h1 className="text-primary text-[36px] lg:text-[96px] font-bold lg:pb-12 pb-[200px]">
            {text}
            <Cursor />
          </h1>
          {showStartText && (
            <p className="lg:text-[24px] block lg:hidden text-[16px] font-medium py-4 px-8 rounded-full bg-primary/50 text-white/100 cursor-pointer">
              Start Video
            </p>
          )}
          {showFerdawsText && (
            <div className="absolute bottom-32 flex justify-center w-full">
              <svg className="w-12 h-12 animate-bounce text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          )}
          <p className="lg:text-[18px] lg:block hidden text-[16px] mx-52 font-medium text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro consequuntur quis quae perferendis. Temporibus, sunt impedit non voluptas distinctio, architecto dolores nam quibusdam optio neque fuga quas. Accusamus, alias et!
          </p>
          <div className="absolute bottom-32 lg:flex hidden justify-center w-full">
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