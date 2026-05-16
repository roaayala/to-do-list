import createSidebar from "./sidebar/Sidebar.js";
import createWorkspacePage from "./pages/WorkspacePage.js";

export default function createMainLayout(models, actions) {
  const container = document.createElement("div");
  container.className = "container";

  const sidebar = createSidebar({
    workspaces: models.workspaces,
    actions,
  });
  container.appendChild(sidebar);

  const workspace = models.workspaces.find(
    (workspace) => workspace.id === actions.getActiveWorkspace(),
  );

  const projects = models.projects.filter(
    (project) => project.wsId === actions.getActiveWorkspace(),
  );

  const workspacePage = createWorkspacePage({
    workspace,
    projects,
    actions,
  });
  container.appendChild(workspacePage);

  return container;
}
