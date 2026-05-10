import createPageHeader from "./PageHeader.js";
import createPageContent from "./PageContent.js";
import createPageAction from "./PageAction.js";

import createEmptyMessage from "../commons/EmptyMessage.js";

export default function createProjectPage({ project, actions }) {
	const pageWrapper = document.createElement("div");
	pageWrapper.className = "page-wrapper";

	const tasks = project.items;

	if (!tasks) {
		const emptyMessage = createEmptyMessage("No task being added!");
		pageWrapper.appendChild(emptyMessage);
		return pageWrapper;
	}

	return pageWrapper;
}
