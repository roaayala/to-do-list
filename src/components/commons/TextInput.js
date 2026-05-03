export default function createTextInput({
	label = "",
	id = "",
	type = "",
	placeholder = "",
	value = "value",
}) {
	const formGroup = document.createElement("div");
	formGroup.className = "form-group";

	const textInputLabel = document.createElement("label");

	textInputLabel.textContent = label;
	textInputLabel.setAttribute("for", id);
	textInputLabel.className = "text-input-label";

	const textInput = document.createElement("input");
	textInput.type = type;
	textInput.id = id;
	textInput.name = id;
	textInput.placeholder = placeholder;
	textInput.value = value;
	textInput.className = "text-input";
	textInput.required = true;

	formGroup.appendChild(textInputLabel);
	formGroup.appendChild(textInput);

	return formGroup;
}
