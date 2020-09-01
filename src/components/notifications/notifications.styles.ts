import styled from 'styled-components';
import Badge from '@material-ui/core/Badge';

/* -------------------------------------------------------------------------- */

export const Container = styled(Badge)`
  margin-right: 1rem;
  position: relative;
  height: 100%;

  .MuiBadge-anchorOriginTopRightRectangle {
    top: 4px;
    right: 4px;
  }
`;
