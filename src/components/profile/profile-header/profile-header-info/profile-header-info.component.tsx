import React, { FC, useState, useEffect } from 'react';
import Modal from 'styled-react-modal';
import { Grid, IconButton, Typography, Box } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

import { ReturnGetUserProps } from 'types';
import { useCustomHistory, useModal, useFollow } from 'hooks';
import FollowButton from 'components/common/button/follow-button';
import SettingsModal from 'components/modal/settings-modal';
import Follow from './follow';

import {
  Name,
  Settings,
  StyledButton as Button,
  Stats,
  Count,
  Other,
  StyledLink as Link,
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
    user: { fullName, bio = '', website = '', avatar, postCount, followerCount, followingCount },
    isFollowing,
    isCurrentUser,
  } = userProfile;

  return (
    <>
      <Grid container alignItems="center">
        <Name item xs={12} sm={6}>
          <Box fontWeight="fontWeightBold" letterSpacing={1}>
            {fullName}
          </Box>
        </Name>

        <Settings item xs={12} sm={6} container justify="flex-end" alignItems="center">
          {isCurrentUser ? (
            <>
              <Button variant="outlined" size="small" onClick={goEdit}>
                Edit Profile
              </Button>

              <IconButton onClick={openModal}>
                <SettingsIcon fontSize="small" />
              </IconButton>

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
      </Grid>

      <Stats container>
        <Count item xs={4} sm={4}>
          <Typography variant="body2">
            <Box component="span" fontWeight="fontWeightBold">
              {postCount}
            </Box>

            <Box component="span" fontSize="0.8rem" letterSpacing={1}>
              {` posts`}
            </Box>
          </Typography>
        </Count>

        <Count item xs={4} sm={4}>
          <Follow route="followers" count={followerCount} profile={profile} setUserProfile={setUserProfile} />
        </Count>

        <Count item xs={4} sm={4}>
          <Follow route="following" count={followingCount} profile={profile} setUserProfile={setUserProfile} />
        </Count>
      </Stats>

      <Other>
        <Box component="p">{bio}</Box>

        <Link href={website} target="_blank" color="textSecondary">
          {website}
        </Link>
      </Other>
    </>
  );
};

export default ProfileHeaderInfo;
