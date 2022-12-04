import { useEffect, useState } from 'react';
import useSWR from 'swr';

function useGithubUser({ username }) {
  let error, data;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  function useRefetcher(username) {
    const { data: swrData, error: swrError } = useSWR(
      username ? `https://api.github.com/users/${username}` : null,
      fetcher
    );
    data = swrData;
    error = swrError;
    return { user: data, isLoading: !error && !data, isError: error };
  }

  const result = useRefetcher(username);

  return {
    ...result,
    useRefetcher: useRefetcher,
  };
}

export default useGithubUser;
