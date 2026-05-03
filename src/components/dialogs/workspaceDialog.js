import createButton from "../commons/Button.js";
import createTextInput from "../commons/TextInput.js";

export default function showWorkspaceDialog(dialogHeaderTitle) {
	const closeDialog = () => {
		dialog.close();
		dialog.remove();
	};

	const dialog = document.createElement("dialog");

	const headerTitle = document.createElement("h2");
	headerTitle.textContent = dialogHeaderTitle;

	const form = document.createElement("form");
	form.id = "form";
	form.method = "dialog";
	form.className = "form";

	const textInput = createTextInput({
		label: "Workspace Name",
		id: "workspaceName",
		type: "text",
		placeholder: "Enter your new workspace name!",
		value: "",
	});

	form.appendChild(textInput);

	//
	const dialogActions = document.createElement("div");
	dialogActions.className = "dialog-actions";

	const closeButton = createButton(
		null,
		"btn",
		"button",
		"Cancel",
		closeDialog,
	);

	const saveButton = createButton(null, "btn", "submit", "Save", () => {});
	saveButton.setAttribute("form", "form");

	// dialog actions
	dialogActions.appendChild(closeButton);
	dialogActions.appendChild(saveButton);

	// dialog
	dialog.appendChild(headerTitle);
	dialog.appendChild(form);
	dialog.appendChild(dialogActions);

	// form event
	form.addEventListener("submit", (e) => {
		function getInput(elementId) {
			return document.querySelector(`#${elementId}`).value;
		}
		console.log(getInput("workspaceName"));

		closeDialog();
	});

	// app container
	document.querySelector(".container").appendChild(dialog);

	dialog.showModal();
}
