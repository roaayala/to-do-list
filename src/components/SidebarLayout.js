import createSidebarHeader from "./sidebars/SidebarHeader.js";
import createSidebarNav from "./sidebars/SidebarNav.js";
import createButton from "./commons/Button.js";

import showAddWorkspaceDialog from "./dialogs/workspaceDialog.js";

export default function createSidebar(workspacesData) {
	const sidebar = document.createElement("aside");
	sidebar.className = "sidebar";

	// header
	const sidebarHeader = createSidebarHeader();

	// nav
	const sidebarNav = createSidebarNav(workspacesData);

	// button
	const showAddWorkspaceDialogButton = createButton(
		"showAddWorkspaceDialog",
		"btn btn-primary",
		"New Workspace",
		showAddWorkspaceDialog.bind(null, "New Workspace Details"),
	);

	sidebar.appendChild(sidebarHeader);
	sidebar.appendChild(sidebarNav);
	sidebar.appendChild(showAddWorkspaceDialogButton);

	return sidebar;
}
