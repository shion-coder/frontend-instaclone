import { ChangeEvent, ReactText, useState, RefObject } from 'react';
import axios, { CancelTokenSource } from 'axios';
import { toast } from 'react-toastify';

/* -------------------------------------------------------------------------- */

type Result = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => ReactText | void;
  handleClose: () => void;
  formData: FormData | undefined;
  preview: string | undefined;
  error: boolean;
  source: CancelTokenSource;
};

export const useFiles = (ref?: RefObject<HTMLInputElement>, fn?: (data: FormData) => void): Result => {
  const [formData, setFormData] = useState<FormData | undefined>(undefined);
  const [preview, setPreview] = useState<string | undefined>(undefined);
  const [error, setError] = useState(false);

  const source = axios.CancelToken.source();

  /**
   * Handle uploading multiple files but only allow one file in here
   */

  const handleChange = (e: ChangeEvent<HTMLInputElement>): ReactText | void => {
    setError(false);

    const { files } = e.target;

    if (files) {
      const fileArray = Array.from(files);

      /**
       * Handle number of files
       */

      if (fileArray.length > 1) {
        setError(true);

        return toast.error('Only one image can be uploaded at a time', { toastId: 'upload-error' });
      }

      const data = new FormData();

      const types = ['image/png', 'image/jpeg', 'image/gif'];

      fileArray.forEach((file) => {
        /**
         * Catching wrong file types on the client
         */

        if (types.every((type) => file.type !== type)) {
          setError(true);

          if (ref?.current) {
            ref.current.value = '';
          }

          return toast.error('File type is not supported for upload', { toastId: 'upload-error' });
        }

        /**
         * Handle maximum size of file to upload
         */

        if (file.size > 2000000) {
          setError(true);

          if (ref?.current) {
            ref.current.value = '';
          }

          return toast.error('File is too large, please pick a smaller file', { toastId: 'upload-error' });
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
    source.cancel();

    setFormData(undefined);

    /**
     * Resetting the input value so you are able to use the same file twice
     */

    if (ref?.current) {
      ref.current.value = '';
    }
  };

  return { handleChange, handleClose, formData, preview, error, source };
};
