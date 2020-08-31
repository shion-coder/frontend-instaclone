import React, { FC, ChangeEvent, useState } from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import Panel from 'components/common/material-tab-panel';
import Posts from 'components/profile/profile-content/posts';
import Saved from 'components/profile/profile-content/saved';

import { Container, Category, StyledTabs as Tabs, StyledTab as Tab, Content } from './profile-content.styles';

/* -------------------------------------------------------------------------- */

const ProfileContent: FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: ChangeEvent<Record<string, unknown>>, newValue: number) => setValue(newValue);

  return (
    <Container>
      <Category>
        <Tabs value={value} indicatorColor="primary" textColor="primary" centered onChange={handleChange}>
          <Tab icon={<AppsIcon />} label="Posts" />

          <Tab icon={<BookmarkIcon />} label="Saved" />
        </Tabs>
      </Category>

      <Content>
        <Panel value={value} index={0}>
          <Posts />
        </Panel>

        <Panel value={value} index={1}>
          <Saved />
        </Panel>
      </Content>
    </Container>
  );
};

export default ProfileContent;
