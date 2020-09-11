import styled from 'styled-components';
import { Grid } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  position: absolute;
  top: 150%;
  left: 50%;
  transform: translateX(-90%);
  border-radius: 0.5rem;
  z-index: 10;
  background-color: ${({ theme }) => theme.material.palette.background.paper};
  box-shadow: 0 0 8px 0px ${({ theme }) => theme.colors.grey};

  :before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 90%;
    transform: translateX(-50%);
    width: 2rem;
    height: 0.8rem;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    background-color: ${({ theme }) => theme.material.palette.background.paper};
    box-shadow: 0 0 0.5rem 0px ${({ theme }) => theme.colors.grey};
  }

  @media screen and (max-width: 599px) {
    left: 110%;

    :before {
      transform: translateX(-140%);
    }
  }

  @media screen and (max-width: 340px) {
    left: 150%;

    :before {
      transform: translateX(-195%);
    }
  }
`;

export const Title = styled(Grid)`
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.material.palette.divider}`};
`;

export const Name = styled.span`
  flex: 1;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const Content = styled.div`
  width: 30rem;
  max-height: 13.8rem;
  border-radius: 0 0 0.5rem 0.5rem;
  overflow: auto;

  @media screen and (max-width: 599px) {
    width: 25rem;
  }

  @media screen and (max-width: 450px) {
    width: 19rem;
  }
`;

export const LoadMore = styled.div``;
