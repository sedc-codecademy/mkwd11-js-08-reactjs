import { AddMovieForm } from "../AddMovieForm/AddMovieForm";
import { MovieCard } from "../MoviesCard/MovieCards";

export const MoviesList = ({
  movies,
  handleRemoveMovie,
  handleChangeMovieTitle,
  handleChangeMovieGenre,
  handleAddMovie,
}) => {
  return (
    <div>
      <AddMovieForm
        handleChangeMovieGenre={handleChangeMovieGenre}
        handleChangeMovieTitle={handleChangeMovieTitle}
        handleAddMovie={handleAddMovie}
      />
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          genre={movie.genre}
          id={movie.id}
          handleRemoveMovie={handleRemoveMovie}
        />
      ))}
    </div>
  );
};
