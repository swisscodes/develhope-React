import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Github() {
  let { userId } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    (async function () {
      await fetch(`https://api.github.com/users/${userId}`).then((response) =>
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
