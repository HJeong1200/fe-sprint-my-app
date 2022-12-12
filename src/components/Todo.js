import { useState } from "react";
import Memo from "./Memo";

function Todo({ todo, todoObj, todoList, setTodoList, myClass }) {
  const [isActive, setIsActive] = useState(todoObj.isActive);
  const [toggleMemo, setToggleMemo] = useState(true);
  const handleDeleteClick = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setTodoList(
        todoList.filter((el) => {
          return el.id !== todoObj.id;
        })
      );
    }
  };

  const handleCheckClick = () => {
    setIsActive(!isActive);

    setTodoList(
      todoList.map((el) => {
        if (el.id === todoObj.id) {
          return { ...el, isActive: !isActive };
        } else {
          return el;
        }
      })
    );
  };

  const handleMemoPopUp = () => {
    setToggleMemo(!toggleMemo);
  };

  return (
    <li className={myClass}>
      <div className="todo">
        <input
          type="checkbox"
          onClick={handleCheckClick}
          defaultChecked={isActive ? true : false}
          className="checkbox"
          id={todoObj.id}
        />
        <label htmlFor={todoObj.id}></label>
        <div className="todo-content">{todo}</div>
        <div className="right-buttons">
          <button className="todo-delete-button" onClick={handleDeleteClick}>
            ✖︎
          </button>
          <button className="memo-button" onClick={handleMemoPopUp}>
            {toggleMemo ? "◀︎" : "▼"}
          </button>
        </div>
      </div>
      <div className="memo" style={{ display: toggleMemo ? "none" : "" }}>
        <Memo todoObj={todoObj} todoList={todoList} setTodoList={setTodoList} />
      </div>
    </li>
  );
}

export default Todo;
