import React from "react";

function Task({ task, onDeleteTask }) {
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={() => onDeleteTask(task.text)} className="delete">X</button>
    </div>
  );
}

export default Task;
