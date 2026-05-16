export default class Task {
  constructor(id, pId, name, description, dueDate, priority) {
    this.id = id;
    this.pId = pId;
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
