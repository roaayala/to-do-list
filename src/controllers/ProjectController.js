import Project from "../models/Project";
import generateId from "../utils/generateId";
import { todayDateString } from "../utils/date";

export default class ProjectController {
  constructor(projects) {
    this.projects = projects;
  }

  addProject(name, description) {
    const newProject = new Project({
      id: generateId("project"),
      createdAt: todayDateString(),
      name,
      description,
    });

    this.projects = [...this.projects, newProject];

    return newProject;
  }

  removeProject(pId) {
    this.projects = this.projects.filter((project) => project.id !== pId);
  }

  editProject(pId, data) {
    this.projects = this.projects.map((project) => {
      if (project.id === pId) {
        return {
          ...project,
          ...data,
        };
      }
      return project;
    });
  }
}
