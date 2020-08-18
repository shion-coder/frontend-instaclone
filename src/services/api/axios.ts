import axios, { AxiosError } from 'axios';
import axiosRetry from 'axios-retry';
import { toast } from 'react-toastify';

import { API_URL, API_TIMEOUT } from 'config';
import { history } from 'utils';
import { store, logout } from 'store';
import { logger } from 'services';

/* -------------------------------------------------------------------------- */

export const http = axios.create({
  baseURL: `${API_URL}/api`,
  timeout: API_TIMEOUT,
});

/**
 *  Intercepts failed axios requests and retries them
 */

axiosRetry(http, { retryDelay: axiosRetry.exponentialDelay });

/**
 * Handling global request
 */

http.interceptors.request.use((config) => {
  const token = store.getState().auth.token;

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

/**
 * Handling global response
 */

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (axios.isCancel(error)) {
      return;
    }

    if (error.code === 'ECONNABORTED') {
      return toast.error('Request Timeout', { toastId: 'timeout-error' });
    }

    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        store.dispatch(logout());

        return history.push('/login');
      }

      if (status >= 500 || status < 400) {
        logger.log(error);

        toast.dismiss('unexpected-error');

        return toast.error('An unexpected error occurred', { toastId: 'unexpected-error' });
      }

      return Promise.reject(error);
    }
  },
);
