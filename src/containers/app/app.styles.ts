import styled from 'styled-components';
import Particles from 'react-particles-js';

/* -------------------------------------------------------------------------- */

export const StyledParticles = styled(Particles).attrs(({ theme }) => ({
  params: {
    particles: {
      number: {
        value: 40,
      },
      color: {
        value: theme.material.palette.text.secondary,
      },
      links: {
        color: theme.material.palette.text.secondary,
      },
      size: {
        value: 2,
      },
    },
  },
}))`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.material.spacing(8, 0, 6)};
`;
