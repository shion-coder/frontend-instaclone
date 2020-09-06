import React, { FC } from 'react';
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Link,
  Grid,
  CardActionArea,
  CardContent,
  Card,
  CardMedia,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Logo } from 'assets/images/logo-camera.svg';

import { Main, Footer } from './test.styles';

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
}));

const Test: FC = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.container}>
      <AppBar position="relative" color="transparent">
        <Toolbar>
          <Container maxWidth="lg">
            <Logo className={classes.logo} />
          </Container>
        </Toolbar>
      </AppBar>

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

      <Footer>
        <Typography variant="body2" color="textSecondary" align="center">
          <Link color="inherit" href="https://material-ui.com/">
            Shion
          </Link>

          {' | '}

          {new Date().getFullYear()}
        </Typography>
      </Footer>
    </Grid>
  );
};

export default Test;
