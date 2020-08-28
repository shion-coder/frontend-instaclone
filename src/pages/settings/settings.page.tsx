import React, { FC, ChangeEvent, useState } from 'react';
import { Grid } from '@material-ui/core';

import Panel from 'components/common/material-tab-panel';
import UpdateProfile from 'components/settings/update-profile';
import UpdatePassword from 'components/settings/update-password';

import { Wrapper, Container, StyledTabs as Tabs, StyledTab as Tab } from './settings.styles';

/* -------------------------------------------------------------------------- */

const Setting: FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: ChangeEvent<Record<string, unknown>>, newValue: number) => setValue(newValue);

  return (
    <Wrapper>
      <Container container spacing={3}>
        <Grid item xs={4}>
          <Tabs orientation="vertical" indicatorColor="primary" value={value} onChange={handleChange}>
            <Tab label="Edit Profile" />

            <Tab label="Change Password" />
          </Tabs>
        </Grid>

        <Grid item xs={8}>
          <Panel value={value} index={0}>
            <UpdateProfile />
          </Panel>

          <Panel value={value} index={1}>
            <UpdatePassword />
          </Panel>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Setting;
