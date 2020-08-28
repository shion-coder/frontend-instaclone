import styled from 'styled-components';
import Lottie from 'react-lottie-player';

/* -------------------------------------------------------------------------- */

type StyledLottieProps = {
  width?: string;
  height?: string;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledLottie = styled(Lottie)<StyledLottieProps>`
  width: ${({ width }) => (width ? width : '200px')};
  height: ${({ height }) => (height ? height : '200px')};
`;
