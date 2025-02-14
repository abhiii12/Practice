// src/components/ThingsILoveAboutHer.js
import React, { useRef, useState } from "react";

const ThingsILoveAboutHer = () => {
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
    <section id="things-i-love-about-her">
      {/* Circular Play/Pause Button */}
      <button className="music-button" onClick={togglePlay}>
        {isPlaying ? "⏸" : "❤️"}
      </button>
      <h2>Things I Love About Her</h2>
      <div className="love-list">
        <p>Her Smile 😃</p>
        <p>Her Eyes 👀</p>
        <p>Her Loyalty and Love ❤️</p>
        <p>Her Voice</p>
        <p>Her Armpit</p>
        <p>Her Untied Hair</p>
        <p>Her Cuteness 😍</p>
        <p>Her Family 👨‍👩‍👦</p>
        <p>Her Sweat 🥲🤤</p>
        <p>Her Truthfulness</p>
        <p>Her Abusive Words for Me 🤬</p>
        <p>Her Defiled Food</p>
        <p>Her Touch</p>
        <p>Her Pampering</p>
        <p>.........Everything🌎</p>
      </div>
      {/* Audio Player */}
      <audio ref={audioRef} loop>
        <source src="/assets/romantic-song7.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
};

export default ThingsILoveAboutHer;