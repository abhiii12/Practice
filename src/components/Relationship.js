// src/components/Relationship.js
import React, { useRef, useState } from "react";

const Relationship = () => {
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
    <section id="relationship">
      {/* Circular Play/Pause Button */}
      <button className="music-button" onClick={togglePlay}>
        {isPlaying ? "⏸" : "❤️"}
      </button>
      <h2>Our Relationship</h2>
      <div className="timeline">
        <div className="event">
          <p>Our journey began in the digital world on a winter's day - December 16, 2021. For months, our hearts grew closer through screens and messages, until that magical summer afternoon of July 14, 2022, when we finally met in person at college. The waiting made that moment even more special.</p>
        </div>
        <div className="event">
          <p>She has a beautifully unique way of showing love - through quality time together, passionate discussions (even when we disagree), and warm embraces that say more than words ever could. It was actually me who took the leap of faith first, opening my heart to her on March 12, 2022, when our story officially began.</p>
        </div>
        <div className="event">
          <p>Our relationship has been a beautiful tapestry of emotions - we've had our storms and our sunshine, heated arguments and tender kisses. But what makes us special is how she always reaches for resolution, believing that even our biggest disagreements can be healed with the simple power of a heartfelt hug.</p>
          <p>Like any great love story, ours isn't perfect - it's real. And that's what makes it extraordinary.</p>
        </div>
      </div>
      {/* Audio Player */}
      <audio ref={audioRef} loop>
        <source src="/assets/romantic-song3.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
};

export default Relationship;