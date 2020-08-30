import React, { FC, Dispatch, SetStateAction } from 'react';
import { isEmpty } from 'lodash-es';

import { ReturnGetUserProps, ReturnGetFollowProps } from 'types';
import { useGetFollow } from 'hooks';
import { UserCard, UserCardLoading } from './user-card';
import { ContentLoading } from './users-modal.loading';
import Empty from './empty-content';

import { Container, Title, Name, Cancel, Content, LoadMore } from './users-modal.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  route: 'followers' | 'following';
  isCurrentUser: boolean;
  profile: ReturnGetUserProps;
  setNewProfile: Dispatch<SetStateAction<ReturnGetUserProps>>;
  closeModal: () => void;
};

const FollowersModal: FC<Props> = ({ route, isCurrentUser, profile, setNewProfile, closeModal }) => {
  const {
    user: { _id },
  } = profile;

  const { ref, data, isLoading, canFetchMore } = useGetFollow(_id, route);

  /**
   * Render followers, following
   */

  const renderFollow = (data: ReturnGetFollowProps[] | undefined) => {
    if (isLoading) {
      return <ContentLoading />;
    }

    if (data) {
      if (isEmpty(data[0].users)) {
        return <Empty />;
      } else {
        return (
          <>
            {data.map((page, i) => (
              <React.Fragment key={i}>
                {page.users &&
                  page.users.map((follow) => (
                    <UserCard
                      key={follow.user._id}
                      user={follow}
                      isCurrentUser={isCurrentUser}
                      closeModal={closeModal}
                      profile={profile}
                      setNewProfile={setNewProfile}
                    />
                  ))}
              </React.Fragment>
            ))}
          </>
        );
      }
    }
  };

  /**
   * Render content with load more skeleton at bottom only show when can fetch more
   */

  const renderContent = (data: ReturnGetFollowProps[] | undefined) => (
    <>
      {renderFollow(data)}

      {canFetchMore && (
        <LoadMore ref={ref}>
          <UserCardLoading />
        </LoadMore>
      )}
    </>
  );

  return (
    <Container>
      <Title>
        <Name>{route === 'followers' ? 'Followers' : 'Following'}</Name>

        <Cancel onClick={closeModal} />
      </Title>

      <Content>{renderContent(data)}</Content>
    </Container>
  );
};

export default FollowersModal;
