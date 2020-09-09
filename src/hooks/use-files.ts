import { RefObject, ChangeEvent, ReactText, useState } from 'react';
import axios, { CancelTokenSource } from 'axios';
import { toast } from 'react-toastify';

import { TOAST } from 'types';
import { MAX_FILE_UPLOAD } from 'config';
import { toastMessage, imageTypes } from 'utils';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => ReactText | void;
  handleClose: () => void;
  formData: FormData | undefined;
  preview: string | undefined;
  error: boolean;
  source: CancelTokenSource;
};

export const useFiles = (ref?: RefObject<HTMLInputElement>, fn?: (data: FormData) => void): ReturnProps => {
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState<FormData | undefined>(undefined);
  const [preview, setPreview] = useState<string | undefined>(undefined);

  const source = axios.CancelToken.source();

  /**
   * Handle uploading
   */

  const handleChange = ({ target: { files } }: ChangeEvent<HTMLInputElement>): ReactText | void => {
    /**
     * Reset error to false each time input change
     */

    setError(false);

    if (files) {
      const fileArray = Array.from(files);

      /**
       * Handle number of files
       */

      if (fileArray.length > 1) {
        setError(true);

        return toast.error(toastMessage.maxImages, { toastId: TOAST.UPLOAD_ERROR });
      }

      const data = new FormData();

      fileArray.forEach((file) => {
        /**
         * Catching wrong file types on the client
         */

        if (imageTypes.every((type) => file.type !== type)) {
          setError(true);

          if (ref?.current) {
            ref.current.value = '';
          }

          return toast.error(toastMessage.fileType, { toastId: TOAST.UPLOAD_ERROR });
        }

        /**
         * Handle maximum size of file to upload
         */

        if (file.size > MAX_FILE_UPLOAD) {
          setError(true);

          if (ref?.current) {
            ref.current.value = '';
          }

          return toast.error(toastMessage.fileSize, { toastId: TOAST.UPLOAD_ERROR });
        }

        data.append('image', file);
      });

      /**
       * Set data to send server and set preview link on client
       */

      if (ref?.current?.value) {
        setFormData(data);

        fn && fn(data);

        setPreview(URL.createObjectURL(files[0]));
      }
    }
  };

  const handleClose = (): void => {
    /**
     * Cancel axios, remove form data and resetting the input value so you are able to use the same file twice
     */

    source.cancel();

    setFormData(undefined);

    if (ref?.current) {
      ref.current.value = '';
    }
  };

  return { handleChange, handleClose, formData, preview, error, source };
};
