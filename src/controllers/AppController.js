import createMainLayout from "../components/MainLayout.js";

export default class AppController {
  constructor(root) {
    this.root = root;

    this.models = {
      workspaces: [],
    };

    this.activeWorkspace = null;
    this.render();
  }

  render() {
    this.root.innerHTML = "";

    const mainLayout = createMainLayout(this.models);
    this.root.appendChild(mainLayout);
  }
}
