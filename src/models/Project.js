export default class Project {
  constructor({ id, name, description, createdAt }) {
    this.id = id;
    this.createdAt = createdAt;
    this.name = name;
    this.description = description;
  }
}
