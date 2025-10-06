import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  return (
    <ul className="list">
      {tasks.length === 0 ? (
          <li>No tasks available. Please add a task.</li>
      ) : (
          tasks.map(task => (
              <TaskItem key={task.id} task={task} onDelete={onDelete} />
          ))
      )}
    </ul>
  );
}
