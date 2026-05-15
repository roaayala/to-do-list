import createButton from "../commons/Button.js";
import createDialogForm from "./DialogForm.js";

export default function showDialog({
  initialData = null,
  dialogConfig = {
    title,
  },
  formConfig = {
    id,
    textInputConfig: {
      label,
      id,
      placeholder,
    },
    textareaConfig: {
      label,
      id,
      placeholder,
    },
    dateInputConfig: {
      isActive,
      label,
      id,
    },
    selectConfig: {
      isActive,
      label,
      id,
    },
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
      textInputConfig: {
        label: formConfig.textInputConfig.label,
        id: formConfig.textInputConfig.id,
        placeholder: formConfig.textInputConfig.placeholder,
      },
      textareaConfig: {
        label: formConfig.textareaConfig.label,
        id: formConfig.textareaConfig.id,
        placeholder: formConfig.textareaConfig.placeholder,
      },
      dateInputConfig: {
        isActive: formConfig.dateInputConfig.isActive,
        label: formConfig.dateInputConfig.label,
        id: formConfig.dateInputConfig.id,
      },
      selectConfig: {
        isActive: formConfig.selectConfig.isActive,
        label: formConfig.selectConfig.label,
        id: formConfig.selectConfig.id,
      },
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
