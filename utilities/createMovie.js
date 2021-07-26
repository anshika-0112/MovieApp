export const createMovieInfo = (movie) => {
  const customMovieInfo = {
    title: movie.Title,
    image: movie.Poster,
    type: movie.Type,
    year: movie.Year,
  };
  return createMovieTemplates(customMovieInfo);
};
export const createMovieTemplates = (customMovieInfo) => {
  const movieBlock = document.createElement("div");
  movieBlock.className = "movieBlock";
  const movieImage = document.createElement("img");
  movieImage.className = "movieImage";
  movieImage.src = customMovieInfo.image;
  const movieTitle = document.createElement("h3");
  movieTitle.className = "movieTitle";
  movieTitle.innerHTML = customMovieInfo.title;
  movieBlock.appendChild(movieImage);
  movieBlock.appendChild(movieTitle);
  return movieBlock;
};
