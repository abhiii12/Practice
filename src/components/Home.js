// src/components/Home.js
import React, { useRef, useState } from "react";

const Home = () => {
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
    <section id="home">
      <div className="hero">
        {/* Circular Play/Pause Button */}
        <button className="music-button" onClick={togglePlay}>
          {isPlaying ? "⏸" : "❤️"}
        </button>
        <h1>Buiii, you are my sunshine, my happiness, and my forever.</h1>
        <h1>💕You are my love in my happiest days,</h1>
        <h1>My Valentine forever in endless ways💕 </h1>
        <h1>❤️</h1>
      </div>
      {/* Audio Player */}
      <audio ref={audioRef} loop>
        <source src="/assets/romantic-song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
};

export default Home;