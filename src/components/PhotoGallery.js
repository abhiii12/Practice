// src/components/PhotoGallery.js
import React, { useRef, useState } from "react";

const PhotoGallery = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="photo-gallery">
      {/* Circular Play/Pause Button */}
      <button className="music-button" onClick={togglePlay}>
        {isPlaying ? "⏸" : "❤️"}
      </button>
      <h2>Our Memories</h2>
      <div className="gallery">
        <div className="photo">
          <img src="/assets/download6.jpg" alt="Our First Hug" />
          <p className="caption">"No matter how many places we visit, my favorite destination will always be by your side. ❤️✨"</p>
        </div>
        <div className="photo">
          <img src="/assets/download05.jpg" alt="Our First Trip" />
          <p className="caption">"From exploring new places to finding home in each other—now she’s a part of my world in every way. ❤️🏡"</p>
        </div>
        <div className="photo">
          <img src="/assets/download04.jpg" alt="Our First Movie" />
          <p className="caption">"The moment our eyes met, the world faded, and my heart whispered—'It’s you. ❤️✨"</p>
        </div>
        {/* Add more photos here */}
      </div>
      {/* Audio Player */}
      <audio ref={audioRef} loop>
        <source src="/assets/romantic-song01.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
};

export default PhotoGallery;