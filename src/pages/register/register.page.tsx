import React, { FC } from 'react';
import InfoIcon from '@material-ui/icons/Info';
import LockIcon from '@material-ui/icons/Lock';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import FormCarousel from 'components/form-carousel';
import RegisterInformationStage from 'components/form-carousel/register-information-stage';
import RegisterPasswordStage from 'components/form-carousel/register-password-stage';
import RegisterSubmit from 'components/form-carousel/register-submit';

import { StyledContainer as Container } from './register.styles';

/* -------------------------------------------------------------------------- */

const Register: FC = () => (
  <Container maxWidth="lg">
    <FormCarousel
      stages={[
        {
          form: RegisterInformationStage,
          icon: <InfoIcon />,
          label: 'Information',
        },
        {
          form: RegisterPasswordStage,
          icon: <LockIcon />,
          label: 'Password',
        },
        {
          form: RegisterSubmit,
          icon: <ExitToAppIcon />,
          label: 'Submit',
        },
      ]}
    />
  </Container>
);

export default Register;
