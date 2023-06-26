export const MovieCardControlls = ({ handleRemoveMovie, id }) => {
  return (
    <div>
      <button onClick={() => handleRemoveMovie(id)}>Remove Movie</button>
    </div>
  );
};
