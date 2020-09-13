import React, { FC } from 'react';
import Modal from 'styled-react-modal';
import { Grid } from '@material-ui/core';

import { useModal } from 'hooks';
import Item from 'components/common/list-item-button';
import DeleteComment from 'components/modal/delete-comment';

import { Wrapper } from './comment-modal.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  id: string;
  postId: string;
  isMine: boolean;
  closeModal: () => void;
};

const CommentModal: FC<Props> = ({ id, postId, isMine, closeModal }) => {
  /**
   * Handle delete post modal
   */

  const { isOpen, openModal: openDeleteModal, closeModal: closeDeleteModal } = useModal();

  return (
    <Wrapper elevation={2}>
      <Grid container direction="column">
        {isMine && (
          <Grid item onClick={openDeleteModal}>
            <Item text="Delete comment" border={1} />
          </Grid>
        )}

        <Modal isOpen={isOpen} onBackgroundClick={closeDeleteModal} onEscapeKeydown={closeDeleteModal}>
          <DeleteComment id={id} postId={postId} closeModal={closeModal} closeDeleteModal={closeDeleteModal} />
        </Modal>

        <Grid item onClick={closeModal}>
          <Item text="Cancel" />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default CommentModal;
