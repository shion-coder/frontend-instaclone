import styled from 'styled-components';
import { Grid } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const Container = styled(Grid)`
  flex: 1;
  max-height: 310px;
  border-bottom: 1px solid ${({ theme }) => theme.material.palette.divider};
  overflow: auto;
`;

export const Caption = styled(Grid)`
  padding: ${({ theme }) => theme.material.spacing(1.5, 0.5, 1.5, 2)};
  width: 100%;
`;

export const Body = styled(Grid)`
  flex: 1;
  font-size: 0.8rem;
  padding: ${({ theme }) => theme.material.spacing(0, 1.5)};
`;

export const Content = styled.div``;

export const Name = styled.span`
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  color: ${({ theme }) => theme.material.palette.text.primary};
`;

export const Message = styled.span`
  margin: ${({ theme }) => theme.material.spacing(0, 1)};
`;

export const Stats = styled.div`
  margin-top: 0.5rem;
`;

export const Date = styled.span``;

export const LoadComments = styled(Grid)`
  margin: ${({ theme }) => theme.material.spacing(1, 1)};
`;
