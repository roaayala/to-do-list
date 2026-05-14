export default class Workspace {
  constructor({ id, name, description }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.projects = [];
  }
}
