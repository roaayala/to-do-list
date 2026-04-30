export default function createButton(text) {
	const button = document.createElement("button");
	button.className = "btn";
	button.textContent = text;

	return button;
}
