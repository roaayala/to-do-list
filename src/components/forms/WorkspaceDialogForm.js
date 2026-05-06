import createTextInput from "../commons/TextInput.js";
import createTextarea from "../commons/Textarea.js";
import getInputValue from "../../utils/getInputValue.js";

export default function showWorkspaceDialog({
	formId,
	initialData,
	onSaveWorkspace,
}) {
	const form = document.createElement("form");
	form.id = formId;
	form.method = "dialog";
	form.className = "form";

	const textInput = createTextInput({
		label: "Workspace Name",
		id: "workspaceName",
		type: "text",
		placeholder: "Write your new workspace name!",
		value: initialData ? initialData.name : "",
	});

	const textarea = createTextarea({
		label: "Workspace Description",
		id: "workspaceDescription",
		placeholder: "Write your new workspace description!",
		value: initialData ? initialData.description : "",
	});

	form.appendChild(textInput);
	form.appendChild(textarea);

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const data = {
			name: getInputValue(form, "workspaceName"),
			description: getInputValue(form, "workspaceDescription"),
		};

		onSaveWorkspace(data);
	});

	return form;
}
