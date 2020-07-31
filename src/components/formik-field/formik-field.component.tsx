import React, { FC, ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import { TextField as Field, TextFieldProps } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

type Props = TextFieldProps & {
  name: string;
};

type FormikProps = {
  [name: string]: string;
};

const FormikField: FC<Props> = ({ name, ...otherProps }) => {
  const { values, setFieldValue, setFieldTouched, touched, errors, isSubmitting } = useFormikContext<FormikProps>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFieldValue(name, e.target.value);
  };

  const handleBlue = (): void => {
    setFieldTouched(name);
  };

  return (
    <Field
      value={values[name]}
      onChange={handleChange}
      onBlur={handleBlue}
      error={touched[name] && !!errors[name]}
      helperText={touched[name] && !!errors[name] && errors[name]}
      disabled={isSubmitting}
      {...otherProps}
    />
  );
};

FormikField.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormikField;
