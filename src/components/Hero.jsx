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
  const [showStartText, setShowStartText] = useState(true); // State to show the "Start Video" text
  const [showFerdawsText, setShowFerdawsText] = useState(false); // State to show "Ferdaws Amini" text

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
        setShowStartText(false); // Hide the "Start Video" text once video starts playing
        setShowFerdawsText(true); // Show "Ferdaws Amini" text immediately after video starts
      })
      .catch(error => {
        console.error('Error playing video:', error);
      });
  };

  const handleDivClick = () => {
    if (!isVideoPlaying) {
      handlePlayVideo();
    } else {
      setShowStartText(false); // Toggle "Start Video" text visibility
      setShowFerdawsText(true); // Toggle "Ferdaws Amini" text visibility
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
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
          <p className="lg:text-[20px] text-[12px] font-medium text-white">
            📍 TORONTO, ONTARIO
          </p>
          <h1 className="text-primary text-[36px] lg:text-[96px] font-bold lg:pb-12 pb-[400px]">
            {text}
            <Cursor />
          </h1>
          {showStartText && (
            <p className="lg:text-[24px] block lg:hidden text-[16px] font-medium pb-5 lg:pb-10 text-white/100 cursor-pointer">
              Start Video
            </p>
          )}
          {showFerdawsText && (
            <p className="lg:text-[24px] block lg:hidden text-[16px] font-medium pb-5 lg:pb-10 text-white/100">
              Ferdaws Amini
            </p>
          )}
          <p className="lg:text-[18px] lg:block hidden text-[16px] mx-52 font-medium text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro consequuntur quis quae perferendis. Temporibus, sunt impedit non voluptas distinctio, architecto dolores nam quibusdam optio neque fuga quas. Accusamus, alias et!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
