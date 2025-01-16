import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function HeroFeatured() {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const shows = useSelector((state) => state.allShows.allShowsArray);
  const [featuredShow, setFeaturedShow] = useState(null);

  useEffect(() => {
    if (shows && shows.length !== 0) {
      setFeaturedShow(shows[0]);
    }

    console.log(shows);
  }, [shows]);

  return (
    <div className="hero__featured flex max__w justify__center align__center">
      <Link to={""} className="featured__poster flex__1">
        {featuredShow ? (
          <img
            src={featuredShow ? baseUrl + featuredShow.poster_path : ""}
            alt="movie poster"
            className="max__w max__h"
          />
        ) : (
          <div className="loading__skeleton max__w max__h"></div>
        )}
      </Link>
      <div className="featured__details flex flex__column flex__1">
        <div className="title__rating">
          <Link to={""} className="featured__title">
            {featuredShow ? featuredShow.title : ""}
          </Link>
          <p className="featured__rating">
            {featuredShow ? `${featuredShow.vote_average.toFixed(1)}/10` : ""}
          </p>
        </div>

        <p className="featured__desc">
          {featuredShow ? featuredShow.overview : ""}
        </p>
      </div>
    </div>
  );
}

export default HeroFeatured;
