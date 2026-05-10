import Project from "./Project.js";
import Collection from "./Collection.js";
import generateId from "../utils/generateId.js";

export default class Workspace {
	constructor(name, description) {
		this.id = generateId("workspace");
		this.name = name;
		this.description = description;

		this.projects = new Collection();
	}

	saveProject(name, description, dueDate, priority) {
		const newProject = new Project(name, description, dueDate, priority);
		return this.projects.save(newProject);
	}

	editProject(project) {
		this.projects.edit(project);
	}

	deleteProject(id) {
		this.projects.delete(id);
	}

	get isDone() {
		return this.projects.isDone;
	}
}
