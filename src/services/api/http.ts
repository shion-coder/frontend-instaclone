import axios from 'axios';
import axiosRetry from 'axios-retry';
import { toast } from 'react-toastify';

import { logger } from 'services';

/* -------------------------------------------------------------------------- */

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: Number(process.env.REACT_APP_API_TIMEOUT) || 0,
});

/**
 * Set default header with token
 */

export const setAuthorizationHeader = (token: string | null = null): void => {
  token
    ? (instance.defaults.headers.common['Authorization'] = `Bearer ${token}`)
    : delete instance.defaults.headers.common['Authorization'];
};

/**
 *  Intercepts failed axios requests and retries them
 */

axiosRetry(instance, { retryDelay: axiosRetry.exponentialDelay });

/**
 * Handling global response error
 */

instance.interceptors.response.use(
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

export const http = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};
