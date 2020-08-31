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
  display: flex;
  flex-direction: column;
  width: 69%;
`;
