import { useState } from 'react';

function useForm() {
  const [formState, setFormState] = useState({});

  function updateChange(e) {
    setFormState((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

  return { updateChange: updateChange, formState: formState };
}

export default useForm;
