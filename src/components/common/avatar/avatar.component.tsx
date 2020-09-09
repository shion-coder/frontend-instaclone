import React, { FC } from 'react';
import { AvatarProps } from '@material-ui/core';

import { StyledAvatar } from './avatar.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  width?: string;
  height?: string;
  cursor?: boolean;
} & AvatarProps;

const Avatar: FC<Props> = ({ width, height, cursor, ...otherProps }) => (
  <StyledAvatar width={width} height={height} cursor={cursor ? 1 : 0} {...otherProps} />
);

export default Avatar;
