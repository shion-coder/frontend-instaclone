import styled from 'styled-components';
import { Card, CardMedia, FormControlLabel } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const StyledCard = styled(Card)`
  width: 100%;
  margin: ${({ theme }) => theme.material.spacing(8, 0, 4)};

  @media screen and (max-width: 599px) {
    margin: ${({ theme }) => theme.material.spacing(0, 0, 4)};
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  height: 16rem;
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  margin: ${({ theme }) => theme.material.spacing(0, 0, 2)};
  color: ${({ theme }) => theme.material.palette.text.secondary};
`;
