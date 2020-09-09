import React, { FC, useRef } from 'react';
import Modal from 'styled-react-modal';
import { IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { useFiles } from 'hooks';
import NewPostModal from 'components/new-post/new-post-modal';

import { Container, Input, Text } from './new-post-button.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  text?: boolean;
};

const NewPostButton: FC<Props> = ({ text }) => {
  const ref = useRef<HTMLInputElement>(null);

  const { handleChange, handleClose, formData, preview, error, source } = useFiles(ref);

  return (
    <Container htmlFor="upload-photo">
      <Input type="file" accept="image/*" id="upload-photo" name="upload-photo" onChange={handleChange} ref={ref} />

      {text ? (
        <Text>Share your first photo</Text>
      ) : (
        <IconButton component="span">
          <AddCircleIcon />
        </IconButton>
      )}

      <Modal isOpen={!!formData && !error} onBackgroundClick={handleClose} onEscapeKeydown={handleClose}>
        <NewPostModal formData={formData} preview={preview} handleClose={handleClose} source={source} />
      </Modal>
    </Container>
  );
};

export default NewPostButton;
