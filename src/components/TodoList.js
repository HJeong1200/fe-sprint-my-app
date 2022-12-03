import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import { nanoid } from "nanoid";

const TodoList = function () {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("myTodo")) || []
  );

  useEffect(() => {
    localStorage.setItem("myTodo", JSON.stringify(todoList));
  }, [todoList]);

  const onKeyDown = (e) => {
    if (window.event.keyCode === 13) {
      let newTodo = e.target.value;
      setTodoList([
        ...todoList,
        { id: nanoid(), todo: newTodo, isActive: false },
      ]);
      e.target.value = "";
    }
  };

  return (
    <div className="todo-wrapper">
      <ul className="todo-list">
        {todoList.map((el, idx) => {
          if (idx % 2) {
            return (
              <Todo
                key={el.id}
                todo={el.todo}
                todoObj={el}
                todoList={todoList}
                setTodoList={setTodoList}
                myClass="inverted"
              />
            );
          } else {
            return (
              <Todo
                key={el.id}
                todo={el.todo}
                todoObj={el}
                todoList={todoList}
                setTodoList={setTodoList}
                myClass=""
              />
            );
          }
        })}
      </ul>
      <div className="input-wrapper">
        <button>+</button>
        <input
          id="todo-input"
          className="todo-input"
          placeholder="할일 추가하기"
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );
};

export default TodoList;
