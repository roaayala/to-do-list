import createButton from "../commons/Button.js";
import showItemDialog from "../dialogs/ItemDialog.js";

export default function createPageAction({
	buttonElement = { id, style, button, text },
	itemDialogElement = {
		title,
		formId,
		initialData,
		onSave,
		onEdit,
	},
}) {
	const action = document.createElement("div");
	action.className = "page-action";

	const showButton = createButton({
		id: buttonElement.id,
		style: buttonElement.style,
		type: buttonElement.button,
		text: buttonElement.text,
		callback: () => {
			showItemDialog({
				title: itemDialogElement.title,
				formId: itemDialogElement.id,
				initialData: itemDialogElement.initialData,
				onSave: itemDialogElement.onSave,
				onEdit: itemDialogElement.onEdit,
			});
		},
	});

	action.appendChild(showButton);

	return action;
}
