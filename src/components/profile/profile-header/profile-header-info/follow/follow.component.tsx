import React, { FC, Dispatch, SetStateAction } from 'react';
import Modal from 'styled-react-modal';

import { ReturnGetUserProps } from 'types';
import { useModal } from 'hooks';
import UsersModal from './users-modal';

import { Content, Number } from './follow.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  route: 'followers' | 'following';
  count: number;
  profile: ReturnGetUserProps;
  setUserProfile: Dispatch<SetStateAction<ReturnGetUserProps>>;
};

const Follow: FC<Props> = ({ route, count, profile, setUserProfile }) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Content item xs={4} onClick={openModal}>
        <Number>{count}</Number>

        {` ${route}`}
      </Content>

      <Modal isOpen={isOpen} onBackgroundClick={closeModal} onEscapeKeydown={closeModal}>
        <UsersModal route={route} profile={profile} setUserProfile={setUserProfile} closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default Follow;
