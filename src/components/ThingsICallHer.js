// src/components/ThingsICallHer.js
import React, { useRef, useState } from "react";

const ThingsICallHer = () => {
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
    <section id="things-i-call-her">
      {/* Circular Play/Pause Button */}
      <button className="music-button" onClick={togglePlay}>
        {isPlaying ? "⏸" : "❤️"}
      </button>
      <h2>Things I Call Her</h2>
      <div className="call-list">
        <p>Buiii</p>
        <p>Lalla</p>
        <p>Babeee</p>
        <p>Jaan/Jaanu</p>
        <p>Moti/Bhains</p>
        <p>Lawdi 😶</p>
        <p>Leima (when sad or angry)</p>
      </div>
      {/* Audio Player */}
      <audio ref={audioRef} loop>
        <source src="/assets/romantic-song5.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
};

export default ThingsICallHer;