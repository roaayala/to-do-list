import createSidebar from "./SidebarLayout.js";
import createWorkspacePage from "./pages/WorkspacePage.js";
import createProjectPage from "./pages/ProjectPage.js";

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

	if (activeProject) {
		// const currentProject = currentWorkspace.projects.items.find(
		// 	(project) => project.id === activeProject,
		// );

		// const projectPage = createProjectPage({
		// 	project: currentProject,
		// 	actions: actions,
		// });

		// container.appendChild(projectPage);

		if (activeTask) {
			if (activeTodo) {
			}
		}
	} else {
		const workspacePage = createWorkspacePage({
			workspace: currentWorkspace,
			actions: actions,
			activeProject: activeProject,
		});

		container.appendChild(workspacePage);
	}

	return container;
}
