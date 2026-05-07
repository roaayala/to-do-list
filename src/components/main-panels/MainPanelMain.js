import createEmptyMessage from "../commons/EmptyMessage.js";

export default function createMainPanelMain({ workspace }) {
	const mainPanelMain = document.createElement("main");
	mainPanelMain.className = "workspace-main";

	if (workspace.projects.items.length === 0) {
		const emptyMessage = createEmptyMessage("No project being added!");
		mainPanelMain.appendChild(emptyMessage);
	}

	return mainPanelMain;
}
