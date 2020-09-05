import React, { FC, ChangeEvent } from 'react';
import { useFormikContext } from 'formik';
import { TextField as Field, TextFieldProps } from '@material-ui/core';

import { camelToTitle } from 'utils';

/* -------------------------------------------------------------------------- */

type Props = TextFieldProps & {
  name: string;
};

type FormikProps = {
  [name: string]: string;
};

const FormikField: FC<Props> = ({ name, ...otherProps }) => {
  /**
   * Change name from camel to capitalize to display as label
   */

  const label = camelToTitle(name);

  /**
   * Set formik function in to field
   */

  const { values, setFieldValue, touched, setFieldTouched, errors, isSubmitting } = useFormikContext<FormikProps>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setFieldValue(name, e.target.value);

  const handleBlue = () => setFieldTouched(name);

  return (
    <Field
      value={values[name]}
      onChange={handleChange}
      onBlur={handleBlue}
      error={touched[name] && !!errors[name]}
      helperText={touched[name] && !!errors[name] && errors[name]}
      disabled={isSubmitting}
      id={name}
      autoComplete={name}
      label={label}
      variant="outlined"
      margin="normal"
      {...otherProps}
    />
  );
};

export default FormikField;
