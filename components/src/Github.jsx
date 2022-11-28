import React, { useState, useEffect } from 'react';

function Github() {
  const [user, setUser] = useState();

  useEffect(() => {
    (async function () {
      await fetch(`https://api.github.com/users/${'swissbobo'}`).then(
        (response) =>
          response.json().then((data) => setUser((user) => (user = data)))
      );
    })();
    return () => {};
  });
  return (
    <div>
      {user && (
        <>
          <h1>username: {user?.login}</h1>
          <h2>repos: {user?.repos_url}</h2>
        </>
      )}
    </div>
  );
}

export default Github;
