import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

import Item from 'components/common/list-item-button';

import { Wrapper } from './share-modal.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  id: string;
  closeModal: () => void;
};

const ShareModal: FC<Props> = ({ id, closeModal }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.origin + `/post/${id}`);

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

export default ShareModal;
