import React, { FC, Dispatch, SetStateAction, ComponentType } from 'react';

import { StageTransition, FormCarouselContent, RegisterProps } from 'types';

import { Wrapper, Stage } from './stage-form.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  hidden: boolean;
  form: ComponentType<FormCarouselContent>;
  transition: StageTransition;
  toggleStage: () => void;
  setCompleted: () => void;
  registerValues: RegisterProps;
  setRegisterValues: Dispatch<SetStateAction<RegisterProps>>;
};

const StageForm: FC<Props> = ({
  hidden,
  form: Form,
  transition,
  toggleStage,
  setCompleted,
  registerValues,
  setRegisterValues,
}) => (
  <Wrapper display={hidden ? 1 : 0}>
    <Stage transition={transition}>
      <Form
        toggleStage={toggleStage}
        setCompleted={setCompleted}
        registerValues={registerValues}
        setRegisterValues={setRegisterValues}
      />
    </Stage>
  </Wrapper>
);

export default StageForm;
