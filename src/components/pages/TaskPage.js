import createEmptyMessage from "../commons/EmptyMessage";
import createButton from "../commons/Button";
import createPageHeader from "./PageHeader";
import createPageAction from "./PageAction";

export default function createTaskPage({ task, todos, actions }) {
  const taskPage = document.createElement("main");
  taskPage.className = "page-wrapper";

  // HEADER
  const pageHeader = createPageHeader({ item: task });
  taskPage.appendChild(pageHeader);

  // CONTENT
  const taskTodos = todos.filter((todo) => todo.tsId === task.id);
  const pageContent = document.createElement("main");
  pageContent.className = "page-content";

  if (taskTodos.length === 0) {
    const emptyTodos = createEmptyMessage("No todo being added!");
    pageContent.appendChild(emptyTodos);
  } else {
    todos.forEach((todo) => {
      // item container
      const item = document.createElement("div");
      item.className = "page-content__item";

      // checkbox
      const checkbox = document.createElement("input");
      checkbox.className = "page-content__item-checkbox";
      checkbox.type = "checkbox";
      checkbox.checked = todo.isDone ? true : false;
      item.appendChild(checkbox);

      checkbox.addEventListener("click", () => {});

      // item title
      const title = document.createElement("h3");
      title.className = "page-content__item-title";
      title.textContent = todo.name;
      item.appendChild(title);

      title.addEventListener("click", () => {
        console.log(todo);
      });

      const actionsContainer = document.createElement("div");
      actionsContainer.className = "page-content__item-actions";

      const editButton = createButton({
        text: "Edit",
        callback: () => {
          console.log("edit");
        },
      });
      actionsContainer.appendChild(editButton);

      const deleteButton = createButton({
        text: "Delete",
        callback: () => {
          console.log("delete");
        },
      });
      actionsContainer.appendChild(deleteButton);

      item.appendChild(actionsContainer);
      pageContent.appendChild(item);
    });
  }

  taskPage.appendChild(pageContent);

  // ACTION
  const pageAction = createPageAction({
    buttonConfig: {
      text: "New Todo",
      callback: () => {
        actions.showAddTodoDialog(task.id);
      },
    },
  });
  taskPage.appendChild(pageAction);

  return taskPage;
}
