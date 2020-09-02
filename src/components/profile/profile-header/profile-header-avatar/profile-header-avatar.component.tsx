import React, { FC, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { ReturnUpdateAvatarProps } from 'types';
import { changeAvatar } from 'store';
import { http } from 'services';
import { useFiles } from 'hooks';
import Avatar from 'components/avatar';
import Loader from 'components/loader/layer-loader';

import { Container, Label, Input } from './profile-header-avatar.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  avatar: string;
  isCurrentUser: boolean;
};

const ProfileHeaderAvatar: FC<Props> = ({ avatar, isCurrentUser }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [newAvatar, setNewAvatar] = useState(avatar);

  const dispatch = useDispatch();

  /**
   * Request update new avatar
   */

  const [updateAvatar, { isLoading }] = useMutation(
    (formData: FormData | undefined) =>
      http.put<ReturnUpdateAvatarProps>('/users/avatar', formData).then((res) => res.data),
    {
      onError: (err: AxiosError) => {
        if (inputRef.current) {
          inputRef.current.value = '';
        }

        toast.error(err.response?.data.error, { toastId: 'upload-error' });
      },
      onSuccess: (data) => {
        setNewAvatar(data.avatar);
        dispatch(changeAvatar({ avatar: data.avatar }));
      },
    },
  );

  const { handleChange } = useFiles(inputRef, updateAvatar);

  return (
    <Container item xs={4} container direction="row" justify="center" alignItems="center">
      <Label htmlFor="upload-avatar">
        {isLoading && <Loader color="dark" width="50px" height="50px" radius="50%" />}

        <Avatar src={newAvatar} width="8rem" height="8rem" cursor={isCurrentUser ? 'pointer' : 'auto'} />

        {isCurrentUser && (
          <Input
            type="file"
            accept="image/*"
            id="upload-avatar"
            name="upload-avatar"
            onChange={handleChange}
            disabled={isLoading}
            ref={inputRef}
          />
        )}
      </Label>
    </Container>
  );
};

export default ProfileHeaderAvatar;
