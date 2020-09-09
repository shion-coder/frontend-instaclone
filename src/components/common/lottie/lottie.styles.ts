import styled from 'styled-components';
import Lottie from 'react-lottie-player';

/* -------------------------------------------------------------------------- */

type StyledLottieProps = {
  width?: string;
  height?: string;
};

export const StyledLottie = styled(Lottie)<StyledLottieProps>`
  width: ${({ width }) => (width ? width : null)};
  height: ${({ height }) => (height ? height : null)};
`;
