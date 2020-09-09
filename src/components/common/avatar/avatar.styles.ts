import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

type StyledAvatarProps = {
  width?: string;
  height?: string;
  cursor?: number;
};

export const StyledAvatar = styled(Avatar)<StyledAvatarProps>`
  width: ${({ width }) => (width ? width : null)};
  height: ${({ height }) => (height ? height : null)};
  cursor: ${({ cursor }) => (cursor === 1 ? 'pointer' : 'auto')};
`;
