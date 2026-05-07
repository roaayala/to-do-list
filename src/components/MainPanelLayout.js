import createEmptyMessage from "./commons/EmptyMessage.js";
import createMainPanelHeader from "./main-panels/MainPanelHeader.js";

export default function createMainPanel(workspaces, actions, activeWorkspace) {
	const mainPanel = document.createElement("main");
	mainPanel.className = "main-panel";

	if (!activeWorkspace) {
		const emptyMessage = createEmptyMessage("No workspace being selected!");
		mainPanel.appendChild(emptyMessage);
		return mainPanel;
	}

	const workspace = actions.getActiveWorkspace(activeWorkspace)[0];
	const workspaceContainer = document.createElement("div");
	workspaceContainer.className = "workspace";

	const mainPanelHeader = createMainPanelHeader({
		name: workspace.name,
		description: workspace.description,
	});

	const workspaceMain = document.createElement("main");
	workspaceMain.className = "workspace-main";

	if (workspace.projects.items.length === 0) {
		const emptyMessage = document.createElement("span");
		emptyMessage.textContent = "No project being added";
		workspaceMain.appendChild(emptyMessage);
	}

	mainPanel.appendChild(mainPanelHeader);
	mainPanel.appendChild(workspaceMain);

	return mainPanel;
}
