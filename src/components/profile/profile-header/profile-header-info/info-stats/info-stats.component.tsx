import React, { FC, Dispatch, SetStateAction, useState } from 'react';
import Modal from 'styled-react-modal';

import { ReturnGetUserProps } from 'types';
import UsersModal from './users-modal';

import { Container, Posts, Number, Followers, Following } from './info-stats.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  isCurrentUser: boolean;
  profile: ReturnGetUserProps;
  setNewProfile: Dispatch<SetStateAction<ReturnGetUserProps>>;
};

const InfoStats: FC<Props> = ({ isCurrentUser, profile, setNewProfile }) => {
  const {
    user: { postCount, followerCount, followingCount },
  } = profile;

  /**
   * Handle Modal
   */

  const [isOpenFollowersModal, setIsOpenFollowersModal] = useState(false);
  const [isOpenFollowingModal, setIsOpenFollowingModal] = useState(false);

  const openFollowersModal = () => setIsOpenFollowersModal(true);
  const closeFollowersModal = () => setIsOpenFollowersModal(false);
  const openFollowingModal = () => setIsOpenFollowingModal(true);
  const closeFollowingModal = () => setIsOpenFollowingModal(false);

  return (
    <Container>
      <Posts item xs={4}>
        <Number>{postCount}</Number>
        {` posts`}
      </Posts>

      <Followers item xs={4} onClick={openFollowersModal}>
        <Number>{followerCount}</Number>
        {` followers`}
      </Followers>

      <Modal
        isOpen={isOpenFollowersModal}
        onBackgroundClick={closeFollowersModal}
        onEscapeKeydown={closeFollowersModal}
      >
        <UsersModal
          route="followers"
          isCurrentUser={isCurrentUser}
          profile={profile}
          setNewProfile={setNewProfile}
          closeModal={closeFollowersModal}
        />
      </Modal>

      <Following item xs={4} onClick={openFollowingModal}>
        <Number>{followingCount}</Number>
        {` following`}
      </Following>

      <Modal
        isOpen={isOpenFollowingModal}
        onBackgroundClick={closeFollowingModal}
        onEscapeKeydown={closeFollowingModal}
      >
        <UsersModal
          route="following"
          isCurrentUser={isCurrentUser}
          profile={profile}
          setNewProfile={setNewProfile}
          closeModal={closeFollowingModal}
        />
      </Modal>
    </Container>
  );
};

export default InfoStats;
