import React, { FC, useState } from 'react';
import { CancelTokenSource } from 'axios';

import { POST_MODAL } from 'types';
import { filters } from 'utils';
import NewPostFilter from 'components/new-post/new-post-filters';
import NewPostCaption from 'components/new-post/new-post-caption';

/* -------------------------------------------------------------------------- */

type Props = {
  formData: FormData | undefined;
  preview: string | undefined;
  handleClose: () => void;
  source: CancelTokenSource;
};

const NewPostModal: FC<Props> = ({ formData, preview, handleClose, source }) => {
  const [filter, setFilter] = useState(filters[0].filter);
  const [activeModal, setActiveModal] = useState(POST_MODAL.FILTER);

  return activeModal === POST_MODAL.FILTER ? (
    <NewPostFilter preview={preview} handleClose={handleClose} setFilter={setFilter} setActiveModal={setActiveModal} />
  ) : (
    <NewPostCaption
      formData={formData}
      preview={preview}
      handleClose={handleClose}
      source={source}
      filter={filter}
      setActiveModal={setActiveModal}
    />
  );
};

export default NewPostModal;
