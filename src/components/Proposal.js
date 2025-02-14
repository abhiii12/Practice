// src/components/Proposal.js
import React, { useRef, useState } from "react";

const Proposal = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [response, setResponse] = useState("");

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
    <section id="proposal">
      {/* Circular Play/Pause Button */}
      <button className="music-button" onClick={togglePlay}>
        {isPlaying ? "⏸" : "❤️"}
      </button>
      <h1>batane ki baat to nhi h, par batane dogi kya</h1>
      <h1>ishq bepanah h tumse, ek baar jatane dogi kya</h1>
      <h1>tum nadi tum pahad tum titli tum aasman ho mera *2 </h1>
      <h1>ek dibiya m sindoor rakha h humare paas tum lagane dogi kya</h1>
      <h2>Will you marry me, Buiii? ❤️</h2>
      <div className="proposal-buttons">
        <button onClick={() => setResponse("I knew you'd say yes! Let's make forever beautiful. ❤️")}>Yes</button>
        <button onClick={() => setResponse("Ofc, stupid! I love you to the moon and back. 😘")}>Ofc, stupid 😘</button>
      </div>
      <p id="response">{response}</p>
      {/* Audio Player */}
      <audio ref={audioRef} loop>
        <source src="/assets/romantic-song02.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
};

export default Proposal;