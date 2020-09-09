import { useHistory } from 'react-router-dom';

import { PATH } from 'types';
import { useUser } from 'hooks';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  goHome: () => void;
  goRegister: () => void;
  goLogin: () => void;
  goExplore: () => void;
  goUser: () => void;
  goProfile: () => void;
  goSettings: () => void;
  goEdit: () => void;
  goPathname: () => void;
};

export const useCustomHistory = (username?: string | null, pathname?: string): ReturnProps => {
  const history = useHistory();

  const { username: currentUsername } = useUser();

  const goHome = () => history.push(PATH.HOME);

  const goRegister = () => history.push(PATH.REGISTER);

  const goLogin = () => history.push(PATH.LOGIN);

  const goExplore = () => history.push(PATH.EXPLORE);

  const goUser = () => history.push(`/${username}`);

  const goProfile = () => history.push(`/${currentUsername}`);

  const goSettings = () => history.push(PATH.SETTINGS);

  const goEdit = () => history.push(PATH.SETTING_EDIT);

  const goPathname = () => history.push(pathname || PATH.HOME);

  return { goHome, goRegister, goLogin, goExplore, goUser, goProfile, goSettings, goEdit, goPathname };
};
