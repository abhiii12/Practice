// src/components/ThingsAboutHerBody.js
import React, { useRef, useState } from "react";

const ThingsAboutHerBody = () => {
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
    <section id="things-only-i-know">
      {/* Circular Play/Pause Button */}
      <button className="music-button" onClick={togglePlay}>
        {isPlaying ? "⏸" : "❤️"}
      </button>
      <h2>Things Only I Know</h2>
      <div className="body-list">
        <p>Two Intradermal Nevus On Right Ear 👂</p>
        <p>Deep Mark On Right Thigh From Injection 💉</p>
        <p>Dark Spot Above Her Butt 🍑</p>
        <p>She Uses 2-3 Fingers (Index And Pinky Finger) To Remove Dirt From Her Nose</p>
        <p>Best Armpit Sweat In The World And She Has A Charming Double Chin 😂</p>
        <p>Her Menstrual Cycle Schedule</p>
        <p>Only I Know How To Handle My Buiii, Aka RDX, And How To Make Him Happy</p>
      </div>
      {/* Audio Player */}
      <audio ref={audioRef} loop>
        <source src="/assets/romantic-song9.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
};

export default ThingsAboutHerBody;