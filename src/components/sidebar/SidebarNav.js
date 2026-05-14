import createButton from "../commons/Button.js";
import createEmptyMessage from "../commons/EmptyMessage.js";
import showDialog from "../dialog-form/Dialog.js";

export default function createSidebarNav({
  actions,
  workspaces,
  activeWorkspace,
}) {
  const sidebarNav = document.createElement("nav");
  sidebarNav.className = "sidebar__nav";

  if (workspaces.length === 0) {
    const emptyMessage = createEmptyMessage("Workspaces is empty!");
    sidebarNav.appendChild(emptyMessage);
    return sidebarNav;
  }

  workspaces.forEach((workspace) => {
    const navItem = document.createElement("div");
    navItem.className = "sidebar__nav-item";
    navItem.id = workspace.id;

    const navItemTitle = document.createElement("span");
    navItemTitle.className = "sidebar__nav-item-title";
    navItemTitle.textContent = workspace.name;
    navItem.appendChild(navItemTitle);

    navItemTitle.addEventListener("click", () => {
      actions.setActiveWorkspace(workspace.id);
    });

    if (activeWorkspace === workspace.id) {
      const navItemActions = document.createElement("div");
      navItemActions.className = "sidebar__nav-item-actions";

      const editButton = createButton({
        text: "Edit",
        initialData: workspace,
        callback: () => {
          showDialog({
            initialData: workspace,
            dialogConfig: {
              title: "Workspace",
            },
            formConfig: { id: "form", elementPlaceholder: "Workspace" },
            onAdd: actions.handleAddWorkspace,
            onEdit: actions.handleEditWorkspace,
          });
        },
      });
      const deleteButton = createButton({
        text: "Delete",
        callback: () => {
          actions.handleRemoveWorkspace(workspace.id);
        },
      });

      navItemActions.appendChild(editButton);
      navItemActions.appendChild(deleteButton);
      navItem.appendChild(navItemActions);
    }

    sidebarNav.appendChild(navItem);
  });

  return sidebarNav;
}
