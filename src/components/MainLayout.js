import createSidebar from "./sidebar/Sidebar.js";
import createWorkspacePage from "./pages/WorkspacePage.js";

export default function createMainLayout(workspaces, actions, activeWorkspace) {
  const container = document.createElement("div");
  container.className = "container";

  const sidebar = createSidebar({ workspaces, actions, activeWorkspace });
  container.appendChild(sidebar);

  const workspace = workspaces.find(
    (workspace) => workspace.id === activeWorkspace,
  );

  const workspacePage = createWorkspacePage({
    workspace,
    actions,
    activeWorkspace,
  });
  container.appendChild(workspacePage);

  return container;
}
