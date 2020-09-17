import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

/* -------------------------------------------------------------------------- */

export const Container = styled.div``;

export const LoadMore = styled.div``;

export const NoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  background: ${({ theme }) => theme.material.palette.background.paper};
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const Icon = styled(ImageSearchIcon)`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const Title = styled.p`
  font-weight: bold;
`;

export const Text = styled.p``;

export const StyledLink = styled(Link)`
  font-weight: bold;
  color: ${({ theme }) => theme.material.palette.text.primary};
`;
