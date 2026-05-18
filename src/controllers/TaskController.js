import Task from "../models/Task";
import generateId from "../utils/generateId";
import { todayDateString } from "../utils/date";

export default class TaskController {
  constructor(tasks) {
    this.tasks = tasks;
  }

  addTask(pId, name, description, deadline, priority) {
    const newTask = new Task({
      id: generateId("task"),
      pId,
      createdAt: todayDateString(),
      name,
      description,
      deadline,
      priority,
    });

    this.tasks = [...this.tasks, newTask];

    return newTask;
  }
  removeTask(tsId) {
    this.tasks = this.tasks.filter((task) => task.id !== tsId);
  }
  editTask(tsId) {}
}
