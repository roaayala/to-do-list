import createEmptyMessage from "./commons/EmptyMessage.js";
import createMainPanelHeader from "./main-panels/MainPanelHeader.js";
import createMainPanelMain from "./main-panels/MainPanelMain.js";

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

	const mainPanelMain = createMainPanelMain({
		workspace: workspace,
	});

	mainPanel.appendChild(mainPanelHeader);
	mainPanel.appendChild(mainPanelMain);

	return mainPanel;
}
