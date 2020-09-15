import styled from 'styled-components';
import { Paper, Grid } from '@material-ui/core';
import Button from 'components/common/button';

/* -------------------------------------------------------------------------- */

export const Wrapper = styled(Paper)`
  width: 25rem;
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem 0px ${({ theme }) => theme.colors.grey};

  @media screen and (max-width: 599px) {
    width: 16rem;
  }
`;

export const ModalTitle = styled(Grid)`
  padding: 0 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.material.palette.divider};
`;

export const Title = styled.h4`
  font-weight: bold;
`;

export const ModalContent = styled(Grid)`
  padding: 1rem;
`;

export const Content = styled.span`
  font-size: 0.9rem;
`;

export const ModalButton = styled(Grid)`
  padding: 0.8rem;
`;

export const StyledButton = styled(Button)`
  margin-right: 0.8rem;
`;
