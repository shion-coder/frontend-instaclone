import React, { FC, useState } from 'react';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { http } from 'services';
import { filters } from 'utils';

import {
  Container,
  Header,
  Close,
  Next,
  Title,
  Preview,
  FilterList,
  Filter,
  Name,
  Image,
} from './new-post-modal.style';

/* -------------------------------------------------------------------------- */

type Props = {
  formData: FormData | undefined;
  preview: string | undefined;
  handleClose: () => void;
};

const requestCreate = (data: FormData | undefined) => http.post('/post', data);

const NewPostModal: FC<Props> = ({ formData, preview, handleClose }) => {
  const [selectedFilter, setSelectedFilter] = useState({
    name: 'Normal',
    filter: 'none',
  });

  const [createNewPost] = useMutation(requestCreate, {
    onError: (err: AxiosError) => {
      toast.error(err.response?.data.error, { toastId: 'upload-error' });
    },
  });

  const handleSubmit = () => {
    if (selectedFilter.filter !== 'none') {
      formData?.set('filter', selectedFilter.filter);
    }

    createNewPost(formData);
  };

  const handleSelected = (name: string, filter: string) => setSelectedFilter({ name, filter });

  return (
    <Container>
      <Header>
        <Close fontSize="small" onClick={handleClose} />

        <Title>New Post</Title>

        <Next fontSize="small" onClick={handleSubmit} />
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

export default NewPostModal;
