import createButton from "../commons/Button";
import showDialog from "../dialog-form/Dialog";

export default function createPageActions({
  buttonConfig = { text },
  dialogConfig = { title },
  formConfig = { id, elementPlaceholder },
  onAdd,
  onEdit,
}) {
  const pageActions = document.createElement("div");
  pageActions.className = "page-actions";

  const addButton = createButton({
    text: buttonConfig.text,
    callback: () => {
      showDialog({
        initialData: null,
        dialogConfig: { title: dialogConfig.title },
        formConfig: {
          id: formConfig.id,
          elementPlaceholder: formConfig.elementPlaceholder,
        },
        onAdd: onAdd,
        onEdit: onEdit,
      });
    },
  });
  pageActions.appendChild(addButton);

  return pageActions;
}
