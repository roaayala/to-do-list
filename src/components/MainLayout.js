import createSidebar from "./SidebarLayout.js";
import createWorkspacePage from "./pages/WorkspacePage.js";

export default function createMainLayout(
	models,
	actions,
	activeWorkspace,
	activeProject,
	activeTask,
	activeTodo,
) {
	const workspaces = models.workspaces.items;

	const container = document.createElement("div");
	container.className = "container";

	const sidebar = createSidebar(workspaces, actions, activeWorkspace);

	// append to container
	container.appendChild(sidebar);

	const currentWorkspace = workspaces.find(
		(workspace) => workspace.id === activeWorkspace,
	);

	const workspacePage = createWorkspacePage({
		workspace: currentWorkspace,
		actions: actions,
	});

	container.appendChild(workspacePage);

	return container;
}
