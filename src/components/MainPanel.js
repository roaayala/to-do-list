export default function createMainPanel() {
	const mainPanel = document.createElement("main");
	mainPanel.className = "main-panel";

	const emptyMessage = document.createElement("span");
	emptyMessage.textContent = "No Workspace Selected";
	mainPanel.appendChild(emptyMessage);

	return mainPanel;
}
