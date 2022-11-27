function Todo({ todo, idx, setTodo }) {
  const handleDeleteClick = () => {
    setTodo(
      todo.filter((el, index) => {
        return idx !== index;
      })
    );
  };

  return (
    <li>
      {todo[idx]}
      <button onClick={handleDeleteClick}>x</button>
    </li>
  );
}

export default Todo;
