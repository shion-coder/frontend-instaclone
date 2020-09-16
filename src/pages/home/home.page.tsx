import React, { FC } from 'react';
import { Container } from '@material-ui/core';

import Feed from 'components/home/feed';
import User from 'components/home/user';
import Suggestion from 'components/home/suggestion';

import { Wrapper, Content, SideBar } from './home.styles';

/* -------------------------------------------------------------------------- */

const Home: FC = () => {
  return (
    <Container maxWidth="md">
      <Wrapper container direction="row-reverse">
        <Content>
          <Feed />
        </Content>

        <SideBar>
          <User />

          <Suggestion />
        </SideBar>
      </Wrapper>
    </Container>
  );
};

export default Home;
