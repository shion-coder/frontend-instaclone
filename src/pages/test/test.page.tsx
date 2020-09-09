import React, { FC } from 'react';
import { Container, Typography, Grid, CardActionArea, CardContent, Card, CardMedia } from '@material-ui/core';

import { Main } from './test.styles';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

/* -------------------------------------------------------------------------- */

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
  },
  logo: {
    width: '2rem',
    height: '2rem',
    marginRight: '1rem',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '50vh',
  },
  cardMedia: {
    width: '50%',
    height: '50vh',
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  comment: {
    height: '60%',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '80vw',
    height: '80vh',
  },
}));

const tileData = [
  {
    img: 'https://source.unsplash.com/random',
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'Image',
    author: 'author',
    cols: 1,
  },
];

const Test: FC = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.container}>
      <Main>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} sm={7} className={classes.imageContainer}>
              <CardMedia image="https://source.unsplash.com/random" className={classes.image} />
            </Grid>
            <Grid item container xs={12} sm={5}>
              <Grid item xs={12}>
                ...
              </Grid>

              <Grid item xs={12} className={classes.comment}>
                ...
              </Grid>

              <Grid item xs={12}>
                ...
              </Grid>
            </Grid>
          </Grid>

          <Grid container>
            <CardActionArea>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" />

                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      Title
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      2020
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      Hell Year
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      Continue reading...
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </CardActionArea>
          </Grid>
        </Container>
      </Main>

      <div className={classes.root}>
        <GridList cellHeight={260} className={classes.gridList} cols={3} spacing={20}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Grid>
  );
};

export default Test;
