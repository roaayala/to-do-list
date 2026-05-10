import createButton from "../commons/Button.js";
import createEmptyMessage from "../commons/EmptyMessage.js";
import showItemDialog from "../dialogs/ItemDialog.js";

export default function createPageContent({ workspace, actions }) {
	const pageContent = document.createElement("main");
	pageContent.className = "page-content";

	const projects = workspace.projects.items;

	if (projects.length === 0) {
		const emptyMessage = createEmptyMessage("No project being added!");
		pageContent.appendChild(emptyMessage);

		return pageContent;
	}

	projects.forEach((project) => {
		const itemContainer = document.createElement("div");
		itemContainer.id = project.id;
		itemContainer.className = "project-item";

		const itemName = document.createElement("span");
		itemName.textContent = project.name;

		const editButton = createButton({
			text: "Edit",
			callback: (e) => {
				e.stopPropagation();
				showItemDialog({
					title: "Edit Project",
					formId: "projectDialogForm",
					initialData: project,
					onSave: actions.saveProject,
					onEdit: actions.editProject,
				});
			},
		});

		const deleteButton = createButton({
			text: "Delete",
			callback: (e) => {
				e.stopPropagation();
				actions.deleteProject(project.id);
			},
		});

		itemContainer.appendChild(itemName);
		itemContainer.appendChild(editButton);
		itemContainer.appendChild(deleteButton);

		pageContent.appendChild(itemContainer);
	});

	return pageContent;
}
