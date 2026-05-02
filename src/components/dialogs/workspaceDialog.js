export default function createWorkspaceDialog() {
	const dialog = document.createElement("dialog");

	const headerTitle = document.createElement("h2");
	headerTitle.textContent = "New Workspace Details";

	dialog.appendChild(headerTitle);

	document.querySelector(".container").appendChild(dialog);

	dialog.showModal();
}
