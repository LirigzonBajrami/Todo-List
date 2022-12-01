import { useState, useEffect } from "react";
import AddTodoForm from "./components/AddTodoForm";
import Header from "./components/Header";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const getTodos = async () => {
      const todosFromServer = await fetchTodos();
      setTodos(todosFromServer);
    };
    getTodos();
  }, []);

  // GET Todos
  const fetchTodos = async () => {
    const res = await fetch("http://localhost:5000/todos");
    const data = await res.json();
    return data;
  };

  // GET single todo
  const fetchTodo = async (id) => {
    const res = await fetch(`http://localhost:5000/todos/${id}`);
    const data = await res.json();
    return data;
  };

  // Delete Todo
  const deleteTodo = async (id) => {
    await fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
    });
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Add todo
  const addTodo = async (todo) => {
    const res = await fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(todo),
    });

    const data = await res.json();

    setTodos([...todos, data]);
  };

  // Update Todo
  const updateTodo = async (id) => {
    const todoToToggle = await fetchTodo(id);
    const updatedTodo = { ...todoToToggle, reminder: !todoToToggle.reminder };

    const res = await fetch(`http://localhost:5000/todos/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updatedTodo),
    });

    const data = await res.json();

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, reminder: data.reminder } : todo
      )
    );
  };

  const showFormHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container">
      <Header onShowForm={showFormHandler} onAdd={showForm} />
      {showForm && <AddTodoForm onAddTodo={addTodo} />}
      <Todos todos={todos} onDelete={deleteTodo} onUpdateTodo={updateTodo} />
    </div>
  );
};

export default App;
