import { useHistory } from 'react-router-dom';

import { Path } from 'types';
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

  const goHome = () => history.push(Path.HOME);

  const goRegister = () => history.push(Path.REGISTER);

  const goLogin = () => history.push(Path.LOGIN);

  const goExplore = () => history.push(Path.EXPLORE);

  const goUser = () => history.push(`/${username}`);

  const goProfile = () => history.push(`/${currentUsername}`);

  const goSettings = () => history.push(Path.SETTINGS);

  const goEdit = () => history.push(Path.SETTING_EDIT);

  const goPathname = () => history.push(pathname || Path.HOME);

  return { goHome, goRegister, goLogin, goExplore, goUser, goProfile, goSettings, goEdit, goPathname };
};
