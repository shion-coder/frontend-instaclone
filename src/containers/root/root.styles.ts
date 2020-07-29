import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* -------------------------------------------------------------------------- */

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    border-radius: 5px;
  }

  .Toastify__toast-body {
    padding-left: 20px;
    letter-spacing: 1px;
  }
`;
