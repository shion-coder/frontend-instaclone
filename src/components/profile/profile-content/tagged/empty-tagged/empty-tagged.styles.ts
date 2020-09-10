import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';

/* -------------------------------------------------------------------------- */

type TextProps = {
  bold?: boolean;
};

export const Wrapper = styled(Grid)`
  padding: 3rem;
`;

export const Icon = styled(AccountBoxOutlinedIcon)`
  font-size: 3rem;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Text = styled.p<TextProps>`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;
