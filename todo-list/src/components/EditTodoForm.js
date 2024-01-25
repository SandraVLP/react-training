import React from 'react';
import { useState } from "react";

export const EditTodoForm = ({editTask, task}) => {
    const [inputValue, setInputValue] = useState(task.task);
    const handleChange = (event) => {
        setInputValue(event.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        editTask(inputValue, task.id);

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