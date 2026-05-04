import createButton from "../commons/Button.js";
import workspaceDialogForm from "../forms/WorkspaceDialogForm.js";

export default function showWorkspaceDialog(dialogHeaderTitle) {
	const closeDialog = () => {
		dialog.close();
		dialog.remove();
	};

	const dialog = document.createElement("dialog");

	const headerTitle = document.createElement("h2");
	headerTitle.textContent = dialogHeaderTitle;

	const addForm = workspaceDialogForm({
		formId: "workspaceDialogForm",
		callback: closeDialog,
	});

	const dialogActions = document.createElement("div");
	dialogActions.className = "dialog-actions";

	const closeButton = createButton(
		null,
		"btn",
		"button",
		"Cancel",
		closeDialog,
	);

	const saveButton = createButton(null, "btn", "submit", "Save", () => {});
	saveButton.setAttribute("form", "workspaceDialogForm");

	// dialog actions
	dialogActions.appendChild(closeButton);
	dialogActions.appendChild(saveButton);

	// dialog
	dialog.appendChild(headerTitle);
	dialog.appendChild(addForm);
	dialog.appendChild(dialogActions);

	// app container
	document.querySelector(".container").appendChild(dialog);

	dialog.showModal();
}
