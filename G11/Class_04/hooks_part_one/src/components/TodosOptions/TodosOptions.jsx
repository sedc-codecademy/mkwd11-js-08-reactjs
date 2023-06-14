// Destucturing the props
export const TodosOptions = ({ handleChangeTodoTitle, handleAddTodo }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Add todo title"
        onChange={(event) => handleChangeTodoTitle(event.target.value)}
      />
      <button onClick={handleAddTodo}>Add todo</button>
    </div>
  );
};
