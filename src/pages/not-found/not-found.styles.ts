import styled from 'styled-components';
import Lottie from 'react-lottie-player';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const StyledLottie = styled(Lottie)`
  width: 40%;
  height: 40%;
`;
