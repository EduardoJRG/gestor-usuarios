import { useState } from "react";

const useFormulario = (init) => {
  const [formulario, setFormulario] = useState(init)
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

const reset = () => {
  setFormulario(init)
}

  return [formulario, handleChange, reset]
};

export default useFormulario
