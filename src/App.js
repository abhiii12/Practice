// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutHer from "./components/AboutHer";
import Relationship from "./components/Relationship";
import Firsts from "./components/Firsts";
import Promises from "./components/Promises";
import ThingsICallHer from "./components/ThingsICallHer";
import ThingsSheCallsMe from "./components/ThingsSheCallsMe";
import ThingsSheLikes from "./components/ThingsShelikes";
import ThingsSheDislikes from "./components/ThingsSheDislikes";
import ThingsILoveAboutHer from "./components/ThingsILoveAboutHer";
import ThingsAboutHerBody from "./components/ThingsAboutHerBody";
import PhotoGallery from "./components/PhotoGallery";
import Proposal from "./components/Proposal";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-her" element={<AboutHer />} />
        <Route path="/relationship" element={<Relationship />} />
        <Route path="/firsts" element={<Firsts />} />
        <Route path="/promises" element={<Promises />} />
        <Route path="/things-i-call-her" element={<ThingsICallHer />} />
        <Route path="/things-she-calls-me" element={<ThingsSheCallsMe />} />
        <Route path="/things-she-likes" element={<ThingsSheLikes />} />
        <Route path="/things-she-dislikes" element={<ThingsSheDislikes />} />
        <Route path="/things-i-love-about-her" element={<ThingsILoveAboutHer />} />
        <Route path="/things-about-her-body" element={<ThingsAboutHerBody />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        <Route path="/proposal" element={<Proposal />} />
      </Routes>
    </Router>
  );
}

export default App;
