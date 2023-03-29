import React, { ChangeEvent } from "react";
import TaskItem from "./TaskItem";

interface Props {
  tasks: {
    id: number;
    title: string;
    status: boolean;
  }[];
  hideCompleted: boolean;
  setTaskStatus: (id: number, status: boolean) => void;
  removeTask: (id: number) => void;
  handleHideCompleted: (e: ChangeEvent) => void;
}

function TaskList({
  tasks,
  hideCompleted,
  setTaskStatus,
  removeTask,
  handleHideCompleted,
}: Props) {
  return (
    <>
      <ul className="task-list">
        {tasks
          .filter((task) => (hideCompleted ? !task.status : true))
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              setTaskStatus={setTaskStatus}
              removeTask={removeTask}
            />
          ))}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Hide completed tasks
        </label>
        <input
          type="checkbox"
          id="filter"
          checked={hideCompleted}
          onChange={handleHideCompleted}
        />
      </div>
    </>
  );
}

export default TaskList;
