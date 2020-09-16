import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.material.palette.background.paper};
  padding: 1.25rem 2rem;
  border-radius: 0.5rem;

  @media screen and (max-width: 959px) {
    padding: 1.5rem 1rem;
  }
`;

export const Title = styled.div`
  display: flex;
  font-weight: bold;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.material.palette.divider};
`;

export const Name = styled.span``;

export const SuggestList = styled.div`
  margin-top: 1rem;
`;

export const NoUsers = styled.p`
  text-align: center;
  font-weight: bold;
`;
