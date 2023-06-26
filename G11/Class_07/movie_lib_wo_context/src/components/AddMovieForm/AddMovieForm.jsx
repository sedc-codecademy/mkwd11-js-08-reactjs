export const AddMovieForm = ({
  handleChangeMovieTitle,
  handleChangeMovieGenre,
  handleAddMovie,
}) => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Movie title"
          onChange={handleChangeMovieTitle}
        />
        <input
          type="text"
          placeholder="Movie genre"
          onChange={handleChangeMovieGenre}
        />

        <button onClick={handleAddMovie}>Add Movie</button>
      </form>
    </div>
  );
};
