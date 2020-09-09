import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import Button from 'components/common/button';

/* -------------------------------------------------------------------------- */

export const Name = styled(Grid)`
  @media screen and (max-width: 599px) {
    text-align: center;
    padding: ${({ theme }) => theme.material.spacing(0, 0, 3)};
  }
`;

export const Settings = styled(Grid)`
  @media screen and (max-width: 599px) {
    justify-content: space-around;
  }
`;

export const StyledButton = styled(Button)`
  margin-right: ${({ theme }) => theme.material.spacing(2) + 'px'};
`;

export const Stats = styled(Grid)`
  padding: ${({ theme }) => theme.material.spacing(3, 0)};
`;

export const Count = styled(Grid)`
  @media screen and (max-width: 599px) {
    text-align: center;
  }
`;

export const Other = styled(Grid)`
  @media screen and (max-width: 599px) {
    text-align: center;
  }
`;
