import createPageHeader from "./PageHeader.js";
import createPageContent from "./PageContent.js";
import createPageAction from "./PageAction.js";

import createEmptyMessage from "../commons/EmptyMessage.js";

export default function createProjectPage({ task, actions }) {
	const pageWrapper = document.createElement("div");
	pageWrapper.className = "page-wrapper";

	const taskHeader = createPageHeader({
		name: task.name,
		description: task.description,
	});
	pageWrapper.appendChild(taskHeader);

	const todos = task.todo.items;

	const taskContent = createPageContent({
		items: todos,
		actions: actions,
		emptyMessageText: "No todo being added!",
		setActiveItem: actions.setActiveTask,
		dialogConfig: {
			title: "Task",
			formId: "taskDialogForm",
			onSaveItem: actions.saveTask,
			onEditItem: actions.EditTask,
		},
		onDelete: actions.deleteTask,
	});

	const taskAction = createPageAction({
		buttonElement: { text: "New Task" },
		itemDialogElement: {
			title: "Task Details",
			formId: "taskDialogForm",
			initialData: null,
			onSave: actions.saveTask,
			onEdit: actions.EditTask,
		},
	});

	pageWrapper.appendChild(taskHeader);
	pageWrapper.appendChild(taskContent);
	pageWrapper.appendChild(taskAction);

	return pageWrapper;
}
