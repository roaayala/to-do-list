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

  return taskPage;
}
