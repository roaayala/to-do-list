export default function createPageHeader({
	name,
	description,
	dueDate,
	priority,
}) {
	const header = document.createElement("header");
	header.className = "page-header";

	const headerName = document.createElement("h2");
	headerName.textContent = name;

	const headerDescription = document.createElement("p");
	headerDescription.textContent = description
		? description
		: "No description being added";

	header.appendChild(headerName);
	header.appendChild(headerDescription);

	if (dueDate) {
		const headerDueDate = document.createElement("span");
		headerDueDate.textContent = dueDate;
		header.appendChild(headerDueDate);
	}

	if (priority) {
		const headerPriority = document.createElement("span");
		headerPriority.textContent = priority;
		header.appendChild(headerPriority);
	}

	return header;
}
