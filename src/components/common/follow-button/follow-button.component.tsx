import React, { FC } from 'react';

import Loader from 'components/loader/layer-loader';

import { StyledButton as Button } from './follow-button.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  isFollowing: boolean;
  isLoading: boolean;
  handleFollow: () => void;
};

const FollowButton: FC<Props> = ({ isFollowing, isLoading, handleFollow }) => {
  return isFollowing ? (
    <Button variant="contained" color="secondary" size="small" disabled={isLoading} onClick={handleFollow}>
      {isLoading && <Loader color="dark" width="25px" height="25px" radius="4px" />}
      Following
    </Button>
  ) : (
    <Button variant="contained" color="primary" size="small" disabled={isLoading} onClick={handleFollow}>
      {isLoading && <Loader color="dark" width="25px" height="25px" radius="4px" />}
      Follow
    </Button>
  );
};

export default FollowButton;
