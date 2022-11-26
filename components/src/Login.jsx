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
        checked={formFields.remember ?? false}
        onChange={(e) => getFormFields(e)}
      />
      <button
        className={
          !formFields.password || formFields.password?.length < 8
            ? 'form-error'
            : 'form-success'
        }
        type='submit'
        disabled={validateInput()}
        onClick={(e) => onLogin(e, formFields)}
      >
        Login
      </button>
      <button type='reset' onClick={(e) => onLogin(e)}>
        Reset
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
  }

  function validateInput() {
    return !(formFields.username && formFields.password) ? true : false;
  }

  async function onLogin(e, formState) {
    // do some await to send data to server
    if (e.target.type === 'reset') {
      setFormFields({});
    }
  }
}

export default Login;
