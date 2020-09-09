import React, { FC, ReactNode } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { MEDIA_QUERY } from 'types';

import { StyledButton as Button } from './stage-styles';

/* -------------------------------------------------------------------------- */

type Props = {
  icon: ReactNode;
  complete: boolean;
  active: boolean;
  label: string;
  toggleStage: () => void;
};

const StageButton: FC<Props> = ({ icon, complete, active, label, toggleStage }) => {
  const matches = useMediaQuery(MEDIA_QUERY.MAX_XS);

  return (
    <Button
      size={!matches ? 'large' : 'medium'}
      startIcon={icon}
      color={complete ? 'primary' : 'default'}
      disabled={!active && !complete}
      onClick={toggleStage}
    >
      {label}
    </Button>
  );
};

export default StageButton;
