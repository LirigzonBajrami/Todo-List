import React, { useState } from "react";

const AddTodoForm = ({ onAddTodo }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    // Validation
    if (!text) {
      alert("Please enter your todo");
      return;
    }

    const todo = {
      id: Math.floor(Math.random() * 10000) + 1,
      text: text,
      day: day,
      reminder: reminder,
    };

    onAddTodo(todo);

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form onSubmit={submitHandler} className="form-container">
      <div className="input-form">
        <span>Todo</span>
        <input
          type="text"
          placeholder="What do you want  to do."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="input-form">
        <span>Day</span>
        <input
          type="text"
          placeholder="Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="input-form checkbox">
        <span>Set Reminder</span>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <button className="submit-button">Save</button>
    </form>
  );
};

export default AddTodoForm;
