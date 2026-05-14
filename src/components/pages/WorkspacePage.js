import createEmptyMessage from "../commons/EmptyMessage";
import createPageHeader from "./PageHeader";

export default function createWorkspacePage({
  workspace,
  actions,
  activeWorkspace,
}) {
  const workspacePage = document.createElement("main");
  workspacePage.className = "page-wrapper";

  if (!activeWorkspace) {
    const emptyMessage = createEmptyMessage("No workspace being active!");
    workspacePage.appendChild(emptyMessage);
    return workspacePage;
  }

  const workspaceHeader = createPageHeader({ workspace });
  workspacePage.appendChild(workspaceHeader);

  return workspacePage;
}
