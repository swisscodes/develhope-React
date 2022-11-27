import React, { useState, useEffect } from 'react';

function Github() {
  const [user, setUser] = useState();

  useEffect(() => {
    (async function () {
      await fetch(`https://api.github.com/users/${'swissbobo'}`).then(
        (response) => response.json().then((data) => setUser(() => data))
      );
    })();
    return () => {};
  });
  return <div>{user.login}</div>;
}

export default Github;
