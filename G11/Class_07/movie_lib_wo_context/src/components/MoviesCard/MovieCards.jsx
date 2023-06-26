import { MovieCardControlls } from "../MovieCardControlls/MovieCardControlls";

export const MovieCard = ({ title, genre, id, handleRemoveMovie }) => {
  return (
    <div>
      <h2>Title: {title}</h2>
      <h2>Genre: {genre}</h2>

      <MovieCardControlls id={id} handleRemoveMovie={handleRemoveMovie} />
    </div>
  );
};
