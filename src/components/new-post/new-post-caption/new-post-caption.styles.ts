import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

/* -------------------------------------------------------------------------- */

type PreviewProps = {
  filter?: string;
};

type LoadingProps = {
  loading?: 'yes' | 'no';
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 1rem;
  border-radius: 4px;
  max-width: 80vw;
  max-height: 80vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Back = styled(ArrowBackIosIcon)<LoadingProps>`
  cursor: ${({ loading }) => (loading === 'yes' ? 'auto' : 'pointer')};
  pointer-events: ${({ loading }) => (loading === 'yes' ? 'none' : 'auto')};
`;

export const Title = styled.span`
  font-weight: bold;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Submit = styled(CameraAltIcon)<LoadingProps>`
  cursor: ${({ loading }) => (loading === 'yes' ? 'auto' : 'pointer')};
  pointer-events: ${({ loading }) => (loading === 'yes' ? 'none' : 'auto')};
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: ${({ theme }) => `1px solid ${theme.colors.solitude}`};
  border-radius: 4px;
  position: relative;
`;

export const Layer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.lightLayer};
  z-index: 1;
`;

export const StyledAvatar = styled(Avatar)`
  margin-right: 1rem;
`;

export const Text = styled.textarea`
  height: 3rem;
  width: 30vw;
  margin-right: 1rem;
  resize: none;
  border: none;
  outline: none;
  background: white;
  font-family: inherit;
`;

export const Preview = styled.img<PreviewProps>`
  width: 4rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 2px;
  filter: ${({ filter }) => (filter ? filter : 'none')};
`;
