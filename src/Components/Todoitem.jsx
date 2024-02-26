import React from "react";
import { useModal } from "../Hooks/useModal";
import { useTodo } from "../Hooks/useTodo";

function Todoitem(props) {
  const { openModal } = useModal();
  const { updateSelectedId, initialState } = useTodo();

  const { id, title, description, done, order, onChangeDone, onDelete } = props;

  const handleItemClick = () => {
    updateSelectedId(id);
    openModal("ModalModify");
    initialState.inputs.title = title;
    initialState.inputs.description = description;
  };

  return (
    <div>
      <span onClick={handleItemClick}>{title}</span>
      <span>{description}</span>
      <span onClick={onChangeDone}>{done ? "완료" : "미완료"}</span>
      <button onClick={onDelete}>삭제</button>
    </div>
  );
}

export default Todoitem;
