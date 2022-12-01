import React from "react";

const Button = ({ onShowForm, text, color }) => {
  return (
    <button
      className="button"
      style={{ backgroundColor: color }}
      onClick={onShowForm}
    >
      {text}
    </button>
  );
};

export default Button;
