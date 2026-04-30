import Todo from "./Todo.js";
import Collection from "./Collection.js";
import generateId from "../utils/generateId.js";

export default class Task {
	constructor(title, description, dueDate, priority) {
		this.id = generateId("task");
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.todos = new Collection();
	}

	addTodo(title, description, dueDate, priority) {
		const newTodo = new Todo(title, description, dueDate, priority);
		return this.todos.add(newTodo);
	}

	get isDone() {
		if (this.todos.length === 0) {
			return false;
		}

		return this.todos.every((todo) => todo.isDone);
	}
}
