import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import { Button, ButtonProps } from '@material-ui/core';

import loading from 'assets/animations/loading.json';

import { StyledLottie as Lottie } from './formik-button.styles';

/* -------------------------------------------------------------------------- */

type Props = ButtonProps & {
  children: string;
};

const FormikButton: FC<Props> = ({ children, ...otherProps }) => {
  const { isSubmitting } = useFormikContext();

  return (
    <Button disabled={isSubmitting} {...otherProps}>
      {!isSubmitting ? children : <Lottie play loop animationData={loading} />}
    </Button>
  );
};

FormikButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default FormikButton;
