import createButton from "../commons/Button.js";
import createEmptyMessage from "../commons/EmptyMessage.js";

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

		const editButton = createButton({
			text: "Edit",
			callback: (e) => {
				e.stopPropagation();
				console.log("edit");
			},
		});

		const deleteButton = createButton({
			text: "Delete",
			callback: (e) => {
				e.stopPropagation();
				console.log("delete");
			},
		});

		itemContainer.appendChild(itemName);
		itemContainer.appendChild(editButton);
		itemContainer.appendChild(deleteButton);

		pageContent.appendChild(itemContainer);
	});

	return pageContent;
}
