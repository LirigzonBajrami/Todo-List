import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, onDelete, onUpdateTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          day={todo.day}
          onDelete={onDelete}
          onUpdateTodo={onUpdateTodo}
          reminder={todo.reminder}
        />
      ))}
    </div>
  );
};

export default Todos;
