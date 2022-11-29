import { useEffect, useState } from 'react';

function useGithubUser() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  async function getGitUser(username) {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const resData = await res.json();
      setUser((state) => (state = resData));
    } catch (error) {
      setError((state) => (state = error));
    } finally {
      setLoading(false);
    }
  }

  return { user, error, loading, getGitUser };
}

export default useGithubUser;
