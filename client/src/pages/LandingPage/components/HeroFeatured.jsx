import { Link } from "react-router-dom";
import { tmdbBasePosterURL } from "../../../constant/constants";

function HeroFeatured({ featuredShow }) {
  const showDetails = {
    title: featuredShow.title || featuredShow.name,
  };
  return (
    <div className="feature__content flex flex__column max__w">
      <h3>Hot Right Now</h3>

      <div className="hero__featured flex max__w justify__center align__center">
        <Link to={""} className="featured__poster flex__1">
          {featuredShow ? (
            <img
              src={
                featuredShow ? tmdbBasePosterURL + featuredShow.poster_path : ""
              }
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
              {featuredShow ? showDetails.title : ""}
            </Link>
            <p className="featured__rating">
              {featuredShow
                ? `${featuredShow.vote_average.toFixed(1)}/10 from ${
                    featuredShow.vote_count
                  } votes`
                : ""}
            </p>
          </div>

          <p className="featured__desc">
            {featuredShow ? featuredShow.overview : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroFeatured;
