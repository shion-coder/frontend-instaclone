import React, { FC, Dispatch, SetStateAction } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Grid } from '@material-ui/core';

import { RegisterProps, RegisterInformationStageProps } from 'types';
import { useRegisterInformationStage } from 'hooks';
import { validateRegisterInformation } from 'utils';
import Field from 'components/common/formik-field';

import {
  StyledTypography as Typography,
  StyledForm as Form,
  StyledButton as Button,
} from './register-information-stage.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  toggleStage: () => void;
  setCompleted: () => void;
  setRegisterValues: Dispatch<SetStateAction<RegisterProps>>;
};

const RegisterInformationStage: FC<Props> = ({ toggleStage, setCompleted, setRegisterValues }) => {
  const initialValues: RegisterInformationStageProps = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
  };

  const { registerInformationStage } = useRegisterInformationStage();

  /**
   * Handle submit to validate register information
   */

  const handleSubmit = (
    values: RegisterInformationStageProps,
    formik: FormikHelpers<RegisterInformationStageProps>,
  ) => {
    registerInformationStage({ values, formik, toggleStage, setCompleted, setRegisterValues });
  };

  return (
    <Grid container justify="center">
      <Grid item sm={12}>
        <Typography variant="h6" color="textSecondary">
          Please provide your information
        </Typography>
      </Grid>

      <Grid item sm={12} md={6}>
        <Formik initialValues={initialValues} validationSchema={validateRegisterInformation} onSubmit={handleSubmit}>
          <Form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Field name="firstName" fullWidth required />
              </Grid>

              <Grid item xs={6}>
                <Field name="lastName" fullWidth />
              </Grid>
            </Grid>

            <Field name="username" fullWidth required />

            <Field name="email" fullWidth required />

            <Button fullWidth>Continue</Button>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  );
};

export default RegisterInformationStage;
