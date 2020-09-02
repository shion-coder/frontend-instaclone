import React, { FC } from 'react';
import { useFormikContext } from 'formik';
import { Button, ButtonProps } from '@material-ui/core';

import loading from 'assets/animations/loading-dark.json';

import { StyledLottie as Lottie } from './formik-button.styles';

/* -------------------------------------------------------------------------- */

type Props = ButtonProps & {
  isLoading?: boolean;
  children: string;
};

const FormikButton: FC<Props> = ({ isLoading, children, ...otherProps }) => {
  const { isSubmitting } = useFormikContext();

  return (
    <Button variant="contained" color="primary" disabled={isLoading ? isLoading : isSubmitting} {...otherProps}>
      {!isSubmitting ? children : <Lottie play loop animationData={loading} />}
    </Button>
  );
};

export default FormikButton;
