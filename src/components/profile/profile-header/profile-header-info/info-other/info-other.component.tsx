import React, { FC } from 'react';

import { ReturnGetUserProps } from 'types';

import { Container, Bio, Website } from './info-other.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  profile: ReturnGetUserProps;
};

const InfoOther: FC<Props> = ({
  profile: {
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
