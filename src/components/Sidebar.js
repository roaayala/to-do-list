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

	const button = createButton("New Workspaces");
	button.addEventListener("click", () => {
		console.log("Click");
	});

	sidebar.appendChild(sidebarHeader);
	sidebar.appendChild(sidebarNav);
	sidebar.appendChild(button);

	return sidebar;
}
