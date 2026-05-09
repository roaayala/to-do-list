import App from "../models/App.js";
import createMainLayout from "../components/MainLayout.js";

export default class AppController {
	constructor(models, root) {
		this.models = models;
		this.root = root;
		this.activeWorkspace = null;
		this.activeProject = null;
		this.activeTask = null;
		this.activeTodo = null;

		this.actions = {
			saveWorkspace: (data) => {
				const newWorkspace = this.models.saveWorkspace(
					data.name,
					data.description,
				);
				this.activeWorkspace = newWorkspace.id;
				this.render();
			},
			editWorkspace: (editedWorkspace) => {
				this.models.editWorkspace(editedWorkspace);
				this.render();
			},
			deleteWorkspace: (id) => {
				this.models.deleteWorkspace(id);
				this.activeWorkspace = null;
				this.render();
			},
			saveProject: (data) => {
				const currentWorkspace = this.models.workspaces.items.find(
					(workspace) => this.activeWorkspace === workspace.id,
				);

				if (currentWorkspace) {
					currentWorkspace.saveProject(
						data.name,
						data.description,
						data.dueDate,
						data.priority,
					);
				}

				this.render();
			},
			editProject: (data) => {
				console.log(data);
			},
			deleteProject: (id) => {
				const currentWorkspace = this.models.workspaces.items.find(
					(workspace) => this.activeWorkspace === workspace.id,
				);

				if (currentWorkspace) {
					currentWorkspace.deleteProject(id);
				}

				if (this.activeProject === id) {
					this.activeProject = null;
				}

				this.render();
			},
			setActiveWorkspace: (id) => {
				this.activeWorkspace = id;
				this.activeProject = null;
				this.activeTask = null;
				this.activeTodo = null;
				this.render();
			},
			setActiveProject: (id) => {
				this.activeProject = id;
				this.activeTask = null;
				this.activeTodo = null;
				this.render();
			},
			setActiveTask: (id) => {
				this.activeTask = id;
				this.activeTodo = null;
				this.render();
			},
			setActiveTodo: (id) => {
				this.activeTodo = id;
				this.render();
			},

			getActiveWorkspace: (id) => {
				return this.models.workspaces.items.filter(
					(workspace) => workspace.id === this.activeWorkspace,
				);
			},
		};

		this.render();
	}

	render() {
		this.root.innerHTML = "";

		const mainLayout = createMainLayout(
			this.models,
			this.actions,
			this.activeWorkspace,
			this.activeProject,
			this.activeTask,
			this.activeTodo,
		);
		this.root.appendChild(mainLayout);
	}
}
