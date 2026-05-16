import createEmptyMessage from "../commons/EmptyMessage";

export default function createPageContent({
  items,
  actions,
  emptyMessageText,
}) {
  const pageContent = document.createElement("main");
  pageContent.className = "page-content";

  if (items.length === 0) {
    const emptyMessage = createEmptyMessage(emptyMessageText);
    pageContent.appendChild(emptyMessage);
    return pageContent;
  }

  items.forEach((item) => {
    const contentItem = document.createElement("div");
    contentItem.className = "page-content__item";

    const contentItemTitle = document.createElement("h3");
    contentItemTitle.className = "page-content__item-title";
    contentItemTitle.textContent = item.name;
    contentItem.appendChild(contentItemTitle);

    const contentItemActions = document.createElement("div");
    contentItemActions.className = "page-content__item-actions";
    // edit button
    // delete button
    contentItem.appendChild(contentItemActions);

    pageContent.appendChild(contentItem);
  });

  return pageContent;
}
