import React, { FC, useState } from 'react';
import { useTheme, useMediaQuery, Grid } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import { FormCarouselStage, RegisterProps } from 'types';
import StageButton from './stage-button';
import StageForm from './stage-form';

import { Header, Content } from './form-carousel.styles';

/* -------------------------------------------------------------------------- */

type FormCarouselState = {
  activeStage: number;
  stageOut: number;
  stageCompleted: number[];
};

type Props = {
  stages: FormCarouselStage[];
};

const FormCarousel: FC<Props> = ({ stages }) => {
  const [state, setState] = useState<FormCarouselState>({
    activeStage: 0,
    stageOut: -1,
    stageCompleted: [],
  });

  const [registerValues, setRegisterValues] = useState<RegisterProps>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const matchesXS = useMediaQuery(useTheme().breakpoints.down('xs'));

  /**
   * Handle toggle active stage and set stage completed
   */

  const toggleActiveStage = (index: number) =>
    setState((previous) => ({ ...previous, activeStage: index, stageOut: previous.activeStage }));

  const setStageCompleted = (index: number) => {
    setState((previous) => ({ ...previous, stageCompleted: [...previous.stageCompleted, index] }));
  };

  return (
    <Grid container direction="column">
      <Header item container justify="center" alignItems="center">
        {stages.map((item: FormCarouselStage, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <Grid item xs={12} sm={1} container justify="center">
                {!matchesXS ? <DoubleArrowIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
              </Grid>
            )}

            <Grid item xs={12} sm={3} container justify="center">
              <StageButton
                icon={item.icon}
                complete={state.stageCompleted.includes(index)}
                active={index === state.activeStage ? true : false}
                label={item.label}
                toggleStage={() => toggleActiveStage(index)}
              />
            </Grid>
          </React.Fragment>
        ))}
      </Header>

      <Content item container justify="center" alignItems="center">
        {stages.map((stage: FormCarouselStage, index: number) => (
          <StageForm
            key={index}
            hidden={state.activeStage !== index}
            form={stage.form}
            transition={
              state.activeStage === index
                ? state.activeStage > state.stageOut
                  ? `stage-in-right`
                  : `stage-in-left`
                : state.stageOut === index
                ? state.activeStage < state.stageOut
                  ? `stage-out-right`
                  : `stage-out-left`
                : `none`
            }
            toggleStage={() => toggleActiveStage(index + 1)}
            setCompleted={() => setStageCompleted(index)}
            registerValues={registerValues}
            setRegisterValues={setRegisterValues}
          />
        ))}
      </Content>
    </Grid>
  );
};

export default FormCarousel;
