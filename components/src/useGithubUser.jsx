import { useEffect, useState } from 'react';
import useSWR from 'swr';

function useGithubUser({ username }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    useReFetcher: (username) =>
      useSWR(
        username ? `https://api.github.com/users/${username}` : null,
        fetcher
      ),
  };
}

export default useGithubUser;
