import { useQuery } from 'react-query';

import { Query } from 'types';
import { useUser } from 'hooks';
import { requestGetMe } from 'services';

/* -------------------------------------------------------------------------- */

export const useGetMe = (): void => {
  const { token } = useUser();

  useQuery(Query.ME, () => requestGetMe(), {
    enabled: token,
  });
};
