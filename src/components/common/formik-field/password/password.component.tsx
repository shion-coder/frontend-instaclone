import React, { FC, ChangeEvent, useState } from 'react';
import { useFormikContext } from 'formik';
import {
  OutlinedInputProps,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { camelToTitle } from 'utils';

import { StyledFormControl as FormControl } from './password.styles';

/* -------------------------------------------------------------------------- */

type Props = OutlinedInputProps & {
  name: string;
};

type FormikProps = {
  [name: string]: string;
};

const Password: FC<Props> = ({ name }) => {
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Set formik function into field
   */

  const { values, setFieldValue, touched, setFieldTouched, errors, isSubmitting } = useFormikContext<FormikProps>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setFieldValue(name, e.target.value);

  const handleBlue = () => setFieldTouched(name);

  const handleClickShowPassword = () => setShowPassword((previous) => !previous);

  /**
   * Change name from camel to capitalize to display as label
   */

  const label = camelToTitle(name);

  return (
    <FormControl variant="outlined" margin="normal" fullWidth required>
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>

      <OutlinedInput
        type={showPassword ? 'text' : 'password'}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlue}
        error={touched[name] && !!errors[name]}
        label={label}
        disabled={isSubmitting}
        id={name}
        autoComplete={name}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />

      <FormHelperText error>{touched[name] && !!errors[name] && errors[name]}</FormHelperText>
    </FormControl>
  );
};

export default Password;
