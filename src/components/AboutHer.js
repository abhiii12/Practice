// src/components/AboutHer.js
import React, { useRef, useState } from "react";

const AboutHer = () => {
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
    <section id="about">
      {/* Circular Play/Pause Button */}
      <button className="music-button" onClick={togglePlay}>
        {isPlaying ? "⏸" : "❤️"}
      </button>
      <h2>About Her</h2>
      <div className="about-content">
        <div className="avatar">
          <img src="/assets/avatar.jpg" alt="Her Avatar" />
        </div>
        <div className="details">
          <p><strong>Name:</strong> Love ❤️</p>
          <p><strong>Height:</strong> 5'3"</p>
          <p><strong>Weight:</strong> ~60 kg</p>
          <p><strong>Birthday:</strong> 01/10/2001 🎂</p>
          <p><strong>Zodiac signs:</strong> Libra ♎</p>
          <p><strong>Fav Color:</strong> Peach/Baby Pink</p>
          <p><strong>Fav Fruit:</strong> Orange 🍊</p>
          <p><strong>Shoe size:</strong> 6 </p>
          <p><strong>Fav Animal:</strong> Dog 🐕</p>
          <p><strong>Eyes color:</strong> Brown </p>
          <p><strong>Mole:</strong> Above upper lip, Thigh, Chest</p>
          <p><strong>Hair Color:</strong> Black</p>
          <p><strong>Fav Drink:</strong> Juice(Orange)🍹/Tea🍵</p>
          <p><strong>Fav Sports:</strong> Badminton🏸</p>
          <p><strong>Fav Subject: </strong> Mathematics</p>
          <p><strong>Fav street Food:</strong> Panipuri</p>
          <p><strong>Fav Chocolate🍫:</strong> Dairy Milk (without nuts) </p>
          <p><strong>Fav Dish:</strong> Not specific (but she likes KFC wings and chicken cooked by papa), omlet, rice, eromba</p>
          <p><strong>Language 🗣️:</strong> English, Manipuri, Hindi, Assamese, Bengali, Bhojpuri</p>
        </div>
      </div>
      {/* Audio Player */}
      <audio ref={audioRef} loop>
        <source src="/assets/romantic-song9.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
};

export default AboutHer;