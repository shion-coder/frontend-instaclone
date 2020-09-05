import React, { FC, ChangeEvent, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import { ReturnGetUserProps } from 'types';
import Posts from './posts';
import Saved from './saved';
import Tagged from './tagged';

import { Container, Category, StyledTabs as Tabs, StyledTab as Tab, Content } from './profile-content.styles';

/* -------------------------------------------------------------------------- */

type ParamsProps = {
  username: string;
  page: 'posts' | 'saved' | 'tagged';
};

type Props = {
  profile: ReturnGetUserProps;
};

const ProfileContent: FC<Props> = ({ profile }) => {
  const history = useHistory();
  const { username, page }: ParamsProps = useParams();

  /**
   * Create material ui tab with router
   */

  const tab = page === 'posts' || page === 'saved' || page === 'tagged' ? page : 'posts';

  const indexToTabName = {
    posts: 0,
    saved: 1,
    tagged: 2,
  };

  const tabNameToIndex = {
    0: 'posts',
    1: 'saved',
    2: 'tagged',
  };

  /**
   * Handle change tab
   */

  const [selectedTab, setSelectedTab] = useState(indexToTabName[tab]);

  const handleChange = (_event: ChangeEvent<Record<string, unknown>>, newValue: 0 | 1) => {
    history.push(`/${username}/${tabNameToIndex[newValue]}`);

    setSelectedTab(newValue);
  };

  return (
    <Container>
      <Category>
        <Tabs value={selectedTab} indicatorColor="primary" textColor="primary" centered onChange={handleChange}>
          <Tab icon={<AppsIcon />} label="Posts" />

          <Tab icon={<BookmarkIcon />} label="Saved" display={profile.isCurrentUser ? 1 : 0} />

          <Tab icon={<AccountBoxIcon />} label="Tagged" />
        </Tabs>
      </Category>

      <Content>
        {selectedTab === 0 && <Posts profile={profile} />}

        {selectedTab === 1 && <Saved profile={profile} />}

        {selectedTab === 2 && <Tagged profile={profile} />}
      </Content>
    </Container>
  );
};

export default ProfileContent;
