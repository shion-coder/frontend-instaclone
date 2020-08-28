import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

type PreviewProps = {
  filter?: string;
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
  margin-bottom: 1rem;
`;

export const Title = styled.span`
  font-weight: bold;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Button = styled.span`
  font-weight: bold;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.material.palette.primary.main};
  cursor: pointer;
`;

export const Preview = styled.img<PreviewProps>`
  object-fit: contain;
  min-width: 40vw;
  max-width: 80vw;
  max-height: calc(80vh - 8.6rem - 24px);
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
