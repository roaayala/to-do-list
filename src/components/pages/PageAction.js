import createButton from "../commons/Button.js";
import showItemDialog from "../dialogs/ItemDialog.js";

export default function createPageAction({ workspace, actions }) {
	const action = document.createElement("div");
	action.className = "page-action";

	const showButton = createButton({
		id: "projectDialog",
		style: "btn btn-primary",
		type: "button",
		text: "New Project",
		callback: () => {
			showItemDialog({
				dialogTitle: "Project Details",
				formId: "projectDialogForm",
				initialData: null,
				onSave: actions.saveProject,
				onEdit: actions.ediProject,
			});
		},
	});

	action.appendChild(showButton);

	return action;
}
