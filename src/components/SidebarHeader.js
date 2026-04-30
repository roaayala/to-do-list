export default function createSidebarHeader() {
	const sidebarHeader = document.createElement("header");
	sidebarHeader.className = "sidebar-header";

	const title = document.createElement("h1");
	title.textContent = "MyProyek";
	title.className = "sidebar-header--title";

	sidebarHeader.appendChild(title);

	return sidebarHeader;
}
