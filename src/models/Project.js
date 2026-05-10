import Task from "./Task.js";
import Collection from "./Collection.js";
import generateId from "../utils/generateId.js";

export default class Project {
	constructor(name, description, dueDate, priority) {
		this.id = generateId("project");
		this.name = name;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.tasks = new Collection();
	}

	saveTask(name, description, dueDate, priority) {
		const newTask = new Task(name, description, dueDate, priority);
		return this.tasks.save(newTask);
	}

	editTask(task) {
		this.tasks.edit(task);
	}

	deleteTask(id) {
		this.tasks.delete(id);
	}

	get isDone() {
		return this.tasks.isDone;
	}
}
