export default function createPageHeader({
  elementConfig = {
    title: true,
    description: true,
    createdAt: true,
    deadline: false,
    priority: false,
  },
  item,
}) {
  const { createdAt, name, description, deadline, priority } = item;

  const pageHeader = document.createElement("header");
  pageHeader.className = "page-header";

  if (elementConfig.title) {
    const itemTitle = document.createElement("h2");
    itemTitle.className = "page-header__title";
    itemTitle.textContent = name;
    pageHeader.appendChild(itemTitle);
  }

  if (elementConfig.description) {
    const itemDescription = document.createElement("p");
    itemDescription.className = "page-header__description";
    itemDescription.textContent = description ? description : "No description";
    pageHeader.appendChild(itemDescription);
  }

  if (elementConfig.createdAt) {
    const itemCreatedAt = document.createElement("p");
    itemCreatedAt.textContent = createdAt;
    pageHeader.appendChild(itemCreatedAt);
  }

  if (elementConfig.deadline) {
    const itemDeadline = document.createElement("p");
    itemDeadline.textContent = deadline ? deadline : "No deadline being added!";
    pageHeader.appendChild(itemDeadline);
  }

  if (elementConfig.priority) {
    const itemPriority = document.createElement("p");
    itemPriority.textContent = priority;
    pageHeader.appendChild(itemPriority);
  }

  return pageHeader;
}
