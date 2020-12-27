import React from "react";

export const Task = ({ task, onCheckboxClick, onDeleteClick }) => {
  return (
    <div>
      <li className="task">
        <input
          type="checkbox"
          checked={!!task.isChecked}
          onClick={() => onCheckboxClick(task)}
          readOnly
        />
        {task.text}
        <button onClick={() => onDeleteClick(task)}>&times;</button>
      </li>
    </div>
  );
};
