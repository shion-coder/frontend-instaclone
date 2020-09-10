import React, { FC, ReactNode } from 'react';
import { useTheme, useMediaQuery } from '@material-ui/core';

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
  const matchesXS = useMediaQuery(useTheme().breakpoints.down('xs'));

  return (
    <Button
      size={!matchesXS ? 'large' : 'medium'}
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
