import React, { FC } from 'react';
import Modal from 'styled-react-modal';
import { IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';

import { useModal } from 'hooks';
import ShareModal from 'components/modal/share-modal';

import { Wrapper, SavedButton } from './action.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  id: string;
  focus: () => void | undefined;
};

const Action: FC<Props> = ({ id, focus }) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <Wrapper container>
      <IconButton>
        <FavoriteBorderIcon fontSize="small" />
      </IconButton>

      <IconButton onClick={focus}>
        <ModeCommentOutlinedIcon fontSize="small" />
      </IconButton>

      <IconButton onClick={openModal}>
        <ShareOutlinedIcon fontSize="small" />
      </IconButton>

      <Modal isOpen={isOpen} onBackgroundClick={closeModal} onEscapeKeydown={closeModal}>
        <ShareModal id={id} closeModal={closeModal} />
      </Modal>

      <SavedButton>
        <BookmarkBorderOutlinedIcon fontSize="small" />
      </SavedButton>
    </Wrapper>
  );
};

export default Action;
