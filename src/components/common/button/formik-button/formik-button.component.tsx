import React, { FC } from 'react';
import { useFormikContext } from 'formik';
import { ButtonProps } from '@material-ui/core';

import Button from 'components/common/button';

/* -------------------------------------------------------------------------- */

type Props = ButtonProps & {
  children: string;
  layer?: 'dark' | 'light';
};

const FormikButton: FC<Props> = ({ children, layer, ...otherProps }) => {
  /**
   * Get isSubmitting values from useFormikContext to disable button when submit or loading
   */

  const { isSubmitting } = useFormikContext();

  return (
    <Button type="submit" layer={layer} isLoading={isSubmitting} {...otherProps}>
      {children}
    </Button>
  );
};

export default FormikButton;
