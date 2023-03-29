import * as React from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { ChangeEvent, FormEvent } from "react";

function App() {
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      title: "Learn ReactJS",
      status: false,
    },
  ]);
  const [hideCompleted, setHideCompleted] = React.useState(false);
  const [newTask, setNewTask] = React.useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: false,
      };
      setTasks((prevTasks) => [...prevTasks, task]);
      setNewTask((prevNewTask) => "");
    }
  };

  const handleInputChange = (e: ChangeEvent) => {
    setNewTask((prevNewTask) => (e.target as HTMLInputElement).value);
  };

  const handleHideCompleted = (e: ChangeEvent) => {
    setHideCompleted(
      (prevHideCompleted) => (e.target as HTMLInputElement).checked
    );
  };

  const setTaskStatus = (taskId: number, status: boolean) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status };
        }
        return task;
      })
    );
  };

  const removeTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <Header title="TODO List" subTitle="Get one item done at a time" />
      <TaskList
        tasks={tasks}
        hideCompleted={hideCompleted}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
        handleHideCompleted={handleHideCompleted}
      />
      <AddTaskForm
        newTask={newTask}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default App;
