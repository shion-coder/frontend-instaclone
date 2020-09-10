import React, { FC, Dispatch, SetStateAction } from 'react';
import { Grid } from '@material-ui/core';

import { ReturnGetUserProps } from 'types';
import { useGetFollow } from 'hooks';
import { UsersModalLoading } from './users-modal.loading';
import EmptyUser from './empty-user';
import UserCard, { UserCardLoading } from './user-card';

import { Wrapper, Title, Name, Cancel, Content, LoadMore } from './users-modal.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  route: 'followers' | 'following';
  profile: ReturnGetUserProps;
  setUserProfile: Dispatch<SetStateAction<ReturnGetUserProps>>;
  closeModal: () => void;
};

const UsersModal: FC<Props> = ({ route, profile, setUserProfile, closeModal }) => {
  const {
    user: { username },
  } = profile;

  const { ref, data, isLoading, canFetchMore } = useGetFollow(username, route);

  /**
   * Render followers, following
   */

  const renderFollow = () => {
    if (isLoading) {
      return <UsersModalLoading />;
    }

    if (data) {
      return data[0].users.length === 0 ? (
        <EmptyUser />
      ) : (
        <>
          {data.map((page, i) => (
            <React.Fragment key={i}>
              {page.users &&
                page.users.map((follow) => (
                  <UserCard
                    key={follow.user._id}
                    route={route}
                    user={follow}
                    profile={profile}
                    setUserProfile={setUserProfile}
                    closeModal={closeModal}
                  />
                ))}
            </React.Fragment>
          ))}
        </>
      );
    }
  };

  return (
    <Wrapper elevation={2}>
      <Grid container direction="column">
        <Title>
          <Name>{route}</Name>

          <Cancel onClick={closeModal} />
        </Title>

        <Content>
          {renderFollow()}

          {canFetchMore && (
            <LoadMore ref={ref}>
              <UserCardLoading />
            </LoadMore>
          )}
        </Content>
      </Grid>
    </Wrapper>
  );
};

export default UsersModal;
