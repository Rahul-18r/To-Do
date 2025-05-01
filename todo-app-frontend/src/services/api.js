import axios from "axios";

// Set base URL for all requests - update this with your actual API URL
axios.defaults.baseURL = "http://localhost:8080";

// Add request/response interceptors for error handling if needed
axios.interceptors.response.use(
  response => response,
  error => {
    console.error("API Error:", error.response || error);
    return Promise.reject(error);
  }
);

export const fetchTasks = async () => {
  try {
    const response = await axios.get("/tasks");
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};

export const createTask = async (task) => {
  try {
    const response = await axios.post("/CreateTask", task);
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    return null;
  }
};

export const getTaskById = async (id) => {
  try {
    const response = await axios.get(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching task ${id}:`, error);
    return null;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`/task/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting task:", error);
    return false;
  }
};