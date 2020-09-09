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
