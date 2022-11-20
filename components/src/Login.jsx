import React, { useState } from 'react';

function Login() {
  const [formFields, setFormFields] = useState({});
  return (
    <div>
      <label htmlFor='username'>Username: </label>
      <input type='text' name='username' onChange={(e) => getFormFields(e)} />
      <label htmlFor='password'>Password: </label>
      <input
        type='password'
        name='password'
        onChange={(e) => getFormFields(e)}
      />
      <label htmlFor='remember'>Remember: </label>
      <input
        type='checkbox'
        name='remember'
        onChange={(e) => getFormFields(e)}
      />
      <button type='submit' disabled={validateInput()}>
        Login
      </button>
    </div>
  );

  //
  function getFormFields(e) {
    if (e.target.type !== 'checkbox') {
      setFormFields(() => ({
        ...formFields,
        [e.target.name]: e.target.value,
        remember: false,
      }));
    } else {
      setFormFields(() => ({
        ...formFields,
        [e.target.name]: e.target.checked,
      }));
    }
    console.log(formFields);
  }

  function validateInput() {
    return !(formFields.username && formFields.password) ? true : false;
  }
}

export default Login;
