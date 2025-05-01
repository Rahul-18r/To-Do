import React, { useState } from "react";
import { createTask, fetchTasks } from "../services/api";

const AddTask = ({ updateTaskList }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (title.trim() === "") {
      setError("Task title cannot be empty!");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const newTask = { title, description };
      const response = await createTask(newTask);
      
      // Since your backend returns a string response instead of the created task object
      if (response || response.includes("Created")) {
        // Fetch all tasks to get the updated list including the new task
        const allTasks = await fetchTasks();
        updateTaskList(allTasks[allTasks.length - 1]); // Use the last task as the new one
        
        // Clear input fields after successful task creation
        setTitle("");
        setDescription("");
      } else {
        setError("Failed to add task. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="add-task-form">
      <h2 className="form-title">
        <span role="img" aria-label="Add">➕</span> New Task
      </h2>
      
      {error && <div className="error">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isSubmitting}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description (optional)</label>
          <textarea
            id="description"
            placeholder="Add details about this task..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={isSubmitting}
          />
        </div>
        
        <button 
          type="submit" 
          className="btn" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Adding...' : 'Add Task'}
        </button>
        
      </form>
    </div>
  );
};

export default AddTask;