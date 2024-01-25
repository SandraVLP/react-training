import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoItem } from "./components/TodoItem";
import { TodoForm } from "./components/TodoForm";
import { EditTodoForm } from "./components/EditTodoForm";

function App() {
  const [todoItems, setTodoItem] = useState([]);

  const deleteTodoItem = (id) => setTodoItem(todoItems.filter((todo) => todo.id !== id));

  const editTodoItem = (id) => {
    setTodoItem(
      todoItems.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing} : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodoItem(
      todoItems.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };


  const addTodo = (todo) => {
    setTodoItem([...todoItems, { id: uuidv4(), task: todo }]);
    console.log(todoItems);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">TODO List</h1>
        <TodoForm addTodo={addTodo} />
        {todoItems.map((todo, index) => todo.isEditing ? (
          <EditTodoForm editTask={editTask} task={todo} />
        ) :(
          <TodoItem key={index} task={todo} deleteTodoItem={deleteTodoItem} editTodoItem={editTodoItem}/>
        ))}
      </div>
    </div>
  );
}

export default App;
