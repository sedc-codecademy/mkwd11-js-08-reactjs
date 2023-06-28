import { useDispatch, useSelector } from "react-redux";

export const AddMovie = () => {
  const dispatch = useDispatch();
  const movieName = useSelector((state) => state.movieReducer.movieName);

  const handleChangeMovieName = (event) => {
    dispatch({ type: "SET_MOVIE_NAME", payload: event.target.value });
  };

  const handleAddMovie = () => {
    const movie = {
      id: Date.now(),
      title: movieName,
    };

    dispatch({ type: "ADD_MOVIE", payload: movie });
  };
  return (
    <div>
      <input
        onChange={handleChangeMovieName}
        type="text"
        placeholder="Add movie name"
        value={movieName}
      />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};
