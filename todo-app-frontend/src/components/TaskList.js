import React, { useState } from "react";
import { deleteTask } from "../services/api";

const TaskList = ({ tasks, deleteTaskFromList }) => {
  const [deletingIds, setDeletingIds] = useState([]);
  const [error, setError] = useState("");
  const [showTasks, setShowTasks] = useState(false);

  const handleDelete = async (id) => {
    setError("");
    setDeletingIds(prev => [...prev, id]);
    
    try {
      const response = await deleteTask(id);
      if (response && response.includes("Deleted")) {
        deleteTaskFromList(id);
      } else {
        setError("Failed to delete task. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while deleting the task.");
    } finally {
      setDeletingIds(prev => prev.filter(itemId => itemId !== id));
    }
  };

  const toggleTaskVisibility = () => {
    setShowTasks(prev => !prev);
  };

  // Filter out any tasks with empty titles
  const validTasks = tasks ? tasks.filter(task => task && task.title) : [];

  return (
    <div className="tasks-container">
      {error && <div className="error">{error}</div>}
      
      <div className="task-list-header">
        <h2 className="form-title">My Tasks</h2>
        <button 
          className="btn btn-toggle"
          onClick={toggleTaskVisibility}
        >
          {showTasks ? 'Hide Tasks' : 'Show Tasks'}
        </button>
      </div>
      
      {showTasks && (
        <div className="task-count-display">
          <span className="task-count">{validTasks.length} task{validTasks.length !== 1 ? 's' : ''}</span>
        </div>
      )}
      
      {showTasks && (
        <div className="task-list">
          {validTasks.length === 0 ? (
            <p className="empty">You have no tasks yet. Add a new task to get started!</p>
          ) : (
            validTasks.map((task) => (
              <div key={task.id} className="task-item">
                <div className="task-content">
                  <h3 className="task-title">{task.title}</h3>
                  {task.description && <p className="task-description">{task.description}</p>}
                </div>
                
                <div className="task-actions">
                  <button 
                    onClick={() => handleDelete(task.id)} 
                    className="btn btn-delete"
                    disabled={deletingIds.includes(task.id)}
                  >
                    {deletingIds.includes(task.id) ? 'Deleting...' : 'Delete'}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default TaskList;