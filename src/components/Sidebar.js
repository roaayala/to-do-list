import createSidebarHeader from "./SidebarHeader.js";
import createButton from "./Button.js";

export default function createSidebar(workspacesData) {
	const sidebar = document.createElement("aside");
	sidebar.className = "sidebar";

	// header
	const sidebarHeader = createSidebarHeader();

	// nav
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

	const showAddWorkspaceDialogButton = createButton("New Workspace", () => {
		console.log("show dialog");
	});

	sidebar.appendChild(sidebarHeader);
	sidebar.appendChild(sidebarNav);
	sidebar.appendChild(showAddWorkspaceDialogButton);

	return sidebar;
}
