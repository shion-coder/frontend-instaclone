import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

type SpanProps = {
  s?: number;
  w?: number;
  ls?: number;
  m?: number;
  ml?: number;
  mr?: number;
  mx?: number;
  my?: number;
  cs?: number;
  c?: 'primary' | 'secondary';
};

export const Span = styled.span<SpanProps>`
  font-size: ${({ s }) => (s ? `${s}rem` : 'inherit')};
  font-weight: ${({ w }) => (w === 1 ? 'bold' : 'normal')};
  letter-spacing: ${({ ls }) => (ls ? `${ls}px` : '0')};
  margin: ${({ m }) => (m ? `${m}rem` : '0')};
  margin-left: ${({ ml, mx }) => (ml ? `${ml}rem` : mx ? `${mx}rem` : 'initial')};
  margin-right: ${({ mr, mx }) => (mr ? `${mr}rem` : mx ? `${mx}rem` : 'initial')};
  margin-top: ${({ my }) => (my ? `${my}rem` : 'initial')};
  margin-bottom: ${({ my }) => (my ? `${my}rem` : 'initial')};
  cursor: ${({ cs }) => (cs === 1 ? 'pointer' : 'auto')};
  color: ${({ theme, c }) => (c ? theme.material.palette.text[c] : 'inherit')};
`;
