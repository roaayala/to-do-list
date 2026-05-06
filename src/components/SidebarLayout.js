import createSidebarHeader from "./sidebars/SidebarHeader.js";
import createSidebarNav from "./sidebars/SidebarNav.js";
import createButton from "./commons/Button.js";

import showAddWorkspaceDialog from "./dialogs/workspaceDialog.js";
import showWorkspaceDialog from "./dialogs/workspaceDialog.js";

export default function createSidebar(workspaces, actions, activeWorkspace) {
	const sidebar = document.createElement("aside");
	sidebar.className = "sidebar";

	// header
	const sidebarHeader = createSidebarHeader();

	// nav
	const sidebarNav = createSidebarNav(workspaces, actions, activeWorkspace);

	// button
	const showButton = createButton({
		id: "showAddWorkspaceDialog",
		style: "btn btn-primary",
		type: "button",
		text: "New Workspace",
		callback: () => {
			showWorkspaceDialog("New Workspace Details", actions);
		},
	});

	sidebar.appendChild(sidebarHeader);
	sidebar.appendChild(sidebarNav);
	sidebar.appendChild(showButton);

	return sidebar;
}
