import styled from 'styled-components';
import Lottie from 'react-lottie-player';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
`;

export const StyledLottie = styled(Lottie)`
  width: 50%;
  height: 50%;
`;
