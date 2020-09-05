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
  /**
   * Get isSubmitting values from useFormikContext to disable button when submit or loading
   */

  const { isSubmitting } = useFormikContext();

  const sending = isLoading ? isLoading : isSubmitting;

  return (
    <Button variant="contained" color="primary" disabled={sending} {...otherProps}>
      {!sending ? children : <Lottie play loop animationData={loading} />}
    </Button>
  );
};

export default FormikButton;
