import Task from "./Task.js";
import Collection from "./Collection.js";
import generateId from "../utils/generateId.js";

export default class Project {
	constructor(title, description, dueDate, priority) {
		this.id = generateId("project");
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.tasks = new Collection();
	}

	addTask(title, description, dueDate, priority) {
		const newTask = new Task(title, description, dueDate, priority);
		return this.tasks.add(newTask);
	}

	get isDone() {
		if (this.tasks.length === 0) {
			return false;
		}

		return this.tasks.every((task) => task.isDone);
	}
}
