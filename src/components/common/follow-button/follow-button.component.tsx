import React, { FC } from 'react';
import Modal from 'styled-react-modal';

import { useModal } from 'hooks';
import Loader from 'components/loader/layer-loader';
import UnfollowModal from './unfollow-modal';

import { StyledButton as Button } from './follow-button.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  avatar: string;
  fullName: string;
  isFollowing: boolean;
  isLoading: boolean;
  handleFollow: () => void;
};

const FollowButton: FC<Props> = ({ avatar, fullName, isFollowing, isLoading, handleFollow }) => {
  const { isOpen, openModal, closeModal } = useModal();

  /**
   * Handle unfollow action
   */

  const handleUnfollow = () => {
    handleFollow();
    closeModal();
  };

  return isFollowing ? (
    <>
      <Button variant="contained" color="secondary" size="small" loading={isLoading ? 1 : 0} onClick={openModal}>
        {isLoading && <Loader color="dark" width="25px" height="25px" radius="4px" />}
        Following
      </Button>

      <Modal isOpen={isOpen} onBackgroundClick={closeModal} onEscapeKeydown={closeModal}>
        <UnfollowModal
          avatar={avatar}
          fullName={fullName}
          handleFollow={handleUnfollow}
          closeUnfollowModal={closeModal}
        />
      </Modal>
    </>
  ) : (
    <Button variant="contained" color="primary" size="small" loading={isLoading ? 1 : 0} onClick={handleFollow}>
      {isLoading && <Loader color="dark" width="25px" height="25px" radius="4px" />}
      Follow
    </Button>
  );
};

export default FollowButton;
