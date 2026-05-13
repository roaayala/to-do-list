import createSidebar from "./sidebar/Sidebar.js";
import createMainPanel from "./main-panel/MainPanel";

export default function createMainLayout(workspaces, actions, activeWorkspace) {
  const container = document.createElement("div");
  container.className = "container";

  const sidebar = createSidebar({ workspaces, actions, activeWorkspace });
  container.appendChild(sidebar);

  const mainPanel = createMainPanel();
  container.appendChild(mainPanel);

  return container;
}
