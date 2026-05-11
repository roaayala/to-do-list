export default function createButton({
	id = null,
	style = "btn",
	type = "button",
	icon = "",
	text = "",
	callback,
}) {
	const button = document.createElement("button");

	if (id) button.id = id;
	button.className = style;
	button.type = type;

	if (icon) {
		const iconElement = document.createElement("span");
	}

	if (text) {
		if (icon) {
		}
	}

	button.addEventListener("click", (e) => {
		if (type !== "submit") {
			e.preventDefault();
		}

		if (callback) {
			callback(e);
		}
	});

	return button;
}
