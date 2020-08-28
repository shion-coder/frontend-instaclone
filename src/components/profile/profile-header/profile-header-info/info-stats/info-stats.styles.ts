import styled from 'styled-components';
import { Grid } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Number = styled.span`
  font-weight: bold;
`;

export const Posts = styled(Grid)``;

export const Followers = styled(Grid)`
  cursor: pointer;
`;

export const Following = styled(Grid)`
  cursor: pointer;
`;
