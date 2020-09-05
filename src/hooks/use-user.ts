import { useSelector } from 'react-redux';

import { RootStateProps } from 'store';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  bio?: string;
  website?: string;
  avatar?: string;
  confirmed?: boolean;
  token: string | null;
};

export const useUser = (): ReturnProps => {
  const user = useSelector((state: RootStateProps) => state.user);

  const {
    data: { firstName, lastName, username, email, bio, website, avatar, confirmed },
    token,
  } = user;

  return { firstName, lastName, username, email, bio, website, avatar, confirmed, token };
};
