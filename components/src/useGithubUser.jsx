import { useEffect, useState } from 'react';
import useSWR from 'swr';

function useGithubUser({ username }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useGithubUser;
