import React, { FC, Dispatch, SetStateAction, useState } from 'react';

import { POST_MODAL } from 'types';
import { filters } from 'utils';
import Filter from './post-filter';

import { Container, Header, Button, Title, Preview, FilterList } from './new-post-filter.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  preview: string | undefined;
  handleClose: () => void;
  setFilter: Dispatch<SetStateAction<string>>;
  setActiveModal: Dispatch<SetStateAction<POST_MODAL>>;
};

const NewPostFilter: FC<Props> = ({ preview, handleClose, setFilter, setActiveModal }) => {
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);

  /**
   * Handle select filter and submit it then switch to caption modal
   */

  const handleSelected = (name: string, filter: string) => setSelectedFilter({ name, filter });

  const handleSubmit = () => {
    setFilter(selectedFilter.filter);

    setActiveModal(POST_MODAL.CAPTION);
  };

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
          <Filter
            key={name}
            name={name}
            filter={filter}
            selected={selectedFilter.name === name}
            preview={preview}
            handleSelected={handleSelected}
          />
        ))}
      </FilterList>
    </Container>
  );
};

export default NewPostFilter;
