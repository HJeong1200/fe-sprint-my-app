import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = function () {
  const [todo, setTodo] = useState(["밥먹기", "코딩하기"]);

  const onKeyDown = (e) => {
    if (window.event.keyCode === 13) {
      let newTodo = e.target.value;
      setTodo([newTodo, ...todo]);
      e.target.value = "";
    }
  };

  return (
    <div className="todo-wrapper">
      <ul className="todo-list">
        {todo.map((el, idx) => {
          return <Todo todo={todo} idx={idx} key={idx} />;
        })}
      </ul>
      <input
        className="todo-input"
        placeholder="할일 추가하기"
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default TodoList;
