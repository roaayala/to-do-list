import getInputValue from "../../utils/getInputValue.js";
import createDateInput from "../commons/DateInput.js";
import createSelect from "../commons/Select.js";
import createTextInput from "../commons/TextInput.js";
import createTextarea from "../commons/Textarea.js";

export default function createDialogForm({
  initialData = null,
  formConfig = {
    id: "",
    textInputConfig: {
      label: "",
      id: "",
      placeholder: "",
    },
    textareaConfig: {
      label: "",
      id: "",
      placeholder: "",
    },
    dateInputConfig: {
      isActive: false,
      label: "",
      id: "",
    },
    selectConfig: {
      isActive: false,
      label: "",
      id: "",
    },
  },
  onSubmit,
}) {
  const form = document.createElement("form");
  form.id = formConfig.id;
  form.className = "form";

  const textInput = createTextInput({
    label: formConfig.textInputConfig.label,
    id: formConfig.textInputConfig.id,
    placeholder: formConfig.textInputConfig.placeholder,
    value: initialData ? initialData.name : "",
  });
  form.appendChild(textInput);

  const textarea = createTextarea({
    label: formConfig.textareaConfig.label,
    id: formConfig.textareaConfig.id,
    placeholder: formConfig.textareaConfig.placeholder,
    value: initialData ? initialData.description : "",
  });
  form.appendChild(textarea);

  if (formConfig.dateInputConfig.isActive) {
    const dateInput = createDateInput({
      label: formConfig.dateInputConfig.label,
      id: formConfig.dateInputConfig.id,
      value: initialData ? initialData.deadline : "",
    });
    form.appendChild(dateInput);
  }

  if (formConfig.selectConfig.isActive) {
    const select = createSelect({
      label: formConfig.selectConfig.label,
      id: formConfig.selectConfig.id,
      value: initialData ? initialData.priority : "",
    });
    form.appendChild(select);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      name: getInputValue(form, formConfig.textInputConfig.id),
      description: getInputValue(form, formConfig.textareaConfig.id),
    };
    if (formConfig.dateInputConfig.isActive) {
      data.deadline = getInputValue(form, formConfig.dateInputConfig.id);
    }
    if (formConfig.selectConfig.isActive) {
      data.priority = getInputValue(form, formConfig.selectConfig.id);
    }

    onSubmit(data);
  });

  return form;
}
