import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const TodoItem = ({ task, deleteTodoItem }) => {
  return ( <div className="todo-container">
  <p className="task">{task.task}</p>
  <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} />
  <FontAwesomeIcon className="delete-icon" icon={faTrash}  onClick={() => deleteTodoItem(task.id)}/>
  </div>
  )
};
