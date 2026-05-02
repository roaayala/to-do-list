export default function createSidebarNav(workspacesData) {
	const sidebarNav = document.createElement("nav");
	sidebarNav.className = "sidebar-nav";

	if (workspacesData.length === 0) {
		sidebarNav.textContent = "No Workspaces";
	}

	workspacesData.forEach((workspace) => {
		const workspaceItem = document.createElement("div");
		workspaceItem.id = workspace.id;
		workspaceItem.className = "sidebar-nav__item";
		workspaceItem.textContent = workspace.title;

		sidebarNav.appendChild(workspaceItem);
	});

	return sidebarNav;
}
