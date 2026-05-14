import getInputValue from "../../utils/getInputValue.js";
import createButton from "../commons/Button.js";
import createTextarea from "../commons/Textarea.js";
import createTextInput from "../commons/TextInput.js";

export default function showDialog({
  actions,
  dialogConfig = {
    id,
    title,
  },
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
  headerTitle.textContent = dialogConfig.title;

  header.appendChild(headerTitle);
  dialog.appendChild(header);

  // body
  const form = document.createElement("form");
  form.id = "form";
  form.className = "form";

  const textInput = createTextInput({
    label: "Name",
    id: "name",
    placeholder: "Workspace Name",
  });
  form.appendChild(textInput);

  const textarea = createTextarea({
    label: "Description",
    id: "description",
    placeholder: "Workspace Description",
  });

  form.appendChild(textarea);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      name: getInputValue(form, "name"),
      desription: getInputValue(form, "description"),
    };

    actions.handleAddWorkspace(data);

    closeDialog();
  });

  dialog.appendChild(form);

  // action
  const action = document.createElement("footer");
  action.className = "dialog__action";
  // cancel button
  const cancelButton = createButton({ text: "Cancel", callback: closeDialog });
  // save button
  const saveButton = createButton({
    text: "Save",
    type: "submit",
  });
  saveButton.setAttribute("form", "form");

  action.appendChild(cancelButton);
  action.appendChild(saveButton);
  dialog.appendChild(action);

  document.querySelector("#app").appendChild(dialog);
  dialog.showModal();

  return dialog;
}
