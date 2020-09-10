import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

/* -------------------------------------------------------------------------- */

export const Wrapper = styled(Grid)`
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
