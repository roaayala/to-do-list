import App from "../models/App.js";

import createMainLayout from "../components/MainLayout.js";

export default class AppController {
	constructor(appModel, root) {
		this.appModel = appModel;
		this.root = root;
		this.actions = {
			log: (data) => {
				console.log(data);
			},
		};

		this.render();
	}

	render() {
		this.root.innerHTML = "";

		const mainLayout = createMainLayout(this.appModel, this.actions.log);
		this.root.appendChild(mainLayout);
	}
}
