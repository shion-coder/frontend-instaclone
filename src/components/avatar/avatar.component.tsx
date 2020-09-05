import React, { FC } from 'react';
import { AvatarProps } from '@material-ui/core';

import { StyledAvatar } from './avatar.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  width?: string;
  height?: string;
  user?: number;
} & AvatarProps;

const Avatar: FC<Props> = ({ width, height, user, ...otherProps }) => (
  <StyledAvatar width={width} height={height} user={user} {...otherProps} />
);

export default Avatar;
