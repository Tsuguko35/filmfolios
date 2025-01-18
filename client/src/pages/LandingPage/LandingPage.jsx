import React from "react";
import LandingHero from "./components/LandingHero";
import "./landingpage.css";
import TrendingShows from "./components/TrendingShows";

function LandingPage() {
  return (
    <>
      {/* Landing Hero  */}
      <LandingHero />

      {/* Trending Shows/Movies */}
      <TrendingShows />
    </>
  );
}

export default LandingPage;
