import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { UserProps } from 'types';
import { RootStateProps } from 'store';

import {
  Container,
  Image,
  StyledAvatar as Avatar,
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
};

const ProfileHeader: FC<Props> = ({
  user: { avatar, username, fullName, postCount, followerCount, followingCount, bio },
}) => {
  const currentUsername = useSelector((state: RootStateProps) => state.auth.user.username);

  return (
    <Container container justify="center" alignItems="center">
      <Image item xs={4} container direction="row" justify="center" alignItems="center">
        <Avatar src={avatar} />
      </Image>

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
