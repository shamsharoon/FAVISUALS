import React from 'react';
import video1 from "../../assets/vid1.mp4";
import video2 from "../../assets/vid2.mp4";
import video3 from "../../assets/vid3.mp4";
import video4 from "../../assets/vid4.mp4";
import video5 from "../../assets/vid5.mp4";
import video6 from "../../assets/vid6.mp4";

// Sample list of local video paths (replace with your actual local video paths)
const videos = [
  { id: 1, src: video1, title: 'Exotic Rides 🌴🚀' },
  { id: 2, src: video2, title: 'Luxury Lexus 🚗💎' },
  { id: 3, src: video3, title: 'Classic Car Showdown 🚗🕶️' },
  { id: 4, src: video4, title: 'Midnight Racers 🌌🏎️' },
  { id: 5, src: video5, title: 'Street King 🏙️👑' },
  { id: 6, src: video6, title: 'Supercar Symphony 🎶🚀' },
];

function PortfolioGrid() {
  return (
    <div className="mx-10 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div key={video.id} className="relative w-full h-0 pb-[56.25%] border-2 border-primary rounded-xl">
            <video
              src={video.src}
              title={video.title}
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              autoPlay
              loop
              muted
              playsInline
            ></video>
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent rounded-xl"></div>
            <div className="absolute inset-0 flex items-end justify-center p-4">
              <h3 className="text-white md:text-lg text-md font-medium text-center">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioGrid;
