import styled from 'styled-components';
import { List, ListItem, ListItemText } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const Container = styled(List)`
  background: ${({ theme }) => theme.colors.light};
  width: 25rem;
  border-radius: 8px;
  padding: 0;
  overflow: hidden;
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0 0.625rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.grey}`};
`;

export const Name = styled.p`
  font-weight: bold;
`;

export const Item = styled(ListItem)`
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.grey}`};
`;

export const Text = styled(ListItemText)`
  text-align: center;

  .MuiTypography-body1 {
    letter-spacing: 0.5px;
    font-size: 14px;
  }
`;
