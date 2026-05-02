import createSidebarHeader from "./sidebars/SidebarHeader.js";
import createSidebarNav from "./sidebars/SidebarNav.js";
import createButton from "./commons/Button.js";

export default function createSidebar(workspacesData) {
	const sidebar = document.createElement("aside");
	sidebar.className = "sidebar";

	// header
	const sidebarHeader = createSidebarHeader();

	// nav
	const sidebarNav = createSidebarNav(workspacesData);

	const showAddWorkspaceDialogButton = createButton("New Workspace", () => {
		console.log("show dialog");
	});

	sidebar.appendChild(sidebarHeader);
	sidebar.appendChild(sidebarNav);
	sidebar.appendChild(showAddWorkspaceDialogButton);

	return sidebar;
}
