import { useSelector } from "react-redux";

export const Movies = () => {
  const movies = useSelector((state) => state.movieReducer.movies);

  return (
    <div>
      <hr />
      <br />
      <h2>Movies list:</h2>

      {movies.length ? (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <h3>Movie title is: {movie.title}</h3>
            </div>
          ))}
        </div>
      ) : (
        <div>No movies yet, amigo</div>
      )}
    </div>
  );
};
