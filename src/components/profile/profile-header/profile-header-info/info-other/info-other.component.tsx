import React, { FC } from 'react';

import { GetUserProps } from 'types';

import { Container, Bio, Website } from './info-other.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  data: GetUserProps;
};

const InfoOther: FC<Props> = ({
  data: {
    user: { bio, website },
  },
}) => (
  <Container>
    <Bio>{bio}</Bio>

    <Website href={website} target="blank">
      {website}
    </Website>
  </Container>
);

export default InfoOther;
