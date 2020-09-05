import React, { FC, ChangeEvent, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import { Path } from 'types';
import UpdateProfile from 'components/settings/update-profile';
import UpdatePassword from 'components/settings/update-password';

import { Wrapper, Container, StyledTabs as Tabs, StyledTab as Tab } from './settings.styles';

/* -------------------------------------------------------------------------- */

type ParamsProps = {
  page: 'edit' | 'password';
};

const Setting: FC = () => {
  const history = useHistory();
  const { page }: ParamsProps = useParams();

  /**
   * Create material ui tab with router
   */

  const tab = page === 'edit' || page === 'password' ? page : 'edit';

  const indexToTabName = {
    edit: 0,
    password: 1,
  };

  const tabNameToIndex = {
    0: 'edit',
    1: 'password',
  };

  const [selectedTab, setSelectedTab] = useState(indexToTabName[tab]);

  /**
   * Handle change tab
   */

  const handleChange = (_event: ChangeEvent<Record<string, unknown>>, newValue: 0 | 1) => {
    history.push(`${Path.SETTINGS}/${tabNameToIndex[newValue]}`);

    setSelectedTab(newValue);
  };

  return (
    <Wrapper>
      <Container container spacing={3}>
        <Grid item xs={4}>
          <Tabs orientation="vertical" indicatorColor="primary" value={selectedTab} onChange={handleChange}>
            <Tab label="Edit Profile" />

            <Tab label="Change Password" />
          </Tabs>
        </Grid>

        <Grid item xs={8}>
          {selectedTab === 0 && <UpdateProfile />}

          {selectedTab === 1 && <UpdatePassword />}
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Setting;
