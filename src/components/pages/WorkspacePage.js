import createPageHeader from "./PageHeader.js";
import createPageContent from "./PageContent.js";
import createPageAction from "./PageAction.js";

import createEmptyMessage from "../commons/EmptyMessage.js";

export default function createWorkspacePage({ workspace, actions }) {
	const pageWrapper = document.createElement("div");
	pageWrapper.className = "page-wrapper";

	if (!workspace) {
		const emptyMessage = createEmptyMessage("No workspace being selected!");
		pageWrapper.appendChild(emptyMessage);

		return pageWrapper;
	}

	const workspaceHeader = createPageHeader({
		name: workspace.name,
		description: workspace.description,
	});

	const workspaceContent = createPageContent({ workspace: workspace });

	const workspaceActions = createPageAction({ workspace, actions });

	pageWrapper.appendChild(workspaceHeader);
	pageWrapper.appendChild(workspaceContent);
	pageWrapper.appendChild(workspaceActions);
	return pageWrapper;
}
