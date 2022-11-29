import React, { useEffect } from 'react';
import useGithubUser from './useGithubUser';

function Githubuser1() {
  const { user, error, loading, getGitUser } = useGithubUser();

  useEffect(() => {
    getGitUser('swissbobo');
    return () => {};
  });

  return (
    <div>
      <h1>useGithub hook</h1>
      {user && (
        <>
          <h1>username: {user?.login}</h1>
          <h2>repos: {user?.repos_url}</h2>
        </>
      )}
    </div>
  );
}

export default Githubuser1;
