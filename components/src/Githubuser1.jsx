import React, { useEffect } from 'react';
import useGithubUser from './useGithubUser';

function Githubuser1({ username }) {
  const { user, isLoading, isError } = useGithubUser({ username });

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

export default Githubuser1;
