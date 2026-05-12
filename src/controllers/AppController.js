import WorkspaceController from "./WorkspaceController.js";

import createMainLayout from "../components/MainLayout.js";

export default class AppController {
  constructor(root) {
    this.root = root;
    this.models = { workspaces: [] };

    // CONTROLLERS
    this.workspaceController = new WorkspaceController(this.models.workspaces);

    // ACTIVE STATE
    this.activeWorkspace = null;
    this.activeProject = null;
    this.activeTask = null;
    this.activeTodo = null;

    this.actions = {
      handleAddWorkspace: (data) => {
        console.log(data);
      },
      handleRemoveWorkspace: (id) => {
        console.log(id);
      },
      handleEditWorkspace: (editedWorkspace) => {
        console.log(editedWorkspace);
      },
    };

    this.render();
  }

  render() {
    this.root.innerHTML = "";

    const mainLayout = createMainLayout(this.models.workspaces);
    this.root.appendChild(mainLayout);
  }
}
