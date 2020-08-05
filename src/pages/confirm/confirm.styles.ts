import styled from 'styled-components';
import { Typography } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTypography = styled(Typography)`
  letter-spacing: 1px;
  font-weight: bold;
`;
