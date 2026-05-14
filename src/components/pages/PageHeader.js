export default function createPageHeader({ workspace }) {
  const pageHeader = document.createElement("header");
  pageHeader.className = "page-header";

  const title = document.createElement("h2");
  title.className = "page-header__title";
  title.textContent = workspace.name;
  pageHeader.appendChild(title);

  const description = document.createElement("p");
  description.className = "page-header__description";

  description.textContent = workspace.description
    ? workspace.description
    : "No description";
  pageHeader.appendChild(description);

  return pageHeader;
}
