import { useDispatch } from 'react-redux';

import { useCustomHistory } from 'hooks';
import { removeUser } from 'store';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  logout: () => void;
};

export const useLogout = (): ReturnProps => {
  const dispatch = useDispatch();

  const { goLogin } = useCustomHistory();

  const logout = () => {
    /**
     * Remove user in redux store and switch to login page
     */

    dispatch(removeUser());

    goLogin();
  };

  return { logout };
};
