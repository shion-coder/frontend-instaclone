import styled from 'styled-components';
import { Button } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

type StyledButtonProps = {
  pointer?: number;
};

export const StyledButton = styled(Button)<StyledButtonProps>`
  font-weight: bold;
  text-transform: none;
  position: relative;
  cursor: ${({ pointer }) => (pointer === 0 ? 'auto' : 'pointer')};
  pointer-events: ${({ pointer }) => (pointer === 0 ? 'none' : 'auto')};
`;
