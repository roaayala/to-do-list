import getInputValue from "../../utils/getInputValue.js";
import createTextInput from "../commons/TextInput.js";
import createTextarea from "../commons/Textarea.js";

export default function createDialogForm({
  initialData,
  formConfig = {
    id,
    elementPlaceholder,
  },
  onSubmit,
}) {
  const form = document.createElement("form");
  form.id = formConfig.id;
  form.className = "form";

  const textInput = createTextInput({
    label: "Name",
    id: "name",
    placeholder: `${formConfig.elementPlaceholder} Name`,
    value: initialData ? initialData.name : "",
  });
  form.appendChild(textInput);

  const textarea = createTextarea({
    label: "Description",
    id: "description",
    placeholder: `${formConfig.elementPlaceholder} Description`,
    value: initialData ? initialData.desription : "",
  });

  form.appendChild(textarea);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      name: getInputValue(form, "name"),
      description: getInputValue(form, "description"),
    };

    onSubmit(data);
  });

  return form;
}
