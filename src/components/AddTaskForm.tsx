import React, { ChangeEvent, FormEvent } from "react";

interface Props {
  newTask: string;
  handleSubmit: (e: FormEvent) => void;
  handleInputChange: (e: ChangeEvent) => void;
}

function AddTaskForm({ newTask, handleSubmit, handleInputChange }: Props) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="newItem">Add to the TODO list</label>
      <input
        type="text"
        id="newItem"
        value={newTask}
        onChange={handleInputChange}
      />
      <button type="submit">Add item</button>
    </form>
  );
}

export default AddTaskForm;
