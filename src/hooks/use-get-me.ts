import { useQuery } from 'react-query';

import { QUERY } from 'types';
import { useUser } from 'hooks';
import { requestGetMe } from 'services';

/* -------------------------------------------------------------------------- */

export const useGetMe = (): void => {
  const { token } = useUser();

  useQuery(QUERY.ME, () => requestGetMe(), {
    enabled: token,
  });
};
