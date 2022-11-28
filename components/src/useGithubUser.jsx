import { useEffect, useState } from 'react';

function useGithubUser(username) {
  const [user, setUser] = useState();
  useEffect(() => {
    (async function () {
      await fetch(`https://api.github.com/users/${username}`).then((response) =>
        response.json().then((data) => setUser((user) => (user = data)))
      );
    })();
    return () => {};
  });

  return user;
}

export default useGithubUser;
