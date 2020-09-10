import React, { FC, Dispatch, SetStateAction, ChangeEvent, useState } from 'react';
import { Grid } from '@material-ui/core';
import { useMutation } from 'react-query';
import { AxiosError, CancelTokenSource } from 'axios';
import { toast } from 'react-toastify';

import { POST_MODAL, TOAST } from 'types';
import { useUser, useCustomHistory } from 'hooks';
import { requestCreatePost } from 'services';
import Avatar from 'components/common/avatar';
import Loader from 'components/loader/layer-loader';

import {
  StyledPaper as Paper,
  Wrapper,
  Header,
  Back,
  Title,
  Submit,
  Body,
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
  setActiveModal: Dispatch<SetStateAction<POST_MODAL>>;
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
        toast.error(err.response?.data.error, { toastId: TOAST.UPLOAD_ERROR });
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

  const handleBack = () => setActiveModal(POST_MODAL.FILTER);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => setCaption(e.target.value);

  const handleSubmit = () => {
    formData?.set('filter', filter);
    formData?.set('caption', caption);

    createNewPost(formData);
  };

  return (
    <Grid item xs={11} sm={10} md={8} lg={6}>
      <Paper>
        <Wrapper>
          <Header container justify="space-between">
            <Back fontSize="small" onClick={handleBack} loading={isLoading ? 1 : 0} />

            <Title>New Post</Title>

            <Submit fontSize="small" onClick={handleSubmit} loading={isLoading ? 1 : 0} />
          </Header>

          <Body container alignItems="center">
            {isLoading && <Loader color="dark" width="60px" height="60px" radius="0.5rem" />}

            <Avatar alt="avatar" src={avatar} />

            <Text placeholder="Write a caption ..." onChange={handleChange} disabled={isLoading} />

            <Preview alt="preview" src={preview} filter={filter} />
          </Body>
        </Wrapper>
      </Paper>
    </Grid>
  );
};

export default NewPostCaption;
