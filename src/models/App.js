import Workspace from "./Workspace.js";
import Collection from "./Collection.js";

export default class App {
	constructor() {
		this.workspaces = new Collection();
	}

	addWorkspace(title, description) {
		const newWorkspace = new Workspace(title, description);
		return this.workspaces(newWorkspace);
	}
}
