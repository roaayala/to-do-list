import WorkspaceController from "./WorkspaceController.js";

import createMainLayout from "../components/MainLayout.js";

export default class AppController {
  constructor(root) {
    this.root = root;

    this.models = {
      workspaces: [],
    };

    this.activeWorkspace = null;
    this.activeProject = null;
    this.activeTask = null;
    this.activeTodo = null;

    this.actions = {};

    this.workspaceController = new WorkspaceController(this.models.workspaces);

    this.render();
  }

  render() {
    this.root.innerHTML = "";

    const mainLayout = createMainLayout(this.models.workspaces);
    this.root.appendChild(mainLayout);
  }
}
