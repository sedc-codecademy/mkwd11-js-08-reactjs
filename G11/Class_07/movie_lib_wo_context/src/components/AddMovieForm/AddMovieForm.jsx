import { useContext } from "react";
import { MoviesContext } from "../../context/MovieContext";

export const AddMovieForm = () => {
  const context = useContext(MoviesContext);
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Movie title"
          onChange={context.handleChangeMovieTitle}
        />
        <input
          type="text"
          placeholder="Movie genre"
          onChange={context.handleChangeMovieGenre}
        />

        <button onClick={context.handleAddMovie}>Add Movie</button>
      </form>
    </div>
  );
};
