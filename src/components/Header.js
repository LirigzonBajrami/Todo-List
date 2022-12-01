import React from "react";
import Button from "./Button";

const Header = ({ onShowForm, onAdd }) => {
  return (
    <div className="header">
      <h2>Todo List</h2>
      <Button
        onShowForm={onShowForm}
        text={onAdd ? "-" : "+"}
        color={onAdd ? "#c92a2a" : "#1098ad"}
      />
    </div>
  );
};

export default Header;
