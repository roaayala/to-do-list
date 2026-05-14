import createButton from "../commons/Button.js";

import createDialogForm from "./DialogForm.js";

export default function showDialog({
  initialData = null,
  dialogConfig = {
    title,
  },
  formConfig = {
    id,
    elementPlaceholder,
  },
  onAdd,
  onEdit,
}) {
  const closeDialog = () => {
    dialog.close();
    dialog.remove();
  };

  const dialog = document.createElement("dialog");
  dialog.className = "dialog";

  // header
  const header = document.createElement("header");
  header.className = "dialog__header";

  const headerTitle = document.createElement("h2");
  headerTitle.className = "dialog__header-title";
  headerTitle.textContent = initialData
    ? `Edit ${dialogConfig.title} Details`
    : `Save ${dialogConfig.title} Details`;

  header.appendChild(headerTitle);
  dialog.appendChild(header);

  // body
  const form = createDialogForm({
    initialData,
    formConfig: {
      id: formConfig.id,
      elementPlaceholder: formConfig.elementPlaceholder,
    },
    onSubmit: (data) => {
      if (initialData) {
        onEdit(data);
      } else {
        onAdd(data);
      }

      closeDialog();
    },
  });

  dialog.appendChild(form);

  // action
  const action = document.createElement("footer");
  action.className = "dialog__action";
  // cancel button
  const cancelButton = createButton({
    text: "Cancel",
    callback: closeDialog,
  });
  // save button
  const saveButton = createButton({
    text: "Save",
    type: "submit",
  });
  saveButton.setAttribute("form", formConfig.id);

  action.appendChild(cancelButton);
  action.appendChild(saveButton);
  dialog.appendChild(action);

  document.querySelector("#app").appendChild(dialog);
  dialog.showModal();

  return dialog;
}
