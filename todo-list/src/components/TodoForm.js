import React from 'react';
import { useState } from "react";

export const TodoForm = ({addTodo}) => {
    const [inputValue, setInputValue] = useState("");
    const handleChange = (event) => {
        setInputValue(event.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(inputValue);
        setInputValue("");
      };

      
    return (

<form className="todo-form" onSubmit={handleSubmit}>
          <input
            className="todo-input"
            type="text"
            value={inputValue}
            onChange={(e) => handleChange(e)}
          />
          <button className="todo-btn" type="submit">
            Submit
          </button>
        </form>

    )
  }