import styled from 'styled-components';
import Lottie from 'react-lottie-player';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export const StyledLottie = styled(Lottie)`
  width: 44vw;
  height: 44vh;
`;
