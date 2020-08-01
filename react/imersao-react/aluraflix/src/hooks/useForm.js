import { useState } from "react";

export default function useForm(valoresIniciais) {
  const [values, setValue] = useState(valoresIniciais);

  function handleFormData(key, value) {
    setValue({
      ...values,
      [key]: value,
    });
  }

  function clearForm() {
    setValue(valoresIniciais);
  }

  return [values, handleFormData, clearForm];
}
