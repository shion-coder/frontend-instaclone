import styled from 'styled-components';
import { Grid } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(Grid)`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.solitude};
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07),
    0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
`;
