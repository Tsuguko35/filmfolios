import React, { useEffect, useState } from "react";
import trailerDemo from "../../../assets/images/Trailer.mp4";
import HeroSearch from "./HeroSearch";
import HeroFeatured from "./HeroFeatured";
import { useSelector } from "react-redux";
import { tmdbBasePosterURL } from "../../../constant/constants";

function LandingHero() {
  const shows = useSelector((state) => state.allShows.allShowsArray);
  const [featuredShow, setFeaturedShow] = useState(null);

  useEffect(() => {
    if (shows && shows.length !== 0) {
      setFeaturedShow(shows);
    }
  }, [shows]);

  return (
    <section className="landing__hero p__relative">
      <div className="video__container p__absolute max__w">
        {featuredShow && featuredShow.video ? (
          <video className="hero__video max__w" autoPlay muted loop>
            <source src={trailerDemo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <>
            {featuredShow && (
              <img
                className="hero__image"
                src={`${tmdbBasePosterURL + featuredShow.poster_path}`}
                alt="show poster"
              />
            )}
          </>
        )}
      </div>
      <div className="landing__hero__content container flex align__center max__h">
        <div className="hero__title__search flex flex__column justify__center flex__1 max__h">
          <div className="hero__title flex flex__column">
            <h2>Welcome</h2>
            <h3>Browse FilmFolio for Movies, Shows, and More</h3>
          </div>

          {/* Hero Search  */}
          <HeroSearch />
        </div>
        <div className="flex flex__1">
          {featuredShow ? <HeroFeatured featuredShow={featuredShow} /> : ""}
        </div>
      </div>
    </section>
  );
}

export default LandingHero;
