export default function createButton({
  id = null,
  style = "btn",
  type = "button",
  text = "",
  callback,
}) {
  const button = document.createElement("button");

  if (id) button.id = id;
  button.className = style;
  button.type = type;

  if (text) button.textContent = text;

  button.addEventListener("click", (e) => {
    if (type !== "submit") {
      e.preventDefault();
    }

    if (callback) {
      callback(e);
    }
  });

  return button;
}
