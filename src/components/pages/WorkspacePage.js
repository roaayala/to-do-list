import createEmptyMessage from "../commons/EmptyMessage";
import createButton from "../commons/Button";
import createPageHeader from "./PageHeader";
import createPageActions from "./PageActions";

export default function createWorkspacePage({ workspace, projects, actions }) {
  const workspacePage = document.createElement("main");
  workspacePage.className = "page-wrapper";

  if (!actions.getActiveWorkspace()) {
    const emptyMessage = createEmptyMessage("No workspace being active!");
    workspacePage.appendChild(emptyMessage);
    return workspacePage;
  }

  // HEADER
  const workspaceHeader = createPageHeader({ workspace });
  workspacePage.appendChild(workspaceHeader);

  // CONTENT
  const workspaceContent = document.createElement("main");
  workspaceContent.className = "page-content";

  if (projects.length === 0) {
    const emptyMessage = createEmptyMessage("No project being added!");
    workspaceContent.appendChild(emptyMessage);
  }

  projects.forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.className = "page-content__item";

    const projectItemTitle = document.createElement("h3");
    projectItemTitle.className = "page-content__item-title";
    projectItemTitle.textContent = project.name;
    projectItem.appendChild(projectItemTitle);

    const projectItemActions = document.createElement("div");
    projectItemActions.className = "page-content__item-actions";
    // edit button
    const editButton = createButton({
      text: "Edit",
      initialData: project,
      callback: () => {
        actions.showEditProjectDialog(project.id);
      },
    });
    projectItemActions.appendChild(editButton);
    // delete button
    const deleteButton = createButton({
      text: "Delete",
      callback: () => {
        actions.handleRemoveProject(project.id);
      },
    });
    projectItemActions.appendChild(deleteButton);
    projectItem.appendChild(projectItemActions);

    workspaceContent.appendChild(projectItem);
  });
  workspacePage.appendChild(workspaceContent);

  // ACTIONS
  const workspaceActions = createPageActions({
    actions,
    buttonConfig: { text: "Add Project" },
  });
  workspacePage.appendChild(workspaceActions);

  return workspacePage;
}
