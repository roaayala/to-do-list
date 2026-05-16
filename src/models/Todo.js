export default class Todo {
  constructor(id, tsId, name, description, dueDate, priority) {
    this.id = id;
    this.tsId = tsId;
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = false;
  }
}
