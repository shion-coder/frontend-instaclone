import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* -------------------------------------------------------------------------- */

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    border-radius: 4px;
  }

  .Toastify__toast-body {
    padding: ${({ theme }) => theme.material.spacing(0, 2)};
    letter-spacing: 1px;
  }

  .Toastify__toast--success {
    background: ${({ theme }) => theme.material.palette.primary.main};
  }

  .Toastify__toast--error {
    background: ${({ theme }) => theme.material.palette.secondary.main};
  }
`;

export const StyledModal = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1111;
  background-color: rgba(0, 0, 0, 0.69);
`;
