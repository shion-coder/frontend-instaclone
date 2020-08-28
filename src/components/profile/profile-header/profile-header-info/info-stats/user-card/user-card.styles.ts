import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  display: flex;
  padding: 0.8rem 1.5rem;
  align-items: center;
`;

export const StyledAvatar = styled(Avatar)`
  width: 3rem;
  height: 3rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

export const Name = styled.span`
  font-weight: bold;
  letter-spacing: 0.4px;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;
`;

export const Username = styled.span`
  font-size: 0.8rem;
  margin-top: 0.2rem;
  color: ${({ theme }) => theme.colors.medium};
`;

export const Button = styled.div`
  margin-left: auto;
`;
