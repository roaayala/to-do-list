import Workspace from "../models/Workspace.js";

export default class App {
	constructor() {
		this.workspaces = [];
	}

	addWorkspace(title, description) {
		const newWorkspace = new Workspace(title, description);

		this.workspaces = [...this.workspaces, newWorkspace];
	}
}
