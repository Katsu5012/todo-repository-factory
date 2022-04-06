import axios from "axios";
import { Task } from "../composables/use-todo";

export default {
  async addTask(
    createTask: Omit<Task, "id" | "created_at" | "updated_at">
  ): Promise<Task> {
    return await axios
      .post("http://localhost:3000/api/tasks", createTask)
      .then((response) => {
        return response.data;
      });
  },

  async patchTask(
    patchTask: Omit<Task, "created_at" | "updated_at">
  ): Promise<Task> {
    return await axios
      .patch("http://localhost:3000/api/tasks", patchTask)
      .then((response) => {
        return response.data;
      });
  },

  async getTask(id: number): Promise<Task> {
    return await axios
      .get(`http://localhost:3000/api/tasks/${id}`)
      .then((response) => {
        return response.data;
      });
  },

  async getTasks(page: number): Promise<Task[]> {
    const params = {
      page,
    };

    return await axios
      .get("http://localhost:3000/api/tasks", { params })
      .then((response) => {
        return response.data;
      });
  },

  async deleteTask(id: number): Promise<void> {
    return await axios
      .get(`http://localhost:3000/api/tasks/${id}`)
      .then((response) => {
        return response.data;
      });
  },
};
