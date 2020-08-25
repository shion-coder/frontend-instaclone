import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-90%);
  top: 150%;
  box-shadow: 0 0 30px 0px ${({ theme }) => theme.colors.grey2};

  background-color: ${({ theme }) => theme.colors.light};
  min-width: 25rem;
  border-radius: 4px;
  padding: 1rem;

  :before {
    content: '';
    position: absolute;
    left: 90%;
    transform: translateX(-50%);
    width: 2rem;
    height: 0.8rem;
    bottom: 100%;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    background-color: ${({ theme }) => theme.colors.light};
    box-shadow: 0 0 30px 0px ${({ theme }) => theme.colors.grey2};
  }
`;
