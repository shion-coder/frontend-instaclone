import styled from 'styled-components';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;

export const Icon = styled(BookmarkBorderIcon)`
  font-size: 3rem;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Text = styled.p``;
