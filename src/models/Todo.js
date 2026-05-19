export default class Todo {
  constructor({
    id,
    tsId,
    createdAt,
    name,
    description,
    deadline,
    priority,
    isDone,
  }) {
    this.id = id;
    this.tsId = tsId;
    this.createdAt = createdAt;
    this.name = name;
    this.description = description;
    this.deadline = deadline;
    this.priority = priority;
    this.isDone = isDone;
  }
}
