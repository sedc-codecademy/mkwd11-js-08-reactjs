import { useState } from "react";
import { MoviesList } from "./components/MoviesList/MoviesList";

function App() {
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
    <>
      <MoviesList
        movies={movies}
        handleRemoveMovie={handleRemoveMovie}
        handleChangeMovieGenre={handleChangeMovieGenre}
        handleChangeMovieTitle={handleChangeMovieTitle}
        handleAddMovie={handleAddMovie}
      />
    </>
  );
}

export default App;
