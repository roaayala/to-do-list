import createSidebar from "./SidebarLayout.js";
import createMainPanel from "./MainPanel.js";

export default function createMainLayout(appModel) {
	const workspacesModel = appModel.workspaces.items;

	const container = document.createElement("div");
	container.className = "container";

	const sidebar = createSidebar(workspacesModel, (data) => {
		console.log("data from sidebar", data);
	});

	const mainPanel = createMainPanel();

	// append to container
	container.appendChild(sidebar);
	container.appendChild(mainPanel);

	return container;
}
