import createEmptyMessage from "./commons/EmptyMessage.js";
import createMainPanelHeader from "./main-panels/MainPanelHeader.js";
import createMainPanelContent from "./main-panels/MainPanelContent.js";

export default function createMainPanel({
	workspace,
	actions,
	activeWorkspace,
}) {
	const mainPanel = document.createElement("main");
	mainPanel.className = "main-panel";

	if (!workspace) {
		const emptyMessage = createEmptyMessage("No workspace being selected!");
		mainPanel.appendChild(emptyMessage);
		return mainPanel;
	}

	const workspaceContainer = document.createElement("div");
	workspaceContainer.className = "workspace";

	const workspaceHeader = createMainPanelHeader({
		name: workspace.name,
		description: workspace.description,
	});

	const workspaceMain = createMainPanelContent({
		workspace: workspace,
		actions: actions,
	});

	mainPanel.appendChild(workspaceHeader);
	mainPanel.appendChild(workspaceMain);

	return mainPanel;
}
