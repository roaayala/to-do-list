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

    if (elementConfig.createdAt) {
        const itemCreatedAt = document.createElement("p");
        itemCreatedAt.className = "page-header__meta";
        itemCreatedAt.textContent = `Created at ${createdAt}`;
        pageHeader.appendChild(itemCreatedAt);
    }

    if (elementConfig.description) {
        const itemDescription = document.createElement("p");
        itemDescription.className = "page-header__description";
        itemDescription.textContent = description || "No description";
        pageHeader.appendChild(itemDescription);
    }

    if (elementConfig.deadline) {
        const itemDeadline = document.createElement("p");
        itemDeadline.className = "page-header__meta page-header__deadline";
        itemDeadline.textContent = deadline
            ? deadline
            : "No deadline being added!";
        pageHeader.appendChild(itemDeadline);
    }

    if (elementConfig.priority) {
        const itemPriority = document.createElement("p");
        itemPriority.className = "page-header__badge";
        itemPriority.textContent = priority;
        pageHeader.appendChild(itemPriority);
    }

    return pageHeader;
}
