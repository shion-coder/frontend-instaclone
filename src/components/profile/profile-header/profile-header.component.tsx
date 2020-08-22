import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { UserProps } from 'types';
import { RootStateProps } from 'store';
import Avatar from 'components/profile/profile-header/profile-header-avatar';

import {
  Container,
  Info,
  Meta,
  Name,
  Setting,
  Edit,
  Icon,
  Follow,
  Stats,
  Number,
  Posts,
  Followers,
  Following,
  Bio,
} from './profile-header.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  user: UserProps;
  refetch: () => Promise<void>;
};

const ProfileHeader: FC<Props> = ({
  user: { avatar, username, fullName, postCount, followerCount, followingCount, bio },
  refetch,
}) => {
  const currentUsername = useSelector((state: RootStateProps) => state.auth.user.username);

  return (
    <Container container justify="center" alignItems="center">
      <Avatar avatar={avatar} isCurrentUser={currentUsername === username} refetch={refetch} />

      <Info item xs={8} container direction="column" justify="space-between">
        <Meta container alignItems="center">
          <Name item xs={6}>
            {fullName}
          </Name>

          <Setting item xs={6} container alignItems="center" justify="center">
            {currentUsername === username ? (
              <>
                <Edit variant="outlined" size="small">
                  Edit Profile
                </Edit>

                <Icon />
              </>
            ) : (
              <Follow variant="contained" color="primary" size="small">
                Follow
              </Follow>
            )}
          </Setting>
        </Meta>

        <Stats container>
          <Posts item xs={4}>
            <Number>{postCount}</Number>
            {` posts`}
          </Posts>

          <Followers item xs={4}>
            <Number>{followerCount}</Number>
            {` followers`}
          </Followers>

          <Following item xs={4}>
            <Number>{followingCount}</Number>
            {` following`}
          </Following>
        </Stats>

        <Bio>{bio}</Bio>
      </Info>
    </Container>
  );
};

export default ProfileHeader;
