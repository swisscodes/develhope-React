import React, { useState } from 'react';

function useGithubUsers() {
  const [gitUsers, setGitUsers] = useState([]);
  const [newUser, setNewUser] = useState('');

  return (
    <div>
      <h1>Add Github user</h1>
      <input type='text' onChange={(e) => onUser(e)} value={newUser} />
      <button type='button' onClick={(e) => addUser(e)}>
        Add User
      </button>
      <h1>Github Users</h1>
      {gitUsers.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
  function addUser(e) {
    if (newUser && newUser.length > 3) {
      setGitUsers((prevState) => [...prevState, newUser]);
      setNewUser(() => '');
    }
  }

  function onUser(e) {
    setNewUser(() => e.target.value);
  }
}

export default useGithubUsers;
