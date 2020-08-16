import axios from 'axios';
import axiosRetry from 'axios-retry';
import { toast } from 'react-toastify';

import { API_URL, API_TIMEOUT } from 'config';
import { logger } from 'services';

/* -------------------------------------------------------------------------- */

export const http = axios.create({
  baseURL: `${API_URL}/api`,
  timeout: API_TIMEOUT,
});

/**
 * Set default header with token
 */

export const setAuthorizationHeader = (token: string | null = null): void => {
  token
    ? (http.defaults.headers.common['Authorization'] = `Bearer ${token}`)
    : delete http.defaults.headers.common['Authorization'];
};

/**
 *  Intercepts failed axios requests and retries them
 */

axiosRetry(http, { retryDelay: axiosRetry.exponentialDelay });

/**
 * Handling global response error
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

    return Promise.reject(error);
  },
);
