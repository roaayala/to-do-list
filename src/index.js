import "./style.css";
import App from "./controllers/App.js";

const app = new App();

app.addWorkspace("Icon Design", "Description");

app.addWorkspace("Notary and PPAT", "Description");

console.log(app.workspaces);
