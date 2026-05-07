import createButton from "../commons/Button.js";

export default function showItemDialog({
	dialogTitle,
	formId,
	initialData = null,
	actions,
}) {
	const closeDialog = () => {
		dialog.close();
		dialog.remove();
	};

	console.log(initialData);
	const isEdit = !!initialData;

	const dialog = document.createElement("dialog");
	const headerTitle = document.createElement("h2");
	headerTitle.textContent = isEdit
		? `Edit ${dialogTitle}`
		: `Save ${dialogTitle}`;

	// const form = showWorkspaceDialogForm({
	// 	formId: "workspaceDialogForm",
	// 	initialData: initialData,
	// 	onSaveWorkspace: (data) => {
	// 		if (isEdit) {
	// 			actions.editWorkspace({ id: initialData.id, ...data });
	// 		} else {
	// 			actions.saveWorkspace(data);
	// 		}
	// 		closeDialog();
	// 	},
	// });

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
	saveButton.setAttribute("form", formId);

	// dialog actions
	dialogActions.appendChild(closeButton);
	dialogActions.appendChild(saveButton);

	// dialog
	dialog.appendChild(headerTitle);
	// dialog.appendChild(form);
	dialog.appendChild(dialogActions);

	// app container
	document.querySelector(".container").appendChild(dialog);

	dialog.showModal();
}
