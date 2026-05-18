import createSidebar from "./sidebar/Sidebar.js";
import createProjectPage from "./pages/ProjectPage.js";
import createTaskPage from "./pages/TaksPage.js";

export default function createMainLayout(models, actions) {
  const container = document.createElement("div");
  container.className = "container";

  const { projects, tasks, todos } = models;
  const { getActiveProject, getActiveTask, getActiveTodo } = actions;

  const sidebar = createSidebar({
    projects,
    actions,
  });
  container.appendChild(sidebar);

  if (getActiveTodo()) {
  } else if (getActiveTask()) {
    const task = tasks.find((task) => getActiveTask() === task.id);

    const taskPage = createTaskPage({ task, todos, actions });

    container.appendChild(taskPage);
  } else {
    const project = projects.find(
      (project) => getActiveProject() === project.id,
    );

    const projectPage = createProjectPage({ project, tasks, actions });

    container.appendChild(projectPage);
  }

  return container;
}
