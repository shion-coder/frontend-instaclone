import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

import Item from 'components/common/list-item-button';

import { Wrapper } from './post-modal.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  closeModal: () => void;
};

const PostModal: FC<Props> = ({ closeModal }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);

    closeModal();
  };

  return (
    <Wrapper elevation={2}>
      <Grid container direction="column">
        <Grid item onClick={handleCopy}>
          <Item text="Copy link" border={1} />
        </Grid>

        <Grid item onClick={closeModal}>
          <Item text="Cancel" />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default PostModal;