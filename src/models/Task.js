export default class Task {
  constructor({ id, pId, createdAt, name, description, deadline, priority }) {
    this.id = id;
    this.pId = pId;
    this.createdAt = createdAt;
    this.name = name.trim();
    this.description = description.trim();
    this.deadline = deadline;
    this.priority = priority;
  }
}
