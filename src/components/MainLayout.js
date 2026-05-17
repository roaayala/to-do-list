import createSidebar from "./sidebar/Sidebar.js";

export default function createMainLayout(models, actions) {
  const container = document.createElement("div");
  container.className = "container";

  const sidebar = createSidebar({
    workspaces: models.workspaces,
    actions,
  });
  container.appendChild(sidebar);

  return container;
}
