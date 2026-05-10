import Todo from "./Todo.js";
import Collection from "./Collection.js";
import generateId from "../utils/generateId.js";

export default class Task {
	constructor(name, description, dueDate, priority) {
		this.id = generateId("task");
		this.name = name;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.todos = new Collection();
	}

	saveTodo(name, description, dueDate, priority) {
		const newTodo = new Todo(name, description, dueDate, priority);
		return this.todos.save(newTodo);
	}

	editTodo(todo) {
		this.todos.edit(todo);
	}

	deleteTodo(id) {
		this.todos.delete(id);
	}

	get isDone() {
		return this.todos.isDone;
	}
}
