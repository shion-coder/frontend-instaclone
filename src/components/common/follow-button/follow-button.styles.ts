import styled from 'styled-components';
import { Button } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

type StyledButtonProps = {
  loading?: 'yes' | 'no';
};

export const StyledButton = styled(Button)<StyledButtonProps>`
  font-weight: bold;
  text-transform: capitalize;
  position: relative;
  cursor: ${({ loading }) => (loading === 'yes' ? 'auto' : 'pointer')};
  pointer-events: ${({ loading }) => (loading === 'yes' ? 'none' : 'auto')};
`;
