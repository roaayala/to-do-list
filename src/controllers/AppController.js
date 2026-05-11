import App from "../models/App.js";
import createMainLayout from "../components/MainLayout.js";

export default class AppController {
	constructor(app, root) {
		this.app = app;
		this.root = root;

		this.render();
	}

	render() {
		this.root.innerHTML = "";

		const mainLayout = createMainLayout(this.app);
		this.root.appendChild(mainLayout);
	}
}
