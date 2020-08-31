import styled from 'styled-components';
import { Button } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

type StyledButtonProps = {
  loading?: number;
};

export const StyledButton = styled(Button)<StyledButtonProps>`
  font-weight: bold;
  text-transform: capitalize;
  position: relative;
  cursor: ${({ loading }) => (loading === 1 ? 'auto' : 'pointer')};
  pointer-events: ${({ loading }) => (loading === 1 ? 'none' : 'auto')};
`;
