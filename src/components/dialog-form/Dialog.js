import createButton from "../commons/Button.js";

export default function showDialog({
  actions,
  dialogConfig = {
    title,
  },
}) {
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
  const body = document.createElement("main");
  body.className = "dialog__main";
  dialog.appendChild(body);

  // action
  const action = document.createElement("footer");
  action.className = "dialog__action";
  // cancel button
  const cancelButton = createButton({ text: "Cancel" });
  // save button
  const saveButton = createButton({
    text: "Save",
    type: "submit",
    callback: () => {
      console.log("click");
    },
  });
  action.appendChild(cancelButton);
  action.appendChild(saveButton);
  dialog.appendChild(action);

  document.querySelector("#app").appendChild(dialog);
  dialog.showModal();

  return dialog;
}
