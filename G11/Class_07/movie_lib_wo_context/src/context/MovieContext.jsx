import { createContext, useState } from "react";

export const MoviesContext = createContext({
  movies: [],
  handleAddMovie: () => {},
  handleRemoveMovie: () => {},
  handleChangeMovieTitle: () => {},
  handleChangeMovieGenre: () => {},
});

export const MoviesContextProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Harry Potter and the Half Blood Prince",
      genre: "Fantasy",
    },
  ]);

  const [movieTitle, setMovieTitle] = useState("");
  const [movieGenre, setMovieGenre] = useState("");

  const handleChangeMovieTitle = (event) => {
    setMovieTitle(event.target.value);
  };

  const handleChangeMovieGenre = (event) => {
    setMovieGenre(event.target.value);
  };

  const handleRemoveMovie = (movieId) => {
    const remainingMovies = movies.filter((movie) => movie.id !== movieId);

    setMovies(remainingMovies);
  };

  const handleAddMovie = (event) => {
    event.preventDefault();

    const movie = {
      id: Date.now(),
      title: movieTitle,
      genre: movieGenre,
    };

    setMovies([...movies, movie]);
  };

  return (
    <MoviesContext.Provider
      value={{
        movies: movies,
        handleChangeMovieGenre: handleChangeMovieGenre,
        handleChangeMovieTitle: handleChangeMovieTitle,
        handleAddMovie: handleAddMovie,
        handleRemoveMovie: handleRemoveMovie,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};
