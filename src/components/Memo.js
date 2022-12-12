import React, { useState } from "react";

const Memo = ({ todoObj, todoList, setTodoList }) => {
  const [memo, setMemo] = useState("");
  const handleMemoChange = (e) => {
    let myMemo = e.target.value;

    setMemo(myMemo);
    setTodoList(
      todoList.map((el) => {
        if (el.id === todoObj.id) {
          return { ...el, memo: myMemo };
        } else {
          return el;
        }
      })
    );
  };

  return (
    <textarea
      onChange={handleMemoChange}
      defaultValue={todoObj.memo}
    ></textarea>
  );
};

export default Memo;
