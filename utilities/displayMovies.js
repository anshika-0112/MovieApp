import { createMovieInfo } from "./createMovie.js";
export const displayMovieInfo = (movieInfo) => {
  const movieList = document.getElementById("movieList");
  movieList.innerHTML = "";
  movieInfo.forEach((movie) => {
    movieList.appendChild(createMovieInfo(movie));
  });
};
