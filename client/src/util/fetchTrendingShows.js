const fetchTrendingShows = async (date = "day") => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_TMDB_AUTH_TOKEN,
    },
  };

  try {
    // Fetch TV shows
    const showResponse = await fetch(
      `https://api.themoviedb.org/3/trending/all/${date}?language=en-US`,
      options
    );

    const showData = await showResponse.json();

    // Combine results from shows and movies
    const showsArray = showData.results;

    const filteredShows = showsArray.filter(
      (shows) => shows.media_type !== "person"
    );

    console.log(filteredShows);

    return filteredShows;
  } catch (err) {
    console.error("Error fetching shows:", err);
    return null;
  }
};

export { fetchTrendingShows };
