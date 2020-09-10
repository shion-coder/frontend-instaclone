import React, { FC, HTMLAttributes } from 'react';

import { Span } from './text.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  text: string;
  s?: number;
  w?: number;
  ls?: number;
  m?: number;
  ml?: number;
  mx?: number;
  my?: number;
  cs?: number;
  c?: 'primary' | 'secondary';
} & HTMLAttributes<HTMLElement>;

const Text: FC<Props> = ({ text, ...otherProps }) => <Span {...otherProps}>{text}</Span>;

export default Text;
