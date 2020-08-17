import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import NextIcon from '@material-ui/icons/NavigateNext';

/* -------------------------------------------------------------------------- */

type PreviewProps = {
  filter?: string;
};

type ImageProps = {
  filter?: string;
  selected?: boolean;
};

type NameProps = {
  selected?: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 1rem;
  border-radius: 4px;
  max-width: 80vw;
  max-height: 80vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
`;

export const Close = styled(CloseIcon)`
  cursor: pointer;
`;

export const Next = styled(NextIcon)`
  cursor: pointer;
`;

export const Title = styled.span`
  font-weight: bold;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.material.palette.primary.main};
`;

export const Preview = styled.img<PreviewProps>`
  object-fit: contain;
  min-width: 40vw;
  max-width: 80vw;
  max-height: calc(80vh - 7.6rem - 44px);
  filter: ${({ filter }) => (filter ? filter : 'none')};
`;

export const FilterList = styled.div`
  margin-top: 1rem;
  display: flex;
  overflow-x: auto;

  /**
   * Center by margin instead of justify content to prevent cutoff with overflow
   */

  ::before,
  ::after {
    content: '';
  }
  ::before {
    margin-left: auto;
  }
  ::after {
    margin-right: auto;
  }

  div:last-of-type {
    margin-right: 0;
  }
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  cursor: pointer;
`;

export const Name = styled.span<NameProps>`
  text-align: center;
  font-size: 0.6rem;
  color: ${({ theme, selected }) => (selected ? theme.colors.dark : theme.colors.medium)};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
`;

export const Image = styled.img<ImageProps>`
  height: 4rem;
  filter: ${({ filter }) => (filter ? filter : 'none')};
  border: ${({ theme, selected }) => (selected ? `1px solid ${theme.material.palette.primary.main}` : '0px')};
  border-radius: 2px;
  padding: 2px;
`;
