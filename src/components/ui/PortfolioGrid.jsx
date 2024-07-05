import React, { useState } from 'react';
import video1 from "../../assets/vid1.mp4";
import video2 from "../../assets/vid2.mp4";
import video3 from "../../assets/vid3.mp4";
import video4 from "../../assets/vid4.mp4";
import video5 from "../../assets/vid5.mp4";
import video6 from "../../assets/vid6.mp4";
import thumb1 from "../../assets/thumb1.jpg";
import thumb2 from "../../assets/thumb2.jpg";
import thumb3 from "../../assets/thumb3.jpg";
import thumb4 from "../../assets/thumb4.jpg";
import thumb5 from "../../assets/thumb5.jpg";
import thumb6 from "../../assets/thumb6.jpg";

const videos = [
  { id: 1, src: video1, title: 'Exotic Rides 🌴🚀', poster: thumb1 },
  { id: 2, src: video2, title: 'Luxury Lexus 🚗💎', poster: thumb2 },
  { id: 3, src: video3, title: 'Classic Car Showdown 🚗🕶️', poster: thumb3 },
  { id: 4, src: video4, title: 'Midnight Racers 🌌🏎️', poster: thumb4 },
  { id: 5, src: video5, title: 'Street King 🏙️👑', poster: thumb5 },
  { id: 6, src: video6, title: 'Supercar Symphony 🎶🚀', poster: thumb6 },
];

function PortfolioGrid() {
  const [playing, setPlaying] = useState({});

  const handleVideoClick = (id) => {
    const videoElement = document.getElementById(`video-${id}`);
    if (playing[id]) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    setPlaying((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="mx-10 py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="relative w-full h-0 pb-[56.25%] border-2 border-primary rounded-xl"
            onClick={() => handleVideoClick(video.id)}
          >
            <video
              id={`video-${video.id}`}
              src={video.src}
              title={video.title}
              poster={video.poster}
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              playsInline
              muted
              loop
            ></video>
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent rounded-xl"></div>
            <div className={`absolute inset-0 flex items-end justify-${index % 2 === 0 ? 'start' : 'end'} p-4`}>
              <h3 className="text-white md:text-lg text-md font-medium">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioGrid;
