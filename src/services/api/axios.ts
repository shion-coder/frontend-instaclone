import axios from 'axios';
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
  (error) => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if (!expectedError) {
      logger.log(error);

      toast.dismiss('unexpected-error');
      toast.error('An unexpected error occurred', { toastId: 'unexpected-error' });
    }

    if (error.response && error.response.status === 401) {
      store.dispatch(logout());

      history.push('/login');
    }

    return Promise.reject(error);
  },
);
