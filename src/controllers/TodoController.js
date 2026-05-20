import Todo from "../models/Todo";
import generateId from "../utils/generateId";
import { todayDateString } from "../utils/date";

export default class TodoController {
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

  removeTodo(tdId) {
    this.todos = this.todos.filter((todo) => todo.id !== tdId);
  }

  removeTodosByTaskId(tsId) {
    this.todos = this.todos.filter((todo) => todo.tsId !== tsId);
  }

  editTodo(tdId, data) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === tdId) {
        return new Todo({
          ...todo,
          ...data,
        });
      }
      return todo;
    });
  }

  toggleDone(tdId) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === tdId) {
        return new Todo({ ...todo, isDone: !todo.isDone });
      }
      return todo;
    });
  }
}
