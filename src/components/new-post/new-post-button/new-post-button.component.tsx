import React, { FC, useRef } from 'react';
import Modal from 'styled-react-modal';
import { Fab } from '@material-ui/core';
import AddPhoto from '@material-ui/icons/AddPhotoAlternate';

import { useFiles } from 'hooks';
import NewPostModal from 'components/new-post/new-post-modal';

import { Container, Input } from './new-post-button.styles';

/* -------------------------------------------------------------------------- */

const NewPostButton: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { handleChange, handleClose, formData, preview, error, source } = useFiles(inputRef);

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
        <AddPhoto />
      </Fab>

      <Modal isOpen={!!formData && !error} onBackgroundClick={handleClose} onEscapeKeydown={handleClose}>
        <NewPostModal formData={formData} preview={preview} handleClose={handleClose} source={source} />
      </Modal>
    </Container>
  );
};

export default NewPostButton;
