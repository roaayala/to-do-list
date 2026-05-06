export default function createMainPanel() {
	const mainPanel = document.createElement("main");
	mainPanel.className = "main-panel";

	const emptyMessage = document.createElement("span");
	emptyMessage.textContent = "No workspace being selected";
	mainPanel.appendChild(emptyMessage);

	return mainPanel;
}
