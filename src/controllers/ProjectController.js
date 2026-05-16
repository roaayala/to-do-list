import Project from "../models/Project";
import generateId from "../utils/generateId";

export default class ProjectController {
  constructor(projects) {
    this.projects = projects;
  }

  addProject(wsId, name, description, dueDate, priority) {
    const newProject = new Project(
      generateId("project"),
      wsId,
      name,
      description,
      dueDate,
      priority,
    );

    this.projects = [...this.projects, newProject];

    return newProject;
  }

  removeProjectsByParentId(id) {
    this.projects = this.projects.filter((project) => project.wsId !== id);
  }

  editProject() {}
}
