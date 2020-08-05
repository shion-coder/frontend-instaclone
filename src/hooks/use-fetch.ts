import { useState, useRef } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import axios, { AxiosRequestConfig } from 'axios';

import { http } from 'services';

/* -------------------------------------------------------------------------- */

export const useFetch = <T>(
  config: AxiosRequestConfig,
): {
  isLoading: boolean;
  error: string | null;
  data: T | Record<string, unknown>;
} => {
  const isMounted = useRef<boolean | null>(null);
  const [state, setState] = useState<{
    isLoading: boolean;
    error: string | null;
    data: T | Record<string, unknown>;
  }>({
    isLoading: true,
    error: null,
    data: {},
  });

  useDeepCompareEffect(() => {
    isMounted.current = true;
    const source = axios.CancelToken.source();

    (async () => {
      const { data } =
        (await http({ ...config, cancelToken: source.token }).catch(() =>
          setState({
            isLoading: false,
            error: 'An error occurred when fetching data',
            data: {},
          }),
        )) || {};

      if (isMounted.current && data) {
        setState({ isLoading: false, error: null, data });
      }
    })();

    return () => {
      isMounted.current = false;
      source.cancel();
    };
  }, [config]);

  return state;
};
