import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 15.5rem;
  max-height: 10.5rem;
  overflow-y: auto;
  border-radius: 0 0 0.5rem 0.5rem;
  z-index: 10;
  background-color: ${({ theme }) => theme.material.palette.background.paper};
  border: ${({ theme }) => `1px solid ${theme.material.palette.divider}`};

  @media screen and (max-width: 959px) {
    width: 12rem;
  }
`;

export const NotFound = styled.div`
  padding: 0.5rem;
  font-weight: bold;
  font-size: 0.8rem;
`;

export const LoadMore = styled.div`
  width: 100%;
`;
