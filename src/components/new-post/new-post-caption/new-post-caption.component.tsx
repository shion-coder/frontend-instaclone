import React, { FC, Dispatch, SetStateAction, ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import { AxiosError, CancelTokenSource } from 'axios';
import { toast } from 'react-toastify';

import { PostModal, Path } from 'types';
import { RootStateProps } from 'store';
import { http } from 'services';
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
  const avatar = useSelector((state: RootStateProps) => state.user.data.avatar);
  const [caption, setCaption] = useState('');
  const history = useHistory();

  /**
   * Request post image data with filter and caption
   */

  const [createNewPost, { isLoading }] = useMutation(
    async (formData: FormData | undefined) => {
      const { data } = await http.post('/post', formData, {
        cancelToken: source.token,
      });

      return data;
    },
    {
      onError: (err: AxiosError) => {
        toast.error(err.response?.data.error, { toastId: 'upload-error' });
      },
      onSuccess: () => {
        handleClose();

        history.push(Path.HOME);
      },
    },
  );

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
