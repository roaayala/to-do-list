import createEmptyMessage from "../commons/EmptyMessage";

export default function createPageContent({
  projects,
  actions,
  emptyMessageText,
}) {
  const pageContent = document.createElement("main");
  pageContent.className = "page-content";

  if (projects.length === 0) {
    const emptyMessage = createEmptyMessage(emptyMessageText);
    pageContent.appendChild(emptyMessage);
    return pageContent;
  }

  return pageContent;
}
