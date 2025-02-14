import React, { useRef, useState } from "react";

const Firsts = () => {
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
    <section id="firsts">
      {/* Circular Play/Pause Button */}
      <button className="music-button" onClick={togglePlay}>
        {isPlaying ? "⏸" : "❤️"}
      </button>
      <h2>Our Firsts</h2>
      <div className="firsts-grid">
        <div className="first-item">
          <p>First Hug: 14 July 2022</p>
        </div>
        <div className="first-item">
          <p>First Movie (together): 1 Sept 2022</p>
        </div>
        <div className="first-item">
          <p>First Trip: 31 Aug 2022</p>
        </div>
        <div className="first-item">
          <p>First song she sung for me: Kya hua tera wada</p>
        </div>
        <div className="first-item">
          <p>First Kiss: 14 July 2022</p>
        </div>
        <div className="first-item">
          <p>First Audio call: 23 Jan 2022</p>
        </div>
        <div className="first-item">
          <p>First Video call: 14 March 2022</p>
        </div>
        <div className="first-item">
          <p>First B**: 18 July 2022</p>
        </div>
        <div className="first-item">
          <p>First S: 4 Aug 2022</p>
        </div>
        <div className="first-item">
          <p>First gift by me: Saare</p>
        </div>
        <div className="first-item">
          <p>First gift by her: t-shirt</p>
        </div>
        <div className="first-item">
          <p>First Place we went together: Shillong</p>
        </div>
      </div>
      {/* Audio Player */}
      <audio ref={audioRef} loop>
        <source src="/assets/romantic-song4.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
};

export default Firsts;