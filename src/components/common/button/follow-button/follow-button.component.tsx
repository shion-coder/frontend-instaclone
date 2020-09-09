import React, { FC } from 'react';
import Modal from 'styled-react-modal';

import { useModal } from 'hooks';
import Button from 'components/common/button';
import UnfollowModal from 'components/modal/unfollow-modal';

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
      <Button color="secondary" size="small" isLoading={isLoading} onClick={openModal}>
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
    <Button color="primary" size="small" isLoading={isLoading} onClick={handleFollow}>
      Follow
    </Button>
  );
};

export default FollowButton;
