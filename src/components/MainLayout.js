import createSidebar from "./SidebarLayout.js";
import createMainPanel from "./MainPanel.js";

export default function createMainLayout(models, actions, activeWorkspace) {
	const workspaces = models.workspaces.items;

	const container = document.createElement("div");
	container.className = "container";

	const sidebar = createSidebar(workspaces, actions, activeWorkspace);

	const mainPanel = createMainPanel();

	// append to container
	container.appendChild(sidebar);
	container.appendChild(mainPanel);

	return container;
}
