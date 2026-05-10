import App from "../models/App.js";
import createMainLayout from "../components/MainLayout.js";
import { da } from "date-fns/locale";

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
				this.activeProject = null;
				this.activeTask = null;
				this.activeTodo = null;
				this.render();
			},
			saveProject: (data) => {
				const currentWorkspace = this.getCurrentWorkspace();

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
			editProject: (editedWorkspace) => {
				const currentWorkspace = this.getCurrentWorkspace();

				if (currentWorkspace) {
					currentWorkspace.editProject(editedWorkspace);
				}

				this.render();
			},
			deleteProject: (id) => {
				const currentWorkspace = this.getCurrentWorkspace();

				if (currentWorkspace) {
					currentWorkspace.deleteProject(id);
				}

				if (this.activeProject === id) {
					this.activeProject = null;
				}

				this.render();
			},
			saveTask: (data) => {
				const currentProject = this.getCurrentProject();
				if (currentProject) {
					currentProject.saveTask(
						data.name,
						data.description,
						data.dueDate,
						data.priority,
					);
				}

				this.render();
			},
			editTask: (data) => {
				const currentProject = this.getCurrentProject();
				if (currentProject) {
					currentProject.editTask(data);
				}
				this.render();
			},
			deleteTask: (id) => {
				const currentProject = this.getCurrentProject();
				if (currentProject) {
					currentProject.deleteTask(id);
				}

				if (this.activeTask === id) {
					this.activeTask = null;
				}

				this.render();
			},
			saveTodo: (data) => {
				const currentTask = this.getCurrentTask();

				if (currentTask) {
					currentTask.saveTodo(
						data.name,
						data.description,
						data.dueDate,
						data.priority,
						data.isDone,
					);
				}

				this.render();
			},
			editTodo: (data) => {
				const currentTask = this.getCurrentTask();
				if (currentTask) {
					currentTask.editTodo(data);
				}
				this.render();
			},
			deleteTodo: (id) => {
				const currentTask = this.getCurrentTask();
				if (currentTask) {
					currentTask.deleteTodo(id);
				}

				if (this.activeTodo === id) {
					this.activeTodo = null;
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
		};

		this.render();
	}

	getCurrentWorkspace() {
		return this.models.workspaces.items.find(
			(workspace) => this.activeWorkspace === workspace.id,
		);
	}

	getCurrentProject() {
		const currentWorkspace = this.getCurrentWorkspace();

		return currentWorkspace?.projects.items.find(
			(project) => project.id === this.activeProject,
		);
	}

	getCurrentTask() {
		const currentProject = this.getCurrentProject();

		return currentProject?.tasks.items.find(
			(task) => task.id === this.activeTask,
		);
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
