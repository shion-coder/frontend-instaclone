import { Dispatch, SetStateAction } from 'react';
import { MutateFunction, useMutation } from 'react-query';
import { FormikHelpers } from 'formik';
import { AxiosError } from 'axios';

import { RegisterInformationStageProps, RegisterProps } from 'types';
import { requestRegisterInformationStage } from 'services';

/* -------------------------------------------------------------------------- */

type Variables = {
  values: RegisterInformationStageProps;
  formik: FormikHelpers<RegisterInformationStageProps>;
  toggleStage: () => void;
  setCompleted: () => void;
  setRegisterValues: Dispatch<SetStateAction<RegisterProps>>;
};

type ReturnProps = {
  registerInformationStage: MutateFunction<null, AxiosError, Variables>;
  isLoading: boolean;
};

export const useRegisterInformationStage = (): ReturnProps => {
  /**
   * Get register information in stage period function and handle it on error or on success
   */

  const [registerInformationStage, { isLoading }] = useMutation<null, AxiosError, Variables>(
    (variables) => requestRegisterInformationStage(variables.values),
    {
      onError: (error, { formik }) => {
        /**
         * Set formik form errors when error exist
         */

        formik.setErrors(error.response?.data.errors);
        formik.setSubmitting(false);
      },
      onSuccess: (_data, { values, formik, toggleStage, setCompleted, setRegisterValues }) => {
        /**
         * Toggle stage register and set current stage to completed then update information of user register back into register values
         */

        toggleStage();
        setCompleted();
        setRegisterValues((previous) => ({ ...previous, ...values }));
        formik.setSubmitting(false);
      },
    },
  );

  return { registerInformationStage, isLoading };
};
