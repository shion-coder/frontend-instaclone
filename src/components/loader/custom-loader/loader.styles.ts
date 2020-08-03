import styled, { keyframes } from 'styled-components';

/* -------------------------------------------------------------------------- */

type BounceProps = {
  color?: string;
  delay?: string;
};

const bounce = keyframes`
  0%,

  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }

  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Spinner = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  margin: 20px auto 10px auto;
`;

export const Bounce = styled.div<BounceProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme, color }) => color || theme.material.palette.info.light};
  border-radius: 50%;
  opacity: 0.6;
  animation: ${bounce} 2s ${({ theme, delay }) => delay || theme.animation.delay} infinite ease-in-out;
`;
