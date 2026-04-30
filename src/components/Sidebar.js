import createSidebarHeader from "./SidebarHeader.js";

export default function createSidebar() {
	const sidebar = document.createElement("aside");
	sidebar.className = "sidebar";

	const sidebarHeader = createSidebarHeader();

	sidebar.appendChild(sidebarHeader);

	return sidebar;
}
