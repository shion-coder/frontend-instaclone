import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

type ImageProps = {
  filter: string;
};

export const Container = styled.div`
  background: ${({ theme }) => theme.material.palette.background.paper};
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  filter: ${({ filter }) => (filter ? filter : 'none')};
`;
