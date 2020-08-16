import React, { FC } from 'react';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { http } from 'services';

import { Container, Header, Close, Next, Title, Image } from './new-post-modal.style';

/* -------------------------------------------------------------------------- */

type Props = {
  formData: FormData | undefined;
  preview: string | undefined;
  handleClose: () => void;
};

const NewPostModal: FC<Props> = ({ formData, preview, handleClose }) => {
  const [createNewPost] = useMutation((data: FormData | undefined) => http.post('/post', data), {
    onError: (err: AxiosError) => {
      toast.error(err.response?.data.error, { toastId: 'upload-error' });
    },
  });

  const handleSubmit = () => createNewPost(formData);

  return (
    <Container>
      <Header>
        <Close fontSize="small" onClick={handleClose} />

        <Title>New Post</Title>

        <Next fontSize="small" onClick={handleSubmit} />
      </Header>

      <Image alt="upload-image" src={preview} />
    </Container>
  );
};

export default NewPostModal;
