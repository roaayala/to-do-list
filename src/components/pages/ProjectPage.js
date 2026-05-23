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
    const pageHeader = createPageHeader({
        elementConfig: {
            title: true,
            description: true,
            createdAt: true,
            deadline: false,
            priority: false,
        },
        item: project,
    });
    projectPage.appendChild(pageHeader);

    // CONTENT
    const projectTasks = tasks.filter((task) => task.pId === project.id);
    const pageContent = document.createElement("main");
    pageContent.className = "page-content";

    if (projectTasks.length === 0) {
        const emptyTasks = createEmptyMessage("No task being added!");
        pageContent.appendChild(emptyTasks);
    } else {
        projectTasks.forEach((task) => {
            // item container
            const item = document.createElement("div");
            item.className = "page-content__item";

            // item title
            const title = document.createElement("h3");
            title.className = "page-content__item-title";
            title.textContent = task.name;
            item.appendChild(title);

            title.addEventListener("click", () => {
                actions.setActiveTask(task.id);
            });

            // actions container
            const actionsContainer = document.createElement("div");
            actionsContainer.className = "page-content__item-actions";

            // edit Button
            const editButton = createButton({
                icon: "edit",
                callback: () => {
                    actions.showEditTaskDialog(task.id);
                },
            });
            actionsContainer.appendChild(editButton);

            // delete button
            const deleteButton = createButton({
                icon: "delete",
                callback: () => {
                    actions.handleRemoveTask(task.id);
                },
            });
            actionsContainer.appendChild(deleteButton);

            item.appendChild(actionsContainer);

            pageContent.appendChild(item);
        });
    }
    projectPage.appendChild(pageContent);

    // ACTION
    const pageAction = createPageAction({
        buttonConfig: {
            text: "New Task",
            style: "btn btn-primary",
            callback: () => {
                actions.showAddTaskDialog(project.id);
            },
        },
    });
    projectPage.appendChild(pageAction);

    return projectPage;
}
