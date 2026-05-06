import App from "../models/App.js";
import createMainLayout from "../components/MainLayout.js";

export default class AppController {
	constructor(models, root) {
		this.models = models;
		this.root = root;
		this.activeWorkspace = null;

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
			setActiveWorkspace: (id) => {
				this.activeWorkspace = id;
				this.render();
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
		);
		this.root.appendChild(mainLayout);
	}
}
