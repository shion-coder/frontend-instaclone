import React, { FC, ChangeEvent, useState } from 'react';
import { Fab, Modal } from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

import NewPost from 'components/new-post/new-post-modal';

import { Container, Input } from './new-post-button.styles';

/* -------------------------------------------------------------------------- */

const NewPostButton: FC = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void | null => e.target.files && setImage(e.target.files[0]);

  const handleClose = (): void => setImage(null);

  return (
    <Container htmlFor="upload-photo">
      <Input type="file" id="upload-photo" name="upload-photo" onChange={handleChange} />

      <Fab color="primary" size="small" component="span">
        <AddPhotoAlternateIcon />
      </Fab>

      <Modal open={!!image} onClose={handleClose}>
        <>
          <NewPost image={image} />
        </>
      </Modal>
    </Container>
  );
};

export default NewPostButton;
