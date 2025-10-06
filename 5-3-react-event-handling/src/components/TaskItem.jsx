import React from "react";

export default function TaskItem({ task, onDelete }) {
  return (
    <li className="item">
      {/* Task 2 – Display Task Text */}
      <span className="item__text">{task.text}</span>

      {/* Task 3 – Delete Button */}
      <div className="item__actions">
        <button
          className="iconBtn iconBtn--danger"
          aria-label="Delete task"
          title="Delete"
          onClick={() => onDelete(task.id)}
        >
          🗑️
        </button>
      </div>
    </li>
  );
}
