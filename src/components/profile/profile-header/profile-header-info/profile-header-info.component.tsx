import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Meta,
  Name,
  Setting,
  Edit,
  Icon,
  Follow,
  Stats,
  Posts,
  Number,
  Followers,
  Following,
  Other,
  Website,
  Bio,
} from './profile-header-info.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  isCurrentUser: boolean;
  fullName: string;
  postCount: number;
  followerCount: number;
  followingCount: number;
  website: string;
  bio: string;
};

const ProfileHeaderInfo: FC<Props> = ({
  isCurrentUser,
  fullName,
  postCount,
  followerCount,
  followingCount,
  website,
  bio,
}) => {
  const history = useHistory();

  const goSettings = () => history.push('/settings');

  return (
    <Container item xs={8} container direction="column">
      <Meta>
        <Name>{fullName}</Name>

        <Setting>
          {isCurrentUser ? (
            <>
              <Edit variant="outlined" color="primary" size="small" onClick={goSettings}>
                Edit Profile
              </Edit>

              <Icon color="primary" />
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

      <Other>
        <Bio>{bio}</Bio>

        <Website href={website} target="_blank">
          {website}
        </Website>
      </Other>
    </Container>
  );
};

export default ProfileHeaderInfo;
