import { useContext } from "react";
import { AddMovieForm } from "../AddMovieForm/AddMovieForm";
import { MovieInfo } from "../MovieInfo/MovieInfo";
import { MovieCard } from "../MoviesCard/MovieCards";
import { MoviesContext } from "../../context/MovieContext";

export const MoviesList = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <div>
      <MovieInfo>
        {/* this jsx between the opening and closing tag
        will be children in props
        to acess them we do props.children
         */}
        <div>
          <h4>Some additional application info</h4>
          <h2>Hello world</h2>
        </div>
      </MovieInfo>

      <AddMovieForm />

      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          genre={movie.genre}
          id={movie.id}
        />
      ))}
    </div>
  );
};
