// src/components/ThingsSheCallsMe.js
import React, { useRef, useState } from "react";

const ThingsSheCallsMe = () => {
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
    <section id="things-she-calls-me">
      {/* Circular Play/Pause Button */}
      <button className="music-button" onClick={togglePlay}>
        {isPlaying ? "⏸" : "❤️"}
      </button>
      <h2>Things She Calls Me</h2>
      <div className="call-list">
        <p>Abhiii</p>
        <p>Babeee</p>
        <p>Jaanu</p>
        <p>Bacha (sometimes)</p>
        <p>Abhishek (when angry)</p>
        <p>Note: New name she decided to give me</p>
      </div>
      {/* Audio Player */}
      <audio ref={audioRef} loop>
        <source src="/assets/romantic-song5.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
};

export default ThingsSheCallsMe;