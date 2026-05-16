import Todo from "../models/Todo";
import generateId from "../utils/generateId";

export default class TodoContoller {
  constructor(todos) {
    this.todos = todos;
  }

  addTodo() {}
  removeTodosByParentId(tsId) {}
  removeTodo(toId) {}
  editTodo(toId) {}
}
