import styled from 'styled-components';
import { Paper } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

/* -------------------------------------------------------------------------- */

export const Wrapper = styled(Paper)`
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem 0px ${({ theme }) => theme.colors.grey};

  @media screen and (max-width: 599px) {
  }
`;

export const Title = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: min-content;
  align-items: center;
  padding: 0 1rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.material.palette.divider}`};
`;

export const Name = styled.p`
  grid-column: 2/3;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.material.palette.text.primary};
`;

export const Cancel = styled(CloseIcon)`
  margin-left: auto;
  font-size: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.material.palette.text.secondary};

  :hover {
    color: ${({ theme }) => theme.material.palette.text.primary};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  max-height: 13.8rem;
  overflow: auto;

  @media screen and (max-width: 599px) {
    width: 20rem;
  }
`;

export const LoadMore = styled.div`
  margin-top: 1px;
`;
