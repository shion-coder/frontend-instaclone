import axios, { AxiosError } from 'axios';
import axiosRetry from 'axios-retry';
import { toast } from 'react-toastify';

import { PATH, TOAST } from 'types';
import { API_URL, API_TIMEOUT } from 'config';
import { store, removeUser } from 'store';
import { logger } from 'services';
import { history, toastMessage } from 'utils';

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
  const token = store.getState().user.data.token;

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
    /**
     * Handle request cancel
     */

    if (axios.isCancel(error)) {
      return;
    }

    /**
     * Handle timeout error
     */

    if (error.code === 'ECONNABORTED') {
      toast.error(toastMessage.timeout, { toastId: TOAST.TIMEOUT_ERROR });

      return Promise.reject(error);
    }

    if (error.response) {
      const { status } = error.response;

      /**
       * Handle unauthorized
       */

      if (status === 401) {
        store.dispatch(removeUser());

        return history.push(PATH.LOGIN);
      }

      /**
       * Handle unexpected error
       */

      if (status >= 500 || status < 400) {
        logger.log(error);

        toast.dismiss(TOAST.UNEXPECTED_ERROR);

        return toast.error(toastMessage.unexpectedError, { toastId: TOAST.UNEXPECTED_ERROR });
      }

      return Promise.reject(error);
    }
  },
);
