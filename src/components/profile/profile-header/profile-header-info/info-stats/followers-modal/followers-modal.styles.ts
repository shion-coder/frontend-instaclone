import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
`;

export const Title = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: min-content;
  align-items: center;
  padding: 0 1rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.grey2}`};
`;

export const Name = styled.p`
  grid-column: 2/3;
  font-weight: bold;
  text-align: center;
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
  max-height: 40vh;
  overflow: auto;
`;

export const Empty = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const UserIcon = styled(PersonAddIcon)`
  font-size: 3rem;
`;

export const Text = styled.p``;
