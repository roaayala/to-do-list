import createButton from "../commons/Button.js";

export default function createSidebarAction({}) {
  const sidebarAction = document.createElement("div");
  sidebarAction.className = "sidebar__action";

  const addButton = createButton({
    text: "New Workspace",
    callback: () => {},
  });
  sidebarAction.appendChild(addButton);

  return sidebarAction;
}
