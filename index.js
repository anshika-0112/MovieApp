import { getMovieInfo } from "./utilities/getMoviesInfo.js";

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", getMovieInfo);
