import styled from 'styled-components';
import { Avatar, Grid } from '@material-ui/core';
import Lottie from 'react-lottie-player';

/* -------------------------------------------------------------------------- */

type StyledAvatarProps = {
  role: string;
};

export const Container = styled(Grid)``;

export const Label = styled.label`
  margin-right: 15px;
  position: relative;
`;

export const Layer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Input = styled.input`
  display: none;
`;

export const StyledAvatar = styled(Avatar)<StyledAvatarProps>`
  width: 8rem;
  height: 8rem;
  cursor: ${({ role }) => (role === 'me' ? 'pointer' : 'auto')};
`;

export const StyledLottie = styled(Lottie)`
  width: 40px;
  height: 40px;
`;
