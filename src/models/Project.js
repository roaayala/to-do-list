import Task from "./Task.js";

export default class Project {
	constructor(title, description, dueDate, priority) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.tasks = [];
	}

	addTask(title, description, dueDate, priority) {
		const newTask = new Task(title, description, dueDate, priority);
		this.tasks = [...this.tasks, newTask];
	}

	get isDone() {
		if (this.tasks.length === 0) {
			return false;
		}

		return this.tasks.every((task) => task.isDone);
	}
}
