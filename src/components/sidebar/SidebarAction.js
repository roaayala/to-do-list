import createButton from "../commons/Button.js";
import showDialog from "../dialog-form/Dialog.js";

export default function createSidebarAction({ actions }) {
  const sidebarAction = document.createElement("div");
  sidebarAction.className = "sidebar__action";

  const addButton = createButton({
    text: "New Workspace",
    actions,
    callback: () => {
      showDialog({
        actions,
        dialogConfig: {
          title: "Workspace",
          initialData: null,
        },
        formConfig: { id: "form", elementPlaceholder: "Workspace" },
        onAdd: actions.handleAddWorkspace,
        onEdit: actions.handleRemoveWorkspace,
      });
    },
  });
  sidebarAction.appendChild(addButton);

  return sidebarAction;
}
