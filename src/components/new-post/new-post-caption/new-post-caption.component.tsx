import React, { FC, Dispatch, SetStateAction, ChangeEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { AxiosError, CancelTokenSource } from 'axios';
import { toast } from 'react-toastify';

import { PostModal, Toast } from 'types';
import { useUser, useCustomHistory } from 'hooks';
import { requestCreatePost } from 'services';
import Loader from 'components/loader/layer-loader';

import {
  Container,
  Header,
  Back,
  Title,
  Submit,
  Body,
  StyledAvatar as Avatar,
  Text,
  Preview,
} from './new-post-caption.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  formData: FormData | undefined;
  preview: string | undefined;
  handleClose: () => void;
  source: CancelTokenSource;
  filter: string;
  setActiveModal: Dispatch<SetStateAction<PostModal>>;
};

const NewPostCaption: FC<Props> = ({ formData, preview, handleClose, source, filter, setActiveModal }) => {
  const [caption, setCaption] = useState('');

  const { avatar } = useUser();
  const { goHome } = useCustomHistory();

  /**
   * Create new post and handle it on error or on success
   */

  const [createNewPost, { isLoading }] = useMutation(
    (formData: FormData | undefined) => requestCreatePost(formData, source),
    {
      onError: (err: AxiosError) => {
        toast.error(err.response?.data.error, { toastId: Toast.UPLOAD_ERROR });
      },
      onSuccess: () => {
        handleClose();

        goHome();
      },
    },
  );

  /**
   * Handle back to filter modal, change caption and submit post
   */

  const handleBack = () => setActiveModal(PostModal.Filter);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => setCaption(e.target.value);

  const handleSubmit = () => {
    formData?.set('filter', filter);
    formData?.set('caption', caption);

    createNewPost(formData);
  };

  return (
    <Container>
      <Header>
        <Back fontSize="small" color="primary" onClick={handleBack} loading={isLoading ? 1 : 0} />

        <Title>New Post</Title>

        <Submit fontSize="small" color="primary" onClick={handleSubmit} loading={isLoading ? 1 : 0} />
      </Header>

      <Body>
        {isLoading && <Loader color="light" width="60px" height="60px" />}

        <Avatar alt="avatar" src={avatar} />

        <Text placeholder="Write a caption ..." onChange={handleChange} disabled={isLoading} />

        <Preview alt="preview" src={preview} filter={filter} />
      </Body>
    </Container>
  );
};

export default NewPostCaption;
