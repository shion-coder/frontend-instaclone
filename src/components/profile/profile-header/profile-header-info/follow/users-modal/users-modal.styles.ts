import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
  overflow: hidden;
`;

export const Title = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: min-content;
  align-items: center;
  padding: 0 1rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.grey}`};
`;

export const Name = styled.p`
  grid-column: 2/3;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
`;

export const Cancel = styled(CloseIcon)`
  margin-left: auto;
  font-size: 16px;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  max-height: 13.8rem;
  overflow: auto;
`;

export const LoadMore = styled.div`
  margin-top: 1px;
`;
