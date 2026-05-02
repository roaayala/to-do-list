import createButton from "../commons/Button.js";

export default function showWorkspaceDialog(dialogHeaderTitle) {
	const closeDialog = () => {
		dialog.close();
		dialog.remove();
	};

	const dialog = document.createElement("dialog");

	const headerTitle = document.createElement("h2");
	headerTitle.textContent = dialogHeaderTitle;

	const dialogActions = document.createElement("div");
	dialogActions.className = "dialog-actions";

	const closeButton = createButton(null, "btn", "Cancel", closeDialog);

	const saveButton = createButton(null, "btn", "Save", () => {
		closeDialog();
	});

	// dialog actions
	dialogActions.appendChild(closeButton);
	dialogActions.appendChild(saveButton);

	// dialog
	dialog.appendChild(headerTitle);
	dialog.appendChild(dialogActions);

	// app container
	document.querySelector(".container").appendChild(dialog);

	dialog.showModal();
}
