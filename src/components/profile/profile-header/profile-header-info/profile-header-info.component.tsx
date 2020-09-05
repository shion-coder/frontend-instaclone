import React, { FC, useState, useEffect } from 'react';
import Modal from 'styled-react-modal';

import { ReturnGetUserProps } from 'types';
import { useCustomHistory, useModal, useFollow } from 'hooks';
import FollowButton from 'components/common/follow-button';
import SettingsModal from './settings-modal';
import Follow from './follow';

import {
  Container,
  Handle,
  Name,
  Settings,
  Edit,
  Icon,
  Stats,
  Number,
  Posts,
  Other,
  Bio,
  Website,
} from './profile-header-info.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  profile: ReturnGetUserProps;
};

const ProfileHeaderInfo: FC<Props> = ({ profile }) => {
  const [userProfile, setUserProfile] = useState(profile);

  const { goEdit } = useCustomHistory();
  const { isOpen, openModal, closeModal } = useModal();
  const { handleFollow, isLoading } = useFollow(profile, profile, setUserProfile);

  /**
   * Renew profile when it update
   */

  useEffect(() => {
    setUserProfile(profile);
  }, [profile]);

  /**
   * Get values from userProfile to change value when user click follow button in profile page or in followers, following modal
   */

  const {
    user: { fullName, bio, website, avatar, postCount, followerCount, followingCount },
    isFollowing,
    isCurrentUser,
  } = userProfile;

  return (
    <Container item xs={8} container direction="column">
      <Handle>
        <Name>{fullName}</Name>

        <Settings>
          {isCurrentUser ? (
            <>
              <Edit variant="outlined" color="primary" size="small" onClick={goEdit}>
                Edit Profile
              </Edit>

              <Icon color="primary" onClick={openModal} />

              <Modal isOpen={isOpen} onBackgroundClick={closeModal} onEscapeKeydown={closeModal}>
                <SettingsModal profile={profile} closeModal={closeModal} />
              </Modal>
            </>
          ) : (
            <FollowButton
              avatar={avatar}
              fullName={fullName}
              isFollowing={isFollowing}
              isLoading={isLoading}
              handleFollow={handleFollow}
            />
          )}
        </Settings>
      </Handle>

      <Stats>
        <Posts item xs={4}>
          <Number>{postCount}</Number>

          {` posts`}
        </Posts>

        <Follow route="followers" count={followerCount} profile={profile} setUserProfile={setUserProfile} />

        <Follow route="following" count={followingCount} profile={profile} setUserProfile={setUserProfile} />
      </Stats>

      <Other>
        <Bio>{bio}</Bio>

        <Website href={website} target="blank">
          {website}
        </Website>
      </Other>
    </Container>
  );
};

export default ProfileHeaderInfo;
