import React, { FC, ChangeEvent, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useMediaQuery, useTheme, Container, Grid } from '@material-ui/core';

import { PATH } from 'types';
import UpdateProfile from 'components/settings/update-profile';
import UpdatePassword from 'components/settings/update-password';

import { StyledPaper as Paper, StyledTabs as Tabs, StyledTab as Tab } from './settings.styles';

/* -------------------------------------------------------------------------- */

type ParamsProps = {
  page: 'edit' | 'password';
};

const Setting: FC = () => {
  const history = useHistory();
  const { page }: ParamsProps = useParams();
  const matchesXS = useMediaQuery(useTheme().breakpoints.down('xs'));

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
    history.push(`${PATH.SETTINGS}/${tabNameToIndex[newValue]}`);

    setSelectedTab(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Grid container justify="center">
        <Grid item xs={12} sm={11} md={10}>
          <Paper elevation={4}>
            <Grid container justify="center" direction={matchesXS ? 'column' : 'row'}>
              <Grid item xs={12} sm={4}>
                <Tabs orientation={matchesXS ? 'horizontal' : 'vertical'} value={selectedTab} onChange={handleChange}>
                  <Tab label="Edit Profile" />

                  <Tab label="Change Password" />
                </Tabs>
              </Grid>

              <Grid item xs={12} sm={8}>
                {selectedTab === 0 && <UpdateProfile />}

                {selectedTab === 1 && <UpdatePassword />}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Setting;
