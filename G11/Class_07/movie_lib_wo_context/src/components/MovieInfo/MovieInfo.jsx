export const MovieInfo = (props) => {
  console.log(props);

  return (
    <>
      <h2>Movie info component</h2>
      {props.children}
    </>
  );
};
