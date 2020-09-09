import React, { FC, Dispatch, SetStateAction } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Grid } from '@material-ui/core';

import { RegisterProps, RegisterPasswordStageProps } from 'types';
import { validateRegisterPassword } from 'utils';
import Field from 'components/common/formik-field';

import {
  StyledTypography as Typography,
  StyledForm as Form,
  StyledButton as Button,
} from './register-password-stage.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  toggleStage: () => void;
  setCompleted: () => void;
  setRegisterValues: Dispatch<SetStateAction<RegisterProps>>;
};

const RegisterPasswordStage: FC<Props> = ({ toggleStage, setCompleted, setRegisterValues }) => {
  const initialValues: RegisterPasswordStageProps = {
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (values: RegisterPasswordStageProps, formik: FormikHelpers<RegisterPasswordStageProps>) => {
    toggleStage();
    setCompleted();
    setRegisterValues((previous) => ({ ...previous, ...values }));
    formik.setSubmitting(false);
  };

  return (
    <Grid container justify="center">
      <Grid item sm={12}>
        <Typography variant="h6" color="textSecondary">
          Please provide your password
        </Typography>
      </Grid>

      <Grid item sm={12} md={6}>
        <Formik initialValues={initialValues} validationSchema={validateRegisterPassword} onSubmit={handleSubmit}>
          <Form noValidate>
            <Field name="password" type="password" fullWidth required />

            <Field name="confirmPassword" type="password" fullWidth required />

            <Button fullWidth>Continue</Button>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  );
};

export default RegisterPasswordStage;
