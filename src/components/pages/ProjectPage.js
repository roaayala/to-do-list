import createEmptyMessage from "../commons/EmptyMessage";
import createButton from "../commons/Button";
import createPageHeader from "./PageHeader";
import createPageAction from "./PageAction";

export default function createProjectPage({ project, tasks, actions }) {
  const projectPage = document.createElement("main");
  projectPage.className = "page-wrapper";

  // if no project active
  if (!actions.getActiveProject()) {
    const emptyMessage = createEmptyMessage("No project being active!");
    projectPage.appendChild(emptyMessage);
    return projectPage;
  }

  // HEADER
  const pageHeader = createPageHeader({ item: project });
  projectPage.appendChild(pageHeader);

  // CONTENT
  const pageContent = document.createElement("main");
  pageContent.className = "page-content";
  tasks.forEach((task) => {
    // item container
    const item = document.createElement("div");
    item.className = "page-content__item";

    // item title
    const title = document.createElement("h3");
    title.className = "page-content__item-title";
    title.textContent = task.name;
    item.appendChild(title);

    // actions container
    const actionsContainer = document.createElement("div");
    actionsContainer.className = "page-content__item-actions";

    // edit Button
    const editButton = createButton({
      text: "Edit",
      callback: () => {
        actions.handleEditTask(task.id);
      },
    });
    actionsContainer.appendChild(editButton);

    // delete button
    const deleteButton = createButton({
      text: "Delete",
      callback: () => {
        actions.handleRemoveTask(task.id);
      },
    });
    actionsContainer.appendChild(deleteButton);

    item.appendChild(actionsContainer);

    content.appendChild(item);
  });

  // ACTION
  const PageAction = createPageAction({
    buttonConfig: {
      text: "New Task",
      callback: () => {
        actions.showAddTaskDialog();
      },
    },
  });
  projectPage.appendChild(PageAction);

  return projectPage;
}
