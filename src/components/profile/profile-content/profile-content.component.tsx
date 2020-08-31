import React, { FC, ChangeEvent, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import Posts from 'components/profile/profile-content/posts';
import Saved from 'components/profile/profile-content/saved';

import { Container, Category, StyledTabs as Tabs, StyledTab as Tab, Content } from './profile-content.styles';

/* -------------------------------------------------------------------------- */

type Params = {
  username: string;
  page: 'posts' | 'saved';
};

const ProfileContent: FC = () => {
  const history = useHistory();
  const { username, page }: Params = useParams();

  const tab = page === 'posts' || page === 'saved' ? page : 'posts';

  const indexToTabName = {
    posts: 0,
    saved: 1,
  };

  const tabNameToIndex = {
    0: 'posts',
    1: 'saved',
  };

  const [selectedTab, setSelectedTab] = useState(indexToTabName[tab]);

  const handleChange = (event: ChangeEvent<Record<string, unknown>>, newValue: 0 | 1) => {
    history.push(`/${username}/${tabNameToIndex[newValue]}`);

    setSelectedTab(newValue);
  };

  return (
    <Container>
      <Category>
        <Tabs value={selectedTab} indicatorColor="primary" textColor="primary" centered onChange={handleChange}>
          <Tab icon={<AppsIcon />} label="Posts" />

          <Tab icon={<BookmarkIcon />} label="Saved" />
        </Tabs>
      </Category>

      <Content>
        {selectedTab === 0 && <Posts />}

        {selectedTab === 1 && <Saved />}
      </Content>
    </Container>
  );
};

export default ProfileContent;
