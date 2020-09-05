import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

type StyledAvatarProps = {
  width?: string;
  height?: string;
  user?: number;
};

export const StyledAvatar = styled(Avatar)<StyledAvatarProps>`
  width: ${({ width }) => (width ? width : null)};
  height: ${({ height }) => (height ? height : null)};
  cursor: ${({ user }) => (user === 1 ? 'pointer' : 'auto')};
`;
