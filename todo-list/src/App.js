import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoItem } from "./components/TodoItem";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItem] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  };

  const addTodo = (todo) => {
    setTodoItem([...todoItems, { id: uuidv4(), task: todo }]);
    console.log(todoItems);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">TODO List</h1>
        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            className="todo-input"
            type="text"
            value={inputValue}
            onChange={() => handleChange()}
          />
          <button className="todo-btn" type="submit">
            Submit
          </button>
        </form>
        <div className="todo-list"></div>
        {todoItems.map((todo, index) => (
          <TodoItem key={index} task={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
