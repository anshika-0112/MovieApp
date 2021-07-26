import { displayMovieInfo } from "./displayMovies.js";
export const getMovieInfo = () => {
  const searchMovie = document.querySelector("input");
  const apiKey = "8af58d6d";
  const url =
    "https://www.omdbapi.com/?i=tt3896198&apikey=" +
    apiKey +
    "&s=" +
    searchMovie.value;
  fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
    .then((response) => {
      displayMovieInfo(response.Search);
    })
    .catch((error) => console.log("catch" + error));
};
