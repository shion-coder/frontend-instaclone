import React, { FC, ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { Grid, CardActionArea, CardContent, Typography, Box, Checkbox } from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import { RegisterProps, TOAST } from 'types';
import { useRegister } from 'hooks';
import { errorMessage } from 'utils';
import Button from 'components/common/button';
import cat from 'assets/images/cat.jpeg';

import {
  StyledCard as Card,
  StyledCardMedia as CardMedia,
  StyledFormControlLabel as FormControlLabel,
} from './register-submit.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  registerValues: RegisterProps;
};

const RegisterSubmit: FC<Props> = ({ registerValues }) => {
  const [checked, setChecked] = useState(false);

  const { register, isLoading } = useRegister();

  /**
   * Handle checkbox and submit, user must tick in the checkbox to register
   */

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);

  const handleSubmit = () => {
    if (!checked) {
      return toast.error(errorMessage.mustAcceptTerm, { toastId: TOAST.TERM_ERROR });
    }

    register(registerValues);
  };

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} sm={8}>
        <Card>
          <CardActionArea>
            <CardMedia image={cat} />

            <CardContent>
              <Typography component="div" color="textSecondary">
                <Box textAlign="center">One day, cats will conquer the world</Box>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={12} container justify="center">
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={handleChange} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          }
          label="I agree, ameow"
        />
      </Grid>

      <Grid item xs={12} container justify="center">
        <Button isLoading={isLoading} onClick={handleSubmit}>
          Register
        </Button>
      </Grid>
    </Grid>
  );
};

export default RegisterSubmit;
