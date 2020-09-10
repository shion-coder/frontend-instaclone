import styled from 'styled-components';
import { Paper, Grid, GridList, GridListTile, GridListTileBar } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

type PreviewProps = {
  filter?: string;
};

type FilterProps = {
  filter?: string;
};

type StyledGridListTileBarProps = {
  selected?: boolean;
};

export const StyledPaper = styled(Paper)`
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem 0px ${({ theme }) => theme.colors.grey};
`;

export const Wrapper = styled(Grid)`
  padding: 1rem;
  max-height: 80vh;
`;

export const Header = styled(Grid)`
  margin-bottom: 1.5rem;
`;

export const Button = styled.span`
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.material.palette.text.secondary};

  :hover {
    color: ${({ theme }) => theme.material.palette.text.primary};
  }
`;

export const Preview = styled.img<PreviewProps>`
  object-fit: contain;
  max-width: 100%;
  max-height: 40vh;
  filter: ${({ filter }) => (filter ? filter : 'none')};
`;

export const FilterList = styled(Grid)`
  margin-top: 1rem;
`;

export const StyledGridList = styled(GridList)`
  flex-wrap: nowrap;
  transform: translateZ(0);
`;

export const StyledGridListTile = styled(GridListTile)`
  max-height: 15vh;
  cursor: pointer;
`;

export const StyledGridListTileBar = styled(GridListTileBar)<StyledGridListTileBarProps>`
  max-height: 1.8rem;
  background: ${({ theme, selected }) => (selected ? theme.material.palette.common.black : theme.colors.dark.main)};

  .MuiGridListTileBar-title {
    font-size: 0.7rem;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.material.palette.text.primary};
  }
`;

export const Filter = styled.img<FilterProps>`
  top: 50%;
  width: 100%;
  position: relative;
  transform: translateY(-50%);
  filter: ${({ filter }) => (filter ? filter : 'none')};
`;
