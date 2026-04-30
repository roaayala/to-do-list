export default function createButton(text, callback) {
	const button = document.createElement("button");
	button.className = "btn";
	button.textContent = text;

	button.addEventListener("click", (e) => {
		e.preventDefault();
		callback();
	});

	return button;
}
