import createEmptyMessage from "../commons/EmptyMessage.js";
import createButton from "../commons/Button.js";
import showItemDialog from "../dialogs/ItemDialog.js";

export default function createMainPanelContent({ workspace, actions }) {
	const mainPanelContent = document.createElement("main");
	mainPanelContent.className = "workspace-content";

	if (!workspace) {
		const emptyMessage = createEmptyMessage("No project being added!");
		mainPanelContent.appendChild(emptyMessage);
		mainPanelContent.appendChild(showButton);
		return mainPanelContent;
	}

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
				onEdit: actions.editProject,
			});
		},
	});

	mainPanelContent.appendChild(showButton);

	return mainPanelContent;
}
