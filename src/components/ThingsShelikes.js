// src/components/ThingsSheLikes.js
import React, { useRef, useState } from "react";

const ThingsSheLikes = () => {
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
    <section id="things-she-likes">
      {/* Circular Play/Pause Button */}
      <button className="music-button" onClick={togglePlay}>
        {isPlaying ? "⏸" : "❤️"}
      </button>
      <h2>Things She Likes</h2>
      <div className="likes-list">
        <p>Playing Badminton 🏸</p>
        <p>Traveling 🚶‍♀️</p>
        <p>Sleeping 😴</p>
        <p>Singing</p>
        <p>Vibing</p>
        <p>Traditional Dresses (Fidup Phanek)</p>
        <p>My Simplicity and Cuteness</p>
        <p>Trips</p>
        <p>Shopping 🛍️</p>
        <p>Dresses 👗</p>
        <p>Cooking and Eating 😋</p>
        <p>Me 😶</p>
        <p>Flowers 💐</p>
        <p>HLTs/Status</p>
      </div>
      {/* Audio Player */}
      <audio ref={audioRef} loop>
        <source src="/assets/romantic-song6.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
};

export default ThingsSheLikes;