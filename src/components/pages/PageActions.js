import createButton from "../commons/Button";

export default function createPageActions({
  actions,
  buttonConfig = { text },
}) {
  const pageActions = document.createElement("div");
  pageActions.className = "page-actions";

  const addButton = createButton({
    text: buttonConfig.text,
    callback: () => {
      actions.showAddProjectDialog();
    },
  });
  pageActions.appendChild(addButton);

  return pageActions;
}
