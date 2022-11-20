import React, { useState } from 'react';

function Login() {
  const [formFields, setFormFields] = useState({});
  return (
    <div>
      <label htmlFor='username'>Username: </label>
      <input
        type='text'
        name='username'
        value={formFields.username ?? ''}
        onChange={(e) => getFormFields(e, formFields)}
      />
      <label htmlFor='password'>Password: </label>
      <input
        type='password'
        name='password'
        value={formFields.password ?? ''}
        onChange={(e) => getFormFields(e)}
      />
      <label htmlFor='remember'>Remember: </label>
      <input
        type='checkbox'
        name='remember'
        onChange={(e) => getFormFields(e)}
      />
      <button
        type='submit'
        disabled={validateInput()}
        onClick={(e) => onLogin(e, formFields)}
      >
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

  async function onLogin(e, formState) {
    // do some await to send data to server
    setFormFields({});
  }
}

export default Login;
