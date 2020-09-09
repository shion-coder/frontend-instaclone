import { Dispatch, SetStateAction, ReactNode, ComponentType } from 'react';

import { RegisterProps } from 'types';

/* -------------------------------------------------------------------------- */

export type StageTransition = 'stage-in-left' | 'stage-out-left' | 'stage-in-right' | 'stage-out-right' | 'none';

export type FormCarouselContent = {
  setCompleted: () => void;
  toggleStage: () => void;
  registerValues: RegisterProps;
  setRegisterValues: Dispatch<SetStateAction<RegisterProps>>;
};

export type FormCarouselStage = {
  icon: ReactNode;
  label: string;
  form: ComponentType<FormCarouselContent>;
};
