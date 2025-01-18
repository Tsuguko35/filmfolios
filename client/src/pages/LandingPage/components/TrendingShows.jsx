import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTrendingShows } from "../../../util/fetchTrendingShows";
import { tmdbBasePosterURL } from "../../../constant/constants";
import { formatDate } from "../../../util/formatDate";

function TrendingShows() {
  const [date, setDate] = useState("day");
  const [showsArray, setShowsArray] = useState([]);

  const getShows = async () => {
    setShowsArray([]);
    const shows = await fetchTrendingShows(date);
    if (shows) setShowsArray(shows);
  };

  useEffect(() => {
    getShows();
  }, [date]);

  return (
    <section className="trending_content container flex flex__column align__center">
      {/* Title  */}
      <h1 className="section__title text__center p__relative">
        Trending Shows/Movies
      </h1>
      {/* Selector  */}
      <div className="trending_selector max__w flex justify__center">
        <div
          className={`${date === "day" ? "active" : ""}`}
          onClick={() => setDate("day")}>
          Today
        </div>
        <div
          className={`${date === "week" ? "active" : ""}`}
          onClick={() => setDate("week")}>
          This Week
        </div>
      </div>
      {/* Shows/Movies  */}
      <div className="shows__container flex align__center max__w">
        {showsArray && showsArray.length !== 0 ? (
          <>
            {showsArray.map((show) => (
              <div className="show__card flex flex__column justify__center align__center">
                <Link to={""} className="card__poster">
                  <img
                    src={tmdbBasePosterURL + show.poster_path}
                    alt="shows poster"
                  />
                </Link>
                <Link className="show__title">{show.title || show.name}</Link>
                <span className="date">
                  {formatDate(show.release_date || show.first_air_date)}
                </span>
              </div>
            ))}
          </>
        ) : (
          <div className="show__card flex flex__column justify__center align__center">
            <Link to={""} className="card__poster">
              <div className="max__w max__h loading__skeleton2"></div>
              {/* <img src="" alt="shows poster" /> */}
            </Link>
            <Link className="show__title">
              titleasdasdasdasdsasdasdasdasdasdasd
            </Link>
            <span className="date">Januray 18, 2025</span>
          </div>
        )}
      </div>
    </section>
  );
}

export default TrendingShows;
