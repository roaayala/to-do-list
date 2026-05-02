import createSidebarHeader from "./sidebars/SidebarHeader.js";
import createSidebarNav from "./sidebars/SidebarNav.js";
import createButton from "./commons/Button.js";

import createWorkspaceDialog from "./dialogs/workspaceDialog.js";

export default function createSidebar(workspacesData) {
	const sidebar = document.createElement("aside");
	sidebar.className = "sidebar";

	// header
	const sidebarHeader = createSidebarHeader();

	// nav
	const sidebarNav = createSidebarNav(workspacesData);

	const showAddWorkspaceDialogButton = createButton(
		"showAddWorkspaceDialog",
		"btn btn-primary",
		"New Workspace",
		createWorkspaceDialog,
	);

	sidebar.appendChild(sidebarHeader);
	sidebar.appendChild(sidebarNav);
	sidebar.appendChild(showAddWorkspaceDialogButton);

	return sidebar;
}
