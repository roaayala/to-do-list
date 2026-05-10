import createButton from "../commons/Button.js";
import createItemDialogForm from "../forms/ItemDialogForm.js";

export default function showItemDialog({
	title,
	formId,
	initialData = null,
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
	headerTitle.textContent = isEdit ? `Edit ${title}` : `Save ${title}`;

	const form = createItemDialogForm({
		formId: formId,
		initialData: initialData,
		onSaveForm: (data) => {
			if (isEdit) {
				onEdit({ id: initialData.id, ...data });
			} else {
				onSave(data);
			}
			closeDialog();
		},
		textInputElement: {
			label: "Project Name",
			id: "projectName",
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
		selectInputElement: { label: "Project Priority", id: "projectPriority" },
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
