import createSidebar from "./sidebar/Sidebar.js";
import createMainPanel from "./main-panel/MainPanel";

export default function createMainLayout(models) {
  const container = document.createElement("div");
  container.className = "container";

  const sidebar = createSidebar();
  const mainPanel = createMainPanel();

  // appendChild
  container.appendChild(sidebar);
  container.appendChild(mainPanel);
  return container;
}
