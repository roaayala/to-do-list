import createButton from "../commons/Button";

export default function createPageAction({
    buttonConfig = { text, style, callback },
}) {
    const pageAction = document.createElement("div");
    pageAction.className = "page-actions";

    const addButton = createButton({
        text: buttonConfig.text,
        style: buttonConfig.style,
        callback: () => {
            buttonConfig.callback();
        },
    });
    pageAction.appendChild(addButton);

    return pageAction;
}
