import { useContext } from "react";
import { MoviesContext } from "../../context/MovieContext";

export const MovieCardControlls = ({ id }) => {
  const { handleRemoveMovie } = useContext(MoviesContext);

  return (
    <div>
      <button onClick={() => handleRemoveMovie(id)}>Remove Movie</button>
    </div>
  );
};
