import React from "react";

interface Props {
  task: {
    id: number;
    title: string;
    status: boolean;
  };
  setTaskStatus: (id: number, status: boolean) => void;
  removeTask: (id: number) => void;
}

function TaskItem({ task, setTaskStatus, removeTask }: Props) {
  return (
    <li key={task.id} className={task.status ? "done" : ""}>
      <span className="label">{task.title}</span>
      <div className="actions">
        <input
          type="checkbox"
          className="btn-action btn-action-done"
          checked={task.status}
          onChange={(e) => setTaskStatus(task.id, e.target.checked)}
        />
        <button
          className="btn-action btn-action-delete"
          onClick={() => removeTask(task.id)}
        >
          ❌
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
