import { displayMovieInfo } from "./displayMovies.js";
export const getMovieInfo = async () => {
  const searchMovie = document.querySelector("input");
  const noMovieFound = document.getElementById("movieNotFound");
  const movieList = document.getElementById("movieList");
  const apiKey = "8af58d6d";
  const url =
    "https://www.omdbapi.com/?i=tt3896198&apikey=" +
    apiKey +
    "&s=" +
    searchMovie.value;
  const movieResponse = await fetch(url).catch((error) => console.log(error));
  if (movieResponse.status >= 200 && movieResponse.status <= 299) {
    const movieInfo = await movieResponse.json();
    if (movieInfo.Response !== "False") {
      noMovieFound.style.display = "none";
      displayMovieInfo(movieInfo.Search);
    } else {
      movieList.innerHTML = "";
      noMovieFound.style.display = "block";
    }
    console.log(movieInfo);
  }
};
