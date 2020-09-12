import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'styled-react-modal';
import { Grid } from '@material-ui/core';

import { useModal } from 'hooks';
import Item from 'components/common/list-item-button';
import DeletePost from 'components/modal/delete-post';

import { Wrapper } from './post-modal.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  id: string;
  isMine: boolean;
  closeModal: () => void;
};

const PostModal: FC<Props> = ({ id, isMine, closeModal }) => {
  const history = useHistory();

  /**
   * Handle delete post modal
   */

  const { isOpen, openModal: openDeleteModal, closeModal: closeDeleteModal } = useModal();

  /**
   * Handle post modal
   */

  const handleGoPost = () => {
    history.push(`/post/${id}`);

    closeModal();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.origin + `/post/${id}`);

    closeModal();
  };

  return (
    <Wrapper elevation={2}>
      <Grid container direction="column">
        <Grid item onClick={handleGoPost}>
          <Item text="Go to post" border={1} />
        </Grid>

        {isMine && (
          <Grid item onClick={openDeleteModal}>
            <Item text="Delete post" border={1} />
          </Grid>
        )}

        <Modal isOpen={isOpen} onBackgroundClick={closeDeleteModal} onEscapeKeydown={closeDeleteModal}>
          <DeletePost id={id} closeModal={closeModal} closeDeleteModal={closeDeleteModal} />
        </Modal>

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
