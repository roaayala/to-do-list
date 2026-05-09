import createButton from "../commons/Button.js";
import showItemDialog from "../dialogs/ItemDialog.js";

export default function createPageActions() {
	const actions = document.createElement("div");
	actions.className = "page-actions";

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
			});
		},
	});

	actions.appendChild(showButton);

	return actions;
}
