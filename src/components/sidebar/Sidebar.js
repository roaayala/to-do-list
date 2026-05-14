import createSidebarHeader from "./SidebarHeader.js";
import createSidebarNav from "./SidebarNav.js";
import createSidebarAction from "./SidebarAction.js";

export default function createSidebar({
  workspaces,
  actions,
  activeWorkspace,
}) {
  const sidebar = document.createElement("aside");
  sidebar.className = "sidebar";

  // header
  const sidebarHeader = createSidebarHeader();
  sidebar.appendChild(sidebarHeader);

  // content
  const sidebarNav = createSidebarNav({ actions, workspaces, activeWorkspace });
  sidebar.appendChild(sidebarNav);

  // actions
  const sidebarAction = createSidebarAction({ actions });
  sidebar.appendChild(sidebarAction);

  return sidebar;
}
