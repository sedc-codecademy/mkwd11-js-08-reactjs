export const Todo = (props) => {
  // console.log(props);

  return (
    <div style={{ border: "1px solid orange" }}>
      <h3>Title: {props.title} </h3>
      <p>{props.isDone ? "Todo is done" : "Todo is not done"} </p>
      <button onClick={() => props.handleRemoveTodo(props.id)}>Remove</button>
      <button onClick={() => props.handleFinishTodo(props.id)}>Finish</button>
    </div>
  );
};
