import createTextInput from "../commons/TextInput.js";
import getInputValue from "../../utils/getInputValue.js";

export default function createWorkspaceDialogForm({ formId, callback }) {
	const form = document.createElement("form");
	form.id = formId;
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

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const newWorkspace = getInputValue(form, "workspaceName");
		console.log(newWorkspace);

		callback();
	});

	return form;
}
