import createButton from "../commons/Button.js";
import workspaceDialog from "../dialogs/workspaceDialog.js";

export default function createSidebarNav(workspaces, actions, activeWorkspace) {
	const sidebarNav = document.createElement("nav");
	sidebarNav.className = "sidebar-nav";

	if (workspaces.length === 0) {
		const emptyNav = document.createElement("span");
		emptyNav.className = "sidebar-nav__item--empty";
		emptyNav.textContent = "No workspace";
		sidebarNav.appendChild(emptyNav);
	}

	workspaces.forEach((workspace) => {
		const itemContainer = document.createElement("div");
		itemContainer.id = workspace.id;
		itemContainer.className = "sidebar-nav__item";

		itemContainer.addEventListener("click", (e) => {
			actions.setActiveWorkspace(workspace.id);
		});

		const itemName = document.createElement("span");
		itemName.className = "sidebar-nav__item-name";
		itemName.textContent = workspace.name;

		const actionsContainer = document.createElement("div");
		actionsContainer.className = "sidebar-nav__item-actions-container";

		const activeItem = activeWorkspace === workspace.id;

		if (activeItem) {
			itemContainer.className = "sidebar-nav__item sidebar-nav__item--active";

			const editButton = createButton({
				text: "Edit",
				callback: (e) => {
					e.stopPropagation();
					workspaceDialog("Edit Workspace", workspace, actions);
				},
			});

			const deleteButton = createButton({
				text: "Delete",
				callback: (e) => {
					e.stopPropagation();
					actions.deleteWorkspace(workspace.id);
				},
			});

			actionsContainer.appendChild(editButton);
			actionsContainer.appendChild(deleteButton);
		}

		itemContainer.appendChild(itemName);
		itemContainer.appendChild(actionsContainer);
		sidebarNav.appendChild(itemContainer);
	});

	return sidebarNav;
}
