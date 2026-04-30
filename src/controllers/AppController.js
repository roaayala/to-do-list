import App from "../models/App.js";

import createMainLayout from "../components/MainLayout.js";

export default class AppController {
	constructor(appModel, root) {
		this.appModel = appModel;
		this.root = root;

		this.render();
	}

	render() {
		this.root.innerHTML = "";

		const mainLayout = createMainLayout();
		this.root.appendChild(mainLayout);
	}
}
