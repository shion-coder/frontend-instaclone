import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { useUser } from 'hooks';
import Avatar from 'components/common/avatar';

import { UserContainer, Info, Name, Text, Username } from './user.styles';

/* -------------------------------------------------------------------------- */

const Home: FC = () => {
  const history = useHistory();
  const { fullName, username, avatar } = useUser();

  const handleClickUser = () => {
    history.push(`/${username}`);
  };

  return (
    <UserContainer item container>
      <Avatar src={avatar} width="4rem" height="4rem" cursor onClick={handleClickUser} />

      <Info>
        <Text>
          <Name onClick={handleClickUser}>{fullName}</Name>
        </Text>

        <Username>{username}</Username>
      </Info>
    </UserContainer>
  );
};

export default Home;
