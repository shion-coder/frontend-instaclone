import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';

/* -------------------------------------------------------------------------- */

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.solitude};
`;

export const Container = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
`;

export const StyledHomeIcon = styled(HomeIcon)`
  font-size: 40px;
  cursor: pointer;
`;
