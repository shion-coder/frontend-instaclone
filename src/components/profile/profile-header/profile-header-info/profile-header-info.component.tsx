import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import Modal from 'styled-react-modal';
import { toast } from 'react-toastify';

import { GetUserProps } from 'types';
import { http } from 'services';
import loading from 'assets/animations/dot-loading.json';
import SettingsModal from 'components/profile/profile-header/profile-settings-modal';

import {
  Container,
  Meta,
  Name,
  Setting,
  Edit,
  Icon,
  Follow,
  Layer,
  StyledLottie as Lottie,
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
  data: GetUserProps;
  refetch: () => Promise<GetUserProps | undefined>;
};

const ProfileHeaderInfo: FC<Props> = ({
  isCurrentUser,
  data: {
    user: { _id, fullName, postCount, followerCount, followingCount, bio, website },
    isFollowing,
  },
  refetch,
}) => {
  const [isOpenSettingsModal, setIsOpenSettingsModal] = useState(false);
  const history = useHistory();

  const goSettings = () => history.push('/settings');

  const toggleSettingsModal = () => setIsOpenSettingsModal((previous) => !previous);

  const requestFollow = () => http.post(`/users/${_id}/follow`);

  const [followUser, { isLoading }] = useMutation(requestFollow, {
    onError: (err: AxiosError) => {
      toast.error(err.response?.data.error, { toastId: 'follow-error' });
    },
    onSuccess: () => {
      refetch();
    },
  });

  const handleFollow = () => followUser();

  const renderFollowButton = () => {
    return isFollowing ? (
      <Follow variant="outlined" color="primary" size="small" onClick={handleFollow}>
        {isLoading && (
          <Layer>
            <Lottie play loop animationData={loading} />
          </Layer>
        )}
        Following
      </Follow>
    ) : (
      <Follow variant="contained" color="primary" size="small" onClick={handleFollow}>
        {isLoading && (
          <Layer>
            <Lottie play loop animationData={loading} />
          </Layer>
        )}
        Follow
      </Follow>
    );
  };

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

              <Icon color="primary" onClick={toggleSettingsModal} />

              <Modal
                isOpen={isOpenSettingsModal}
                onBackgroundClick={toggleSettingsModal}
                onEscapeKeydown={toggleSettingsModal}
              >
                <SettingsModal toggleModal={toggleSettingsModal} />
              </Modal>
            </>
          ) : (
            renderFollowButton()
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
