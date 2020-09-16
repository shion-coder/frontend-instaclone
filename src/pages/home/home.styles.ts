import styled from 'styled-components';
import { Grid } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const Wrapper = styled(Grid)``;

export const Content = styled(Grid)`
  margin-right: auto;
  width: calc(100% - 28rem);

  @media screen and (max-width: 959px) {
    width: calc(100% - 23rem);
  }

  @media screen and (max-width: 799px) {
    width: calc(100% - 20rem);
  }

  @media screen and (max-width: 699px) {
    width: 100%;
  }
`;

export const SideBar = styled(Grid)`
  position: fixed;
  width: 25rem;

  @media screen and (max-width: 959px) {
    width: 20rem;
  }

  @media screen and (max-width: 799px) {
    width: 18rem;
  }

  @media screen and (max-width: 699px) {
    display: none;
  }
`;
