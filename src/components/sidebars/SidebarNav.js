import createButton from "../commons/Button.js";

export default function createSidebarNav(workspaces, actions, activeWorkspace) {
	const sidebarNav = document.createElement("nav");
	sidebarNav.className = "sidebar-nav";

	if (workspaces.length === 0) {
		sidebarNav.textContent = "No Workspaces";
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
			const editButton = createButton({
				text: "Edit",
				callback: () => {
					console.log("edit click");
				},
			});

			const deleteButton = createButton({
				text: "Delete",
				callback: () => {
					console.log("delete click");
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
