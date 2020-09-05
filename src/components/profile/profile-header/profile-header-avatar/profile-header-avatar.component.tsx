import React, { FC, useRef } from 'react';

import { ReturnGetUserProps } from 'types';
import { useUpdateAvatar } from 'hooks';
import Avatar from 'components/avatar';
import Loader from 'components/loader/layer-loader';

import { Container, Label, Input } from './profile-header-avatar.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  profile: ReturnGetUserProps;
};

const ProfileHeaderAvatar: FC<Props> = ({
  profile: {
    user: { avatar },
    isCurrentUser,
  },
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const { handleChange, isLoading } = useUpdateAvatar(ref);

  return (
    <Container item xs={4} container direction="row" justify="center" alignItems="center">
      <Label htmlFor="upload-avatar">
        {isLoading && <Loader color="dark" width="50px" height="50px" radius="50%" />}

        <Avatar src={avatar} width="8rem" height="8rem" user={isCurrentUser ? 1 : 0} />

        {isCurrentUser && (
          <Input
            type="file"
            accept="image/*"
            id="upload-avatar"
            name="upload-avatar"
            onChange={handleChange}
            disabled={isLoading}
            ref={ref}
          />
        )}
      </Label>
    </Container>
  );
};

export default ProfileHeaderAvatar;
