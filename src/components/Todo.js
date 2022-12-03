import { useState } from "react";
import Timer from "./Timer";
import { useStopwatch } from "react-timer-hook";

function Todo({ todo, todoObj, todoList, setTodoList, myClass }) {
  const { seconds, minutes, isRunning, start, pause } = useStopwatch({
    autoStart: false,
  });
  const [isActive, setIsActive] = useState(todoObj.isActive);
  const handleDeleteClick = () => {
    setTodoList(
      todoList.filter((el) => {
        return el.id !== todoObj.id;
      })
    );
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

  return (
    <li className={myClass}>
      <input
        type="checkbox"
        onClick={handleCheckClick}
        defaultChecked={isActive ? true : false}
      />
      <div className="todo-content">{todo}</div>
      <Timer
        seconds={seconds}
        minutes={minutes}
        isRunning={isRunning}
        start={start}
        pause={pause}
      />
      <button className="todo-delete-button" onClick={handleDeleteClick}>
        x
      </button>
    </li>
  );
}

export default Todo;
