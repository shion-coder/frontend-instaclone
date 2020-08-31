import React, { FC, Dispatch, SetStateAction, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'styled-react-modal';

import { ReturnGetUserProps } from 'types';
import { useFollow } from 'hooks';
import FollowButton from 'components/common/follow-button';
import SettingsModal from './settings-modal';

import { Container, Name, Setting, Edit, Icon } from './info-button.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  isCurrentUser: boolean;
  profile: ReturnGetUserProps;
  setNewProfile: Dispatch<SetStateAction<ReturnGetUserProps>>;
};

const InfoButton: FC<Props> = ({ isCurrentUser, profile, setNewProfile }) => {
  const history = useHistory();
  const goEdit = () => history.push('/settings/edit');

  const {
    user: { _id, fullName, avatar, followerCount },
    isFollowing,
  } = profile;

  /**
   * Handle settings modal
   */

  const [isOpenSettingsModal, setIsOpenSettingsModal] = useState(false);
  const openSettingsModal = () => setIsOpenSettingsModal(true);
  const closeSettingsModal = () => setIsOpenSettingsModal(false);

  /**
   * Handle follow
   */

  const onFollow = (isFollowing: boolean) =>
    setNewProfile({ user: { ...profile.user, followerCount: followerCount + 1 }, isFollowing });

  const onUnfollow = (isFollowing: boolean) =>
    setNewProfile({ user: { ...profile.user, followerCount: followerCount - 1 }, isFollowing });

  const { handleFollow, isLoading } = useFollow(_id, onFollow, onUnfollow);

  return (
    <Container>
      <Name>{fullName}</Name>

      <Setting>
        {isCurrentUser ? (
          <>
            <Edit variant="outlined" color="primary" size="small" onClick={goEdit}>
              Edit Profile
            </Edit>

            <Icon color="primary" onClick={openSettingsModal} />

            <Modal
              isOpen={isOpenSettingsModal}
              onBackgroundClick={closeSettingsModal}
              onEscapeKeydown={closeSettingsModal}
            >
              <SettingsModal avatar={avatar} name={fullName} closeSettingsModal={closeSettingsModal} />
            </Modal>
          </>
        ) : (
          <FollowButton isFollowing={isFollowing} handleFollow={handleFollow} isLoading={isLoading} />
        )}
      </Setting>
    </Container>
  );
};

export default InfoButton;
