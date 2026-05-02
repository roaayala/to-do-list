export default function createButton(id, style, text, callback) {
	const button = document.createElement("button");
	button.id = id;
	button.className = style.join("");
	button.textContent = text;

	button.addEventListener("click", (e) => {
		e.preventDefault();
		callback(e);
	});

	return button;
}
