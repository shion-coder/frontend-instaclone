import React, { FC, Dispatch, SetStateAction, useState } from 'react';
import Modal from 'styled-react-modal';

import { GetUserProps } from 'types';
import FollowersModal from './followers-modal';
import FollowingModal from './following-modal';

import { Container, Posts, Number, Followers, Following } from './info-stats.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  isCurrentUser: boolean;
  data: GetUserProps;
  setNewData: Dispatch<SetStateAction<GetUserProps>>;
};

const InfoStats: FC<Props> = ({
  isCurrentUser,
  data: {
    user: { postCount, followerCount, followingCount },
  },
  setNewData,
}) => {
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
        <FollowersModal isCurrentUser={isCurrentUser} closeFollowersModal={closeFollowersModal} />
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
        <FollowingModal isCurrentUser={isCurrentUser} closeFollowingModal={closeFollowingModal} />
      </Modal>
    </Container>
  );
};

export default InfoStats;
