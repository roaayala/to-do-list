import createEmptyMessage from "../commons/EmptyMessage.js";
import createButton from "../commons/Button.js";
import showItemDialog from "../dialogs/ItemDialog.js";

export default function createMainPanelContent({ workspace }) {
	const mainPanelContent = document.createElement("main");
	mainPanelContent.className = "workspace-content";

	const showButton = createButton({
		id: "projectDialog",
		style: "btn btn-primary",
		type: "button",
		text: "New Project",
		callback: () => {
			showItemDialog({
				dialogTitle: "Project Details",
				formId: "projectDialogForm",
				initialData: workspace.items,
			});
		},
	});

	if (workspace.projects.items.length === 0) {
		const emptyMessage = createEmptyMessage("No project being added!");
		mainPanelContent.appendChild(emptyMessage);
		mainPanelContent.appendChild(showButton);
		return mainPanelContent;
	}

	mainPanelContent.appendChild(showButton);

	return mainPanelContent;
}
