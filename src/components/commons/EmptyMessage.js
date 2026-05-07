export default function createEmptyMessage(message = "Message here") {
	const messageContainer = document.createElement("div");
	messageContainer.className = "message-container";

	const emptyMessage = document.createElement("span");
	emptyMessage.className = "empty-message";
	emptyMessage.textContent = message;

	messageContainer.appendChild(emptyMessage);

	return messageContainer;
}
