import Todo from "../models/Todo";
import generateId from "../utils/generateId";
import { todayDateString } from "../utils/date";

export default class TodoContoller {
  constructor(todos) {
    this.todos = todos;
  }

  addTodo(tsId, name, description, deadline, priority) {
    const newTodo = new Todo({
      id: generateId("todo"),
      tsId,
      createdAt: todayDateString(),
      name,
      description,
      deadline,
      priority,
      isDone: false,
    });

    this.todos = [...this.todos, newTodo];

    return newTodo;
  }

  removeTodo(toId) {}
  editTodo(toId) {}
}
