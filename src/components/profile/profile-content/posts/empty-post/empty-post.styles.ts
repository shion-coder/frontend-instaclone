import styled from 'styled-components';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  grid-column: span 3;
`;

export const Icon = styled(PhotoCameraOutlinedIcon)`
  font-size: 3rem;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Text = styled.p``;
