import React, { FC } from 'react';
import { useQuery } from 'react-query';

import { QUERY } from 'types';
import { useUser } from 'hooks';
import { requestGetSuggestedUsers } from 'services';
import UserSuggest, { UserLoading } from './user';

import { Container, Title, Name, SuggestList, NoUsers } from './suggestion.styles';

/* -------------------------------------------------------------------------- */

const Suggestion: FC = () => {
  const { username } = useUser();
  const { isLoading, data } = useQuery([QUERY.GET_SUGGESTED_USERS, username], requestGetSuggestedUsers);

  const renderSuggestList = () => {
    return !data ? (
      <></>
    ) : data.users.length ? (
      data?.users.map((user) => <UserSuggest key={user._id} user={user} />)
    ) : (
      <NoUsers>No available users</NoUsers>
    );
  };

  return (
    <Container>
      <Title>
        <Name>Suggestions for you</Name>
      </Title>

      <SuggestList>
        {isLoading && (
          <>
            <UserLoading />
            <UserLoading />
            <UserLoading />
            <UserLoading />
            <UserLoading />
          </>
        )}

        {renderSuggestList()}
      </SuggestList>
    </Container>
  );
};

export default Suggestion;
