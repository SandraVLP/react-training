import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoItem } from "./components/TodoItem";
import { TodoForm } from "./components/TodoForm";

function App() {
  const [todoItems, setTodoItem] = useState([]);


  const addTodo = (todo) => {
    setTodoItem([...todoItems, { id: uuidv4(), task: todo }]);
    console.log(todoItems);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">TODO List</h1>
        <TodoForm addTodo={addTodo} />
        <div className="todo-list"></div>
        {/* {todoItems.map((todo, index) => (
          <TodoItem key={index} task={todo} />
        ))} */}
      </div>
    </div>
  );
}

export default App;
