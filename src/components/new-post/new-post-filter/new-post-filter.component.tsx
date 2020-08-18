import React, { FC, Dispatch, SetStateAction, useState } from 'react';

import { filters } from 'utils';
import { Modal } from 'types';

import { Container, Header, Button, Title, Preview, FilterList, Filter, Name, Image } from './new-post-filter.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  preview: string | undefined;
  handleClose: () => void;
  setFilter: Dispatch<SetStateAction<string>>;
  setActiveModal: Dispatch<SetStateAction<Modal>>;
};

const NewPostFilter: FC<Props> = ({ preview, handleClose, setFilter, setActiveModal }) => {
  const [selectedFilter, setSelectedFilter] = useState({
    name: 'Normal',
    filter: 'none',
  });

  const handleSubmit = () => {
    setFilter(selectedFilter.filter);

    setActiveModal(Modal.Caption);
  };

  const handleSelected = (name: string, filter: string) => setSelectedFilter({ name, filter });

  return (
    <Container>
      <Header>
        <Button onClick={handleClose}>Cancel</Button>

        <Title>New Post</Title>

        <Button onClick={handleSubmit}>Next</Button>
      </Header>

      <Preview alt="upload-image" src={preview} filter={selectedFilter.filter} />

      <FilterList>
        {filters.map(({ name, filter }) => (
          <Filter key={name}>
            <Name selected={selectedFilter.name === name}>{name}</Name>

            <Image
              alt="filter-image"
              src={preview}
              filter={filter}
              selected={selectedFilter.name === name}
              onClick={() => handleSelected(name, filter)}
            />
          </Filter>
        ))}
      </FilterList>
    </Container>
  );
};

export default NewPostFilter;
