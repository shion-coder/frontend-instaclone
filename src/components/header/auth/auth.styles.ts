import styled from 'styled-components';
import { fade } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

type SearchProps = {
  search: string;
};

export const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Search = styled.div<SearchProps>`
  position: relative;
  border-radius: ${({ search }) => (search ? '0.5rem 0.5rem 0 0' : '0.5rem')};
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
  font-size: 0.8rem;
  transition: ${({ theme }) => theme.material.transitions.create('width')};

  .MuiInputBase-input {
    transition: ${({ theme }) => theme.material.transitions.create('width')};
    width: 6rem;

    :focus {
      width: 12rem;
    }
  }
`;
