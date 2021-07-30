import { createMovieInfo } from "./createMovie.js";
export const displayMovieInfo = (movieInfo) => {
  const movieList = document.getElementById("movieList");
  movieList.innerHTML = "";
  movieInfo.forEach((movie) => {
    if (movie.Poster !== "N/A") movieList.appendChild(createMovieInfo(movie));
  });
};
