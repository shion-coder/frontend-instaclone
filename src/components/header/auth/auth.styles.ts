import styled from 'styled-components';
import { fade } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Search = styled.div`
  position: relative;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => fade(theme.material.palette.common.white, 0.15)};
  margin-right: ${({ theme }) => theme.material.spacing(4) + 'px'};
  width: auto;

  :hover {
    background-color: ${({ theme }) => fade(theme.material.palette.common.white, 0.25)};
  }

  @media screen and (max-width: 599px) {
    display: none;
  }
`;

export const SearchIconContainer = styled.div`
  padding: ${({ theme }) => theme.material.spacing(0, 2)};
  position: absolute;
  height: 100%;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInputBase = styled(InputBase)`
  padding: ${({ theme }) => theme.material.spacing(0.5, 1, 0.5, 6)};
  width: 15rem;
  font-size: 0.8rem;

  @media screen and (max-width: 959px) {
    width: 12rem;
  }
`;
