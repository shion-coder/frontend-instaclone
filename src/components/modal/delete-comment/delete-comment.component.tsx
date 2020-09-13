import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

import { useDeleteComment } from 'hooks';
import Button from 'components/common/button';

import { Wrapper, ModalTitle, ModalContent, ModalButton, Title, Content, StyledButton } from './delete-comment.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  id: string;
  postId: string;
  closeModal: () => void;
  closeDeleteModal: () => void;
};

const DeletePost: FC<Props> = ({ id, postId, closeModal, closeDeleteModal }) => {
  const { deletePost, isLoading } = useDeleteComment(postId, closeModal, closeDeleteModal);

  const handleDelete = () => deletePost(id);

  return (
    <Wrapper elevation={2}>
      <Grid container direction="column">
        <ModalTitle item container justify="center">
          <Title>Are you sure ?</Title>
        </ModalTitle>

        <ModalContent>
          <Content>This comment will be deleted and you won't be able to find it anymore</Content>
        </ModalContent>

        <ModalButton item container justify="center">
          <StyledButton variant="outlined" onClick={handleDelete} isLoading={isLoading}>
            Yes
          </StyledButton>

          <Button variant="outlined" onClick={closeDeleteModal} isLoading={isLoading}>
            No
          </Button>
        </ModalButton>
      </Grid>
    </Wrapper>
  );
};

export default DeletePost;
