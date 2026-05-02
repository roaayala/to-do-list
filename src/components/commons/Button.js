export default function createButton(id, style, text, callback) {
	const button = document.createElement("button");

	if (id) {
		button.id = id;
	}

	button.className = style;

	button.textContent = text;

	button.addEventListener("click", (e) => {
		e.preventDefault();
		callback(e);
	});

	return button;
}
