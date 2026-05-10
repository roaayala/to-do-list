import createButton from "../commons/Button.js";
import createEmptyMessage from "../commons/EmptyMessage.js";
import showItemDialog from "../dialogs/ItemDialog.js";

export default function createPageContent({
	items,
	actions,
	emptyMessageText,
	setActiveItem,
	dialogConfig = { title, formId, onSaveItem, onEditItem },
	onDelete,
}) {
	const pageContent = document.createElement("main");
	pageContent.className = "page-content";

	if (items.length === 0) {
		const emptyMessage = createEmptyMessage(emptyMessageText);
		pageContent.appendChild(emptyMessage);

		return pageContent;
	}

	items.forEach((item) => {
		const itemContainer = document.createElement("div");
		itemContainer.id = item.id;
		itemContainer.className = "item-container";

		const itemName = document.createElement("span");
		itemName.textContent = item.name;

		itemName.addEventListener("click", () => {
			setActiveItem(item.id);
		});

		const editButton = createButton({
			text: "Edit",
			callback: (e) => {
				e.stopPropagation();
				showItemDialog({
					title: dialogConfig.title,
					formId: dialogConfig.formId,
					initialData: item,
					onSave: dialogConfig.onSaveItem,
					onEdit: dialogConfig.onEditItem,
				});
			},
		});

		const deleteButton = createButton({
			text: "Delete",
			callback: (e) => {
				e.stopPropagation();
				onDelete(item.id);
			},
		});

		itemContainer.appendChild(itemName);
		itemContainer.appendChild(editButton);
		itemContainer.appendChild(deleteButton);

		pageContent.appendChild(itemContainer);
	});

	return pageContent;
}
