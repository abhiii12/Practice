// src/components/ThingsSheDislikes.js
import React, { useRef, useState } from "react";

const ThingsSheDislikes = () => {
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
    <section id="things-she-dislikes">
      {/* Circular Play/Pause Button */}
      <button className="music-button" onClick={togglePlay}>
        {isPlaying ? "⏸" : "❤️"}
      </button>
      <h2>Things She Doesn't Like</h2>
      <div className="dislikes-list">
        <p>Dishonesty</p>
        <p>Cheating</p>
        <p>Rude Behavior</p>
        <p>Stubborn Me</p>
        <p>My Taunts</p>
        <p>Lies</p>
        <p>Rok Tok</p>
        <p>Fights for Unusual Points</p>
      </div>
      {/* Audio Player */}
      <audio ref={audioRef} loop>
        <source src="/assets/romantic-song8.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
};

export default ThingsSheDislikes;