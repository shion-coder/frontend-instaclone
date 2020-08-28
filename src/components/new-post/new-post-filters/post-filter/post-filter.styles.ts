import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

type ImageProps = {
  filter?: string;
  selected?: boolean;
};

type NameProps = {
  selected?: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  cursor: pointer;
`;

export const Name = styled.span<NameProps>`
  text-align: center;
  font-size: 0.6rem;
  color: ${({ theme, selected }) => (selected ? theme.colors.dark : theme.colors.medium)};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
`;

export const Image = styled.img<ImageProps>`
  height: 4rem;
  filter: ${({ filter }) => (filter ? filter : 'none')};
  border: ${({ theme, selected }) => (selected ? `1px solid ${theme.material.palette.primary.main}` : '0px')};
  border-radius: 2px;
  padding: 2px;
`;
