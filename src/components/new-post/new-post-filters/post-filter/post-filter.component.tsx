import React, { FC } from 'react';

import { Container, Name, Image } from './post-filter.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  name: string;
  filter: string;
  selected: boolean;
  preview: string | undefined;
  handleSelected: (name: string, filter: string) => void;
};

const PostFilter: FC<Props> = ({ name, filter, selected, preview, handleSelected }) => (
  <Container>
    <Name selected={selected}>{name}</Name>

    <Image
      alt="filter-image"
      src={preview}
      filter={filter}
      selected={selected}
      onClick={() => handleSelected(name, filter)}
    />
  </Container>
);

export default PostFilter;
