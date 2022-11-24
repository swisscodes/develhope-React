import React, { useRef } from 'react';

function UncontrolledLogin() {
  let loginFormRef = useRef({});

  return (
    <div>
      <form onSubmit={(e) => getFormFields(e, loginFormRef)} ref={loginFormRef}>
        <label htmlFor='username'>Username: </label>
        <input type='text' name='username' onChange={(e) => refset(e)} />
        <label htmlFor='password'>Password:</label>
        <input type='password' name='password' onChange={(e) => refset(e)} />
        <label htmlFor='remember'>Remember: </label>
        <input type='checkbox' name='remember' />
        <button type='submit'>Login</button>
        <button type='reset'>Reset</button>
      </form>
    </div>
  );

  //
  async function getFormFields(e) {
    e.preventDefault();
    if (e.target.type === 'reset') {
      loginFormRef.current = {};
    } else {
      // do some await to send data to server
      const { username, password, remember } = e.target.elements;
      console.log(username.value, password.value, remember.checked);
    }
  }

  function refset(e) {
    loginFormRef.current = {
      ...loginFormRef.current,
      [e.target.name]: e.target.value,
    };

    console.log(loginFormRef.current[e.target.name]);
  }
}

export default UncontrolledLogin;
