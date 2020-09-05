import { useState } from 'react';
import { MutateFunction, useMutation } from 'react-query';

import { ReturnResendEmailProps } from 'types';
import { requestResendEmail } from 'services';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  resendEmail: MutateFunction<ReturnResendEmailProps, unknown, undefined, unknown>;
  isLoading: boolean;
  isSuccess: boolean;
  message: string | null;
};

export const useResendEmail = (): ReturnProps => {
  const [message, setMessage] = useState<string | null>(null);

  /**
   * Get resend email function with isLoading and isSuccess
   */

  const [resendEmail, { isLoading, isSuccess }] = useMutation<ReturnResendEmailProps>(() => requestResendEmail(), {
    onSuccess: (data) => {
      setMessage(data.message);
    },
  });

  return { resendEmail, isLoading, isSuccess, message };
};
