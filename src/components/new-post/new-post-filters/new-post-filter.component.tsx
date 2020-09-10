import React, { FC, Dispatch, SetStateAction, useState } from 'react';
import { useTheme, useMediaQuery, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { POST_MODAL } from 'types';
import { filters } from 'utils';

import {
  StyledPaper as Paper,
  Wrapper,
  Header,
  Button,
  Preview,
  FilterList,
  StyledGridList as GridList,
  StyledGridListTile as GridListTile,
  StyledGridListTileBar as GridListTileBar,
  Filter,
} from './new-post-filter.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  preview: string | undefined;
  handleClose: () => void;
  setFilter: Dispatch<SetStateAction<string>>;
  setActiveModal: Dispatch<SetStateAction<POST_MODAL>>;
};

const NewPostFilter: FC<Props> = ({ preview, handleClose, setFilter, setActiveModal }) => {
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);

  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  /**
   * Handle select filter and submit filter
   */

  const handleSelected = (name: string, filter: string) => setSelectedFilter({ name, filter });

  const handleSubmit = () => {
    setFilter(selectedFilter.filter);

    setActiveModal(POST_MODAL.CAPTION);
  };

  return (
    <Grid item xs={11} sm={10} md={8} lg={6}>
      <Paper>
        <Wrapper container direction="column">
          <Header container justify="space-between">
            <Button onClick={handleClose}>Cancel</Button>

            <AddIcon fontSize="small" />

            <Button onClick={handleSubmit}>Next</Button>
          </Header>

          <Grid container justify="center">
            <Preview alt="upload-image" src={preview} filter={selectedFilter.filter} />
          </Grid>

          <FilterList container justify="center">
            <GridList cols={matchesXS ? 2.5 : matchesSM ? 3.5 : 4.5}>
              {filters.map(({ name, filter }) => (
                <GridListTile key={name} onClick={() => handleSelected(name, filter)}>
                  <Filter src={preview} alt={name} filter={filter} />

                  <GridListTileBar title={name} selected={selectedFilter.name === name} />
                </GridListTile>
              ))}
            </GridList>
          </FilterList>
        </Wrapper>
      </Paper>
    </Grid>
  );
};

export default NewPostFilter;
