import { da } from "date-fns/locale";
import createButton from "../commons/Button.js";
import createItemDialogForm from "../forms/ItemDialogForm.js";

export default function showItemDialog({
	dialogTitle,
	formId,
	initialData = null,
	actions,
	onSave,
	onEdit,
}) {
	const closeDialog = () => {
		dialog.close();
		dialog.remove();
	};

	const isEdit = !!initialData;

	const dialog = document.createElement("dialog");
	const headerTitle = document.createElement("h2");
	headerTitle.textContent = isEdit
		? `Edit ${dialogTitle}`
		: `Save ${dialogTitle}`;

	const form = createItemDialogForm({
		formId: formId,
		initialData: initialData,
		onSaveForm: (data) => {
			if (isEdit) {
				console.log(data);
			} else {
				console.log(data);
			}
			closeDialog();
		},
		textInputElement: {
			label: "Project Name",
			id: "projectName",
			type: "text",
			placeholder: "Write your new project name",
		},
		textareaElement: {
			label: "Project Description",
			id: "projectDescription",
			placeholder: "Write your new project name",
		},
		dateInputElement: {
			label: "Project Date",
			id: "projectDate",
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
	saveButton.setAttribute("form", formId);

	// dialog actions
	dialogActions.appendChild(closeButton);
	dialogActions.appendChild(saveButton);

	// dialog
	dialog.appendChild(headerTitle);
	dialog.appendChild(form);
	dialog.appendChild(dialogActions);

	document.querySelector(".container").appendChild(dialog);

	dialog.showModal();
}
