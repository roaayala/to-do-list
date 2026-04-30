import createSidebar from "./sidebar.js";
import createMainPanel from "./MainPanel.js";

export default function createMainLayout(appModel) {
	const workspacesModel = appModel.workspaces.items;

	const container = document.createElement("div");
	container.className = "container";

	const sidebar = createSidebar(workspacesModel);

	const mainPanel = createMainPanel();

	// append to container
	container.appendChild(sidebar);
	container.appendChild(mainPanel);

	return container;
}
