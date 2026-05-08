export default function createSelect({ label, id, value = "" }) {
	const priorities = ["low", "medium", "high"];

	const formGroup = document.createElement("div");
	formGroup.className = "form-group__select";

	const textInputLabel = document.createElement("label");
	textInputLabel.textContent = label;
	textInputLabel.setAttribute("for", id);
	textInputLabel.className = "label";

	const select = document.createElement("select");
	select.id = id;
	select.setAttribute("name", id);

	priorities.forEach((priority) => {
		const option = document.createElement("option");
		option.value = priority;
		option.textContent = priority;

		select.appendChild(option);
	});

	formGroup.appendChild(textInputLabel);
	formGroup.appendChild(select);

	return formGroup;
}
