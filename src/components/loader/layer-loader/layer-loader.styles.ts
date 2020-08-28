import styled from 'styled-components';
import Lottie from 'react-lottie-player';

/* -------------------------------------------------------------------------- */

type ContainerProps = {
  radius?: string;
  color: 'dark' | 'light';
};

type StyledLottieProps = {
  width?: string;
  height?: string;
};

export const Container = styled.div<ContainerProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme, color }) => (color === 'dark' ? theme.colors.darkLayer : theme.colors.lightLayer)};
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ radius }) => (radius ? radius : 0)};
`;

export const StyledLottie = styled(Lottie)<StyledLottieProps>`
  width: ${({ width }) => (width ? width : '44px')};
  height: ${({ height }) => (height ? height : '44px')};
`;
