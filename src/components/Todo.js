import React from "react";
import { FaTimes } from "react-icons/fa";

const Todo = ({ text, day, onDelete, id, onUpdateTodo, reminder }) => {
  return (
    <div>
      <div
        className={`todo ${reminder ? "updateTodo" : ""}`}
        onDoubleClick={() => onUpdateTodo(id)}
      >
        <div>
          <h4>{text}</h4>
          <span>{day}</span>
        </div>
        <FaTimes
          style={{ cursor: "pointer", color: "#c92a2a" }}
          onClick={() => onDelete(id)}
        />
      </div>
    </div>
  );
};

export default Todo;
