import React, { FC, Dispatch, SetStateAction, ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useMutation } from 'react-query';
import { AxiosError, CancelTokenSource } from 'axios';
import { toast } from 'react-toastify';

import { RootStateProps } from 'store';
import { Modal } from 'types';
import { http } from 'services';
import loading from 'assets/animations/loading.json';

import {
  Container,
  Layer,
  Header,
  Back,
  Title,
  Submit,
  Body,
  StyledAvatar as Avatar,
  Text,
  Preview,
  StyledLottie as Lottie,
} from './new-post-caption.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  filter: string;
  formData: FormData | undefined;
  preview: string | undefined;
  setActiveModal: Dispatch<SetStateAction<Modal>>;
  handleClose: () => void;
  source: CancelTokenSource;
};

const NewPostCaption: FC<Props> = ({ filter, formData, preview, setActiveModal, handleClose, source }) => {
  const avatar = useSelector((state: RootStateProps) => state.auth.user.avatar);
  const [caption, setCaption] = useState('');

  const requestCreate = (data: FormData | undefined) =>
    http.post('/post', data, {
      cancelToken: source.token,
    });

  const [createNewPost, { isLoading }] = useMutation(requestCreate, {
    onError: (err: AxiosError) => {
      toast.error(err.response?.data.error, { toastId: 'upload-error' });
    },
    onSuccess: () => {
      handleClose();
    },
  });

  const handleBack = () => setActiveModal(Modal.Filter);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => setCaption(e.target.value);

  const handleSubmit = () => {
    formData?.set('filter', filter);
    formData?.set('caption', caption);

    createNewPost(formData);
  };

  return (
    <Container>
      <Header>
        <Back fontSize="small" color="primary" onClick={handleBack} loading={isLoading ? 'loading' : ''} />

        <Title>New Post</Title>

        {isLoading ? (
          <Lottie play loop animationData={loading} />
        ) : (
          <Submit fontSize="small" color="primary" onClick={handleSubmit} />
        )}
      </Header>

      <Body>
        {isLoading && <Layer />}

        <Avatar alt="avatar" src={avatar} />

        <Text placeholder="Write a caption ..." onChange={handleChange} disabled={isLoading} />

        <Preview alt="preview" src={preview} filter={filter} />
      </Body>
    </Container>
  );
};

export default NewPostCaption;
