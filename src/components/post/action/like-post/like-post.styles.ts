import styled from 'styled-components';
import FavoriteIcon from '@material-ui/icons/Favorite';

/* -------------------------------------------------------------------------- */

export const StyledFavoriteIcon = styled(FavoriteIcon)`
  color: ${({ theme }) => theme.material.palette.secondary.light};
`;
