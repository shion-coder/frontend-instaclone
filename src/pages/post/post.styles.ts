import styled from 'styled-components';
import { Grid } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

type ImageProps = {
  filter: string;
};

export const Container = styled(Grid)`
  min-height: 450px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${({ filter }) => (filter ? filter : 'none')};
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
