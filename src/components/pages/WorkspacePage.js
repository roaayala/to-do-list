import createEmptyMessage from "../commons/EmptyMessage";
import createPageHeader from "./PageHeader";
import createPageContent from "./PageContent";
import createPageActions from "./PageActions";

export default function createWorkspacePage({ workspace, projects, actions }) {
  const workspacePage = document.createElement("main");
  workspacePage.className = "page-wrapper";

  if (!actions.getActiveWorkspace()) {
    const emptyMessage = createEmptyMessage("No workspace being active!");
    workspacePage.appendChild(emptyMessage);
    return workspacePage;
  }

  const workspaceHeader = createPageHeader({ workspace });
  workspacePage.appendChild(workspaceHeader);

  const workspaceContent = createPageContent({
    projects,
    actions,
    emptyMessageText: "Project is empty!",
  });
  workspacePage.appendChild(workspaceContent);

  const workspaceActions = createPageActions({
    actions,
    buttonConfig: { text: "Add Project" },
  });
  workspacePage.appendChild(workspaceActions);

  return workspacePage;
}
