import styled from 'styled-components';
import { TextField } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.material.palette.text.secondary};
  }

  .MuiOutlinedInput-input {
    color: ${({ theme }) => theme.material.palette.text.secondary};
  }

  .MuiInputLabel-outlined {
    color: ${({ theme }) => theme.material.palette.text.secondary};
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.material.palette.text.secondary};
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input {
    color: ${({ theme }) => theme.material.palette.text.secondary};
  }

  .MuiInputLabel-outlined.Mui-focused {
    color: ${({ theme }) => theme.material.palette.text.secondary};
  }

  :hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.material.palette.text.secondary};
  }

  :hover .MuiOutlinedInput-input {
    color: ${({ theme }) => theme.material.palette.text.secondary};
  }

  :hover .MuiInputLabel-outlined {
    color: ${({ theme }) => theme.material.palette.text.secondary};
  }
`;
