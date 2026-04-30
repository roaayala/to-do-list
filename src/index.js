import "./style.css";
import App from "./models/App.js";
import AppController from "./controllers/AppController.js";

document.addEventListener("DOMContentLoaded", () => {
	const rootElement = document.querySelector("#app");

	const app = new App();

	const appController = new AppController(app, rootElement);
});
