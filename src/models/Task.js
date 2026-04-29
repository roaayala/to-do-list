import Todo from "./Todo.js";

export default class Task {
	constructor(title, description, dueDate, priority) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.todos = [];
	}

	addTodo(title, description, dueDate, priority) {
		const newTodo = new Todo(title, description, dueDate, priority);
		this.todos = [...this.todos, newTodo];
	}

	get isDone() {
		if (this.todos.length === 0) {
			return false;
		}

		return this.todos.every((todo) => todo.isDone);
	}
}
