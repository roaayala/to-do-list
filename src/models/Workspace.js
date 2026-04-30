import Project from "./Project.js";
import Collection from "./Collection.js";
import generateId from "../utils/generateId.js";

export default class Workspace {
	constructor(title, description) {
		this.id = generateId("workspace");
		this.title = title;
		this.description = description;

		this.projects = new Collection();
	}

	addProject(title, description, dueDate, priority) {
		const newProject = new Project(title, description, dueDate, priority);
		return this.projects.add(newProject);
	}

	get isDone() {
		if (this.projects.length === 0) {
			return false;
		}

		return this.projects.every((project) => project.isDone);
	}
}
