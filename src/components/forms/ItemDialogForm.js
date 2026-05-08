import createTextInput from "../commons/TextInput.js";
import createTextarea from "../commons/Textarea.js";
import createDateInput from "../commons/DateInput.js";
import getInputValue from "../../utils/getInputValue.js";

export default function createItemDialogForm({
	formId,
	initialData,
	onSaveForm,
	textInputElement = { label, id, type, placeholder },
	textareaElement = { label, id, placeholder },
	dateInputElement = { label, id, type },
}) {
	const form = document.createElement("form");
	form.id = formId;
	form.method = "dialog";
	form.className = "form";

	const textInput = createTextInput({
		label: textInputElement.label,
		id: textInputElement.id,
		type: textInputElement.type,
		placeholder: textInputElement.placeholder,
		value: initialData ? initialData.name : "",
	});

	const textarea = createTextarea({
		label: textareaElement.label,
		id: textareaElement.id,
		placeholder: textareaElement.placeholder,
		value: initialData ? initialData.description : "",
	});

	const dateInput = createDateInput({
		label: dateInputElement.label,
		id: dateInputElement.id,
		type: dateInputElement.type,
		value: initialData ? initialData.name : "",
	});

	form.appendChild(textInput);
	form.appendChild(textarea);
	form.appendChild(dateInput);

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const data = {
			name: getInputValue(form, textInputElement.id),
			description: getInputValue(form, textareaElement.id),
			dueDate: getInputValue(form, dateInputElement.id),
		};

		onSaveForm(data);
	});

	return form;
}
