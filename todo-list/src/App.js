import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoItem } from "./components/TodoItem";
import { TodoForm } from "./components/TodoForm";

function App() {
  const [todoItems, setTodoItem] = useState([]);

  const deleteTodoItem = (id) => setTodoItem(todoItems.filter((todo) => todo.id !== id));


  const addTodo = (todo) => {
    setTodoItem([...todoItems, { id: uuidv4(), task: todo }]);
    console.log(todoItems);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">TODO List</h1>
        <TodoForm addTodo={addTodo} />
        {todoItems.map((todo, index) => (
          <TodoItem key={index} task={todo} deleteTodoItem={deleteTodoItem}/>
        ))}
      </div>
    </div>
  );
}

export default App;
