import createSidebarHeader from "./sidebars/SidebarHeader.js";
import createSidebarNav from "./sidebars/SidebarNav.js";
import createButton from "./commons/Button.js";

import workspaceDialog from "./dialogs/workspaceDialog.js";

export default function createSidebar(workspaces, actions, activeWorkspace) {
	const sidebar = document.createElement("aside");
	sidebar.className = "sidebar";

	// header
	const sidebarHeader = createSidebarHeader();

	// nav
	const sidebarNav = createSidebarNav(workspaces, actions, activeWorkspace);

	// button
	const showButton = createButton({
		id: "workspaceDialog",
		style: "btn btn-primary",
		type: "button",
		text: "New Workspace",
		callback: () => {
			workspaceDialog("New Workspace Details", null, actions);
		},
	});

	sidebar.appendChild(sidebarHeader);
	sidebar.appendChild(sidebarNav);
	sidebar.appendChild(showButton);

	return sidebar;
}
