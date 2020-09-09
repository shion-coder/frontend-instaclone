import styled from 'styled-components';

import { StageTransition } from 'types';

/* -------------------------------------------------------------------------- */

type WrapperProps = {
  display: number;
};

type StageProps = {
  transition: StageTransition;
};

export const Wrapper = styled.div<WrapperProps>`
  display: ${({ display }) => (display === 1 ? 'none' : 'block')};
  width: 100%;
`;

export const Stage = styled.div<StageProps>`
  @keyframes stage-in-left {
    from {
      left: -200%;
    }
    to {
      left: 0px;
    }
  }

  @keyframes stage-in-right {
    from {
      left: 200%;
    }
    to {
      left: 0px;
    }
  }

  @keyframes stage-out-left {
    from {
      left: 0px;
    }
    to {
      left: -200%;
    }
  }

  @keyframes stage-out-right {
    from {
      left: 0px;
    }
    to {
      left: 200%;
    }
  }

  /* position: absolute; */
  width: 100%;
  height: 100%;
  left: -200%;
  animation: ${({ transition }) => (transition ? `${transition} 0.75s ease-out` : '')};
  animation-fill-mode: forwards;
`;
