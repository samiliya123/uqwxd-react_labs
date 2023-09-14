import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";



function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

 useEffect(() => {
  if (todos.length > 0) {
         localStorage.setItem('todos', JSON.stringify(todos))
  }
    
 }, [todos])
  
 
  

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const newTodo = {

      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
      
    };

    if (newTodo.text.length > 0) {
      setTodos([...todos, newTodo]);
      setTodo("");
    } else {
      alert("Enter valid task");
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
     
    setTodos(updatedTodos);
     
  };

  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const submitEdits = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editingText } : todo
    );
    setTodos(updatedTodos);
    setTodoEditing(null);
    setEditingText("");
  };

  return (
    <>
    <Sidebar/>
    <div className="App">
      <h1>Todo List</h1>
      <form className="container" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="Enter your task"
        />
        <button type="submit">Add Todo</button>
      </form>
      <div>
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <div>
              {todo.id === todoEditing ? (
                <input
                  type="text"
                   value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
              ) : (
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
              )}
            </div>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            {todo.id === todoEditing ? (
              <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
            ) : (
              <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
            )}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
//07088321242
//ewa
 

export default App;
