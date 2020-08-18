import React, { FC, useState } from 'react';
import PropTypes from 'prop-types';
import { CancelTokenSource } from 'axios';

import { Modal } from 'types';
import NewPostFilter from 'components/new-post/new-post-filter';
import NewPostCaption from 'components/new-post/new-post-caption';

/* -------------------------------------------------------------------------- */

type Props = {
  formData: FormData | undefined;
  preview: string | undefined;
  handleClose: () => void;
  source: CancelTokenSource;
};

const NewPostModal: FC<Props> = ({ formData, preview, handleClose, source }) => {
  const [filter, setFilter] = useState('none');
  const [activeModal, setActiveModal] = useState(Modal.Filter);

  return activeModal === Modal.Filter ? (
    <NewPostFilter preview={preview} handleClose={handleClose} setFilter={setFilter} setActiveModal={setActiveModal} />
  ) : (
    <NewPostCaption
      filter={filter}
      formData={formData}
      preview={preview}
      setActiveModal={setActiveModal}
      handleClose={handleClose}
      source={source}
    />
  );
};

NewPostModal.propTypes = {
  preview: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
};

export default NewPostModal;
