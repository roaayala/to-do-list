export default function createSidebarHeader() {
	const sidebarHeader = document.createElement("header");
	sidebarHeader.className = "sidebar__header";

	const sidebarHeaderTitle = document.createElement("h1");
	sidebarHeaderTitle.className = "sidebar__header-title";
	sidebarHeaderTitle.textContent = "MyProyeck";

	sidebarHeader.appendChild(sidebarHeaderTitle);
	return sidebarHeader;
}
