import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { fetchTasks } from "./services/api";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTasks = async () => {
      try {
        setLoading(true);
        const allTasks = await fetchTasks();
        setTasks(allTasks);
      } catch (err) {
        setError("Failed to load tasks. Please refresh the page.");
      } finally {
        setLoading(false);
      }
    };
    
    loadTasks();
  }, []);

  const updateTaskList = (task) => {
    if (Array.isArray(task)) {
      // If we get an array of tasks, use that as the new state
      setTasks(task);
    } else {
      // If we get a single task, add it to the existing tasks
      setTasks((prev) => [...prev, task]);
    }
  };

  const deleteTaskFromList = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <header>
        <h1>Todo List</h1>
        <p className="subtitle">Keep track of your tasks and stay organized</p>
      </header>
      
      {error && <div className="error">{error}</div>}
      
      <AddTask updateTaskList={updateTaskList} />
      
      {loading ? (
        <div className="tasks-container loading">Loading tasks...</div>
      ) : (
        <TaskList tasks={tasks} deleteTaskFromList={deleteTaskFromList} />
      )}
    </div>
  );
};

export default App;