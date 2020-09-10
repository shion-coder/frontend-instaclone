import styled from 'styled-components';
import { Paper, Grid } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

/* -------------------------------------------------------------------------- */

type PreviewProps = {
  filter?: string;
};

type LoadingProps = {
  loading?: number;
};

export const StyledPaper = styled(Paper)`
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem 0px ${({ theme }) => theme.colors.grey};
`;

export const Wrapper = styled(Grid)`
  padding: 1rem;
`;

export const Header = styled(Grid)`
  margin-bottom: 1rem;
`;

export const Back = styled(ArrowBackIosIcon)<LoadingProps>`
  cursor: ${({ loading }) => (loading === 1 ? 'auto' : 'pointer')};
  pointer-events: ${({ loading }) => (loading === 1 ? 'none' : 'auto')};
  color: ${({ theme }) => theme.material.palette.text.secondary};

  :hover {
    color: ${({ theme }) => theme.material.palette.text.primary};
  }
`;

export const Title = styled.span`
  font-weight: bold;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.material.palette.text.primary};
`;

export const Submit = styled(CameraAltIcon)<LoadingProps>`
  cursor: ${({ loading }) => (loading === 1 ? 'auto' : 'pointer')};
  pointer-events: ${({ loading }) => (loading === 1 ? 'none' : 'auto')};
  color: ${({ theme }) => theme.material.palette.text.secondary};

  :hover {
    color: ${({ theme }) => theme.material.palette.text.primary};
  }
`;

export const Body = styled(Grid)`
  padding: 1rem;
  border: ${({ theme }) => `1px solid ${theme.material.palette.divider}`};
  border-radius: 0.5rem;
  position: relative;
`;

export const Text = styled.textarea`
  height: 3rem;
  flex: 1;
  margin: 0 1.5rem;
  resize: none;
  border: none;
  outline: none;
  background: white;
  font-family: inherit;
  color: ${({ theme }) => theme.material.palette.text.primary};
  background: ${({ theme }) => theme.material.palette.background.paper};

  ::placeholder {
    letter-spacing: 2px;
    font-size: 0.8rem;
  }
`;

export const Preview = styled.img<PreviewProps>`
  width: 4rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 0.25rem;
  filter: ${({ filter }) => (filter ? filter : 'none')};
`;
