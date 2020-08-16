import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import NextIcon from '@material-ui/icons/NavigateNext';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 1rem;
  border-radius: 4px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
`;

export const Close = styled(CloseIcon)`
  cursor: pointer;
`;

export const Next = styled(NextIcon)`
  cursor: pointer;
`;

export const Title = styled.span`
  font-weight: bold;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.material.palette.primary.main};
`;

export const Image = styled.img`
  object-fit: contain;
  max-height: calc(80vh - 2rem - 40px);
`;
