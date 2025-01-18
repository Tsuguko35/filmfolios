const fetchPopularShow = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_TMDB_AUTH_TOKEN,
    },
  };

  // format date as YYYY-MM-DD
  const formatDate = (date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;

  // Get today's date and one month before
  const today = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  const startDate = formatDate(oneMonthAgo);
  const endDate = formatDate(today);

  try {
    // Fetch TV shows
    const showResponse = await fetch(
      `https://api.themoviedb.org/3/discover/tv?first_air_date.gte=${startDate}&first_air_date.lte=${endDate}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`,
      options
    );

    // Fetch Movies
    const movieResponse = await fetch(
      `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
      options
    );

    const showData = await showResponse.json();
    const movieData = await movieResponse.json();

    // Combine results from shows and movies
    const showsArray = [...showData.results, ...movieData.results];

    // Find the most popular show/movie
    const popularShow = showsArray.reduce((max, obj) =>
      obj.popularity > max.popularity ? obj : max
    );
    return popularShow;
  } catch (err) {
    console.error("Error fetching shows:", err);
    return null;
  }
};

export { fetchPopularShow };
