import styled from 'styled-components';

import Button from 'components/common/button';

/* -------------------------------------------------------------------------- */

export const StyledButton = styled(Button)`
  @media screen and (max-width: 599px) {
    margin: ${({ theme }) => theme.material.spacing(1, 0)};
  }
`;
