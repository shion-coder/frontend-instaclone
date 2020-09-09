import React, { FC, useRef } from 'react';

import { ReturnGetUserProps } from 'types';
import { useUpdateAvatar } from 'hooks';
import Avatar from 'components/common/avatar';
import Loader from 'components/loader/layer-loader';

import { Label, Input } from './profile-header-avatar.styles';

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
    <Label htmlFor="upload-avatar">
      {isLoading && <Loader color="dark" width="50px" height="50px" radius="50%" />}

      <Avatar src={avatar} width="8rem" height="8rem" cursor={isCurrentUser} />

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
  );
};

export default ProfileHeaderAvatar;
