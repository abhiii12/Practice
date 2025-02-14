// src/components/Promises.js
import React, { useRef, useState } from "react";

const Promises = () => {
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
    <section id="promises">
      {/* Circular Play/Pause Button */}
      <button className="music-button" onClick={togglePlay}>
        {isPlaying ? "⏸" : "❤️"}
      </button>
      <h2>Our Promises</h2>
      <ul>
        <li>We will never lose trust in each other.</li>
        <li>We will always be honest and loyal to each other.</li>
        <li>We will never hide anything from each other, even if it hurts one of us.</li>
        <li>We will not go anywhere without informing each other where we are going and with whom.</li>
        <li>We will stand by each other when nothing goes right and understand each other at every point.</li>
        <li>We will understand each other's love language and feelings.</li>
        <li>We will always keep our communication open.</li>
        <li>If I say sorry, I will truly mean it.</li>
        <li>My heart understands your boundaries, and I promise to always respect them.</li>
        <li>I know our Journey Is Hard But I Promis I Will Stay With You In Every Situtation.Let's build a healthy and beautiful life together.</li>
      </ul>
      {/* Audio Player */}
      <audio ref={audioRef} loop>
        <source src="/assets/romantic-song0.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
};

export default Promises;