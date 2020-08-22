import React, { FC, ChangeEvent, ReactText } from 'react';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';

import { http } from 'services';
import loading from 'assets/animations/dot-loading.json';

import {
  Container,
  Label,
  Layer,
  StyledAvatar as Avatar,
  Input,
  StyledLottie as Lottie,
} from './profile-header-avatar.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  avatar: string;
  isCurrentUser: boolean;
  refetch: () => Promise<void>;
};

const ProfileHeaderAvatar: FC<Props> = ({ avatar, isCurrentUser, refetch }) => {
  const requestUpdateAvatar = (data: FormData | undefined) => http.put('/users/avatar', data);

  const [updateAvatar, { isLoading }] = useMutation(requestUpdateAvatar, {
    onError: (err: AxiosError) => {
      toast.error(err.response?.data.error, { toastId: 'upload-error' });
    },
    onSuccess: () => refetch(),
  });

  /**
   * Handle uploading multiple files but only allow one file in here
   */

  const handleChange = (e: ChangeEvent<HTMLInputElement>): ReactText | void => {
    const { files } = e.target;

    if (files) {
      const fileArray = Array.from(files);

      const data = new FormData();

      fileArray.forEach((file) => {
        if (file.size > 1500000) {
          return toast.error('File is too large, please pick a smaller file', { toastId: 'upload-error' });
        }

        data.append('image', file);
      });

      updateAvatar(data);
    }
  };

  return (
    <Container item xs={4} container direction="row" justify="center" alignItems="center">
      <Label htmlFor="upload-avatar">
        {isLoading && (
          <Layer>
            <Lottie play loop animationData={loading} />
          </Layer>
        )}

        <Avatar src={avatar} role={isCurrentUser ? 'me' : 'guest'} />

        {isCurrentUser && (
          <Input type="file" accept="image/*" id="upload-avatar" name="upload-avatar" onChange={handleChange} />
        )}
      </Label>
    </Container>
  );
};

export default ProfileHeaderAvatar;
