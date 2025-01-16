const fetchShows = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.TMDB_AUTH_TOKEN,
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc",
      options
    );
    const data = await response.json();
    return data.results; // Return the results array
  } catch (err) {
    console.error("Error fetching shows:", err);
    return []; // Return an empty array if there is an error
  }
};

export { fetchShows };
