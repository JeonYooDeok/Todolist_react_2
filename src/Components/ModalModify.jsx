import React from "react";
import { useTodo } from "../Hooks/useTodo";

function ModalModify() {
  const { title, description, onChange, modifyTodo } = useTodo();
  return (
    <>
      <h1>할 일 수정</h1>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="제목"
        onChange={onChange}
      />
      <textarea
        type="text"
        name="description"
        value={description}
        placeholder="설명"
        onChange={onChange}
      />
      <button onClick={modifyTodo}>수정</button>
    </>
  );
}

export default ModalModify;
