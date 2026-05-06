import createButton from "../commons/Button.js";
import workspaceDialogForm from "../forms/WorkspaceDialogForm.js";

export default function showWorkspaceDialog(
	dialogTitle,
	initialData = null,
	actions,
) {
	const closeDialog = () => {
		dialog.close();
		dialog.remove();
	};

	const isEdit = !!initialData;

	const dialog = document.createElement("dialog");
	const headerTitle = document.createElement("h2");
	headerTitle.textContent = isEdit ? "Edit Workspace" : "Save Workspace";

	const form = workspaceDialogForm({
		formId: "workspaceDialogForm",
		initialData: initialData,
		onSaveWorkspace: (data) => {
			if (isEdit) {
				console.log(initialData);
			} else {
				actions.saveWorkspace(data);
			}
			closeDialog();
		},
	});

	const dialogActions = document.createElement("div");
	dialogActions.className = "dialog-actions";

	const closeButton = createButton({
		id: null,
		style: "btn",
		type: "button",
		text: "Cancel",
		callback: closeDialog,
	});

	const saveButton = createButton({
		id: null,
		style: "btn",
		type: "submit",
		text: isEdit ? "Edit" : "Save",
		callback: () => {},
	});
	saveButton.setAttribute("form", "workspaceDialogForm");

	// dialog actions
	dialogActions.appendChild(closeButton);
	dialogActions.appendChild(saveButton);

	// dialog
	dialog.appendChild(headerTitle);
	dialog.appendChild(form);
	dialog.appendChild(dialogActions);

	// app container
	document.querySelector(".container").appendChild(dialog);

	dialog.showModal();
}
