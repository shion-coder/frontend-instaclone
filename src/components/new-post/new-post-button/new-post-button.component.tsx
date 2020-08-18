import React, { FC, ChangeEvent, ReactText, useState, useRef } from 'react';
import { Fab } from '@material-ui/core';
import Modal from 'styled-react-modal';
import { toast } from 'react-toastify';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import axios from 'axios';

import NewPostModal from 'components/new-post/new-post-modal';

import { Container, Input } from './new-post-button.styles';

/* -------------------------------------------------------------------------- */

const NewPostButton: FC = () => {
  const [formData, setFormData] = useState<FormData | undefined>(undefined);
  const [preview, setPreview] = useState<string | undefined>(undefined);
  const [error, setError] = useState(false);
  const source = axios.CancelToken.source();

  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * Handle uploading multiple files but only allow one file in here
   */

  const handleChange = (e: ChangeEvent<HTMLInputElement>): ReactText | void => {
    setError(false);

    const { files } = e.target;

    if (files) {
      const fileArray = Array.from(files);

      /**
       * There are too many files
       */

      // if (fileArray.length > 1) {
      //   setError(true);

      //   return toast.error('Only one image can be uploaded at a time', { toastId: 'upload-error' });
      // }

      /**
       * Catching wrong file types on the client
       */

      const data = new FormData();

      // const types = ['image/png', 'image/jpeg', 'image/gif'];

      fileArray.forEach((file) => {
        // if (types.every((type) => file.type !== type)) {
        //   setError(true);

        //   return toast.error('File type is not supported for upload', { toastId: 'upload-error' });
        // }

        if (file.size > 1500000) {
          setError(true);

          return toast.error('File is too large, please pick a smaller file', { toastId: 'upload-error' });
        }

        data.append('image', file);
      });

      /**
       * Set data to send server and preview link on client
       */

      setFormData(data);

      setPreview(URL.createObjectURL(files[0]));
    }
  };

  const handleClose = (): void => {
    // Cancel axios request
    source.cancel();

    setFormData(undefined);

    /**
     * Resetting the input value so you are able to use the same file twice
     */

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <Container htmlFor="upload-photo">
      <Input
        type="file"
        accept="image/*"
        id="upload-photo"
        name="upload-photo"
        onChange={handleChange}
        ref={inputRef}
      />

      <Fab color="primary" size="small" component="span">
        <AddPhotoAlternateIcon />
      </Fab>

      <Modal isOpen={!!formData && !error} onBackgroundClick={handleClose} onEscapeKeydown={handleClose}>
        <NewPostModal formData={formData} preview={preview} handleClose={handleClose} source={source} />
      </Modal>
    </Container>
  );
};

export default NewPostButton;
