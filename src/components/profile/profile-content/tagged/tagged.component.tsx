import React, { FC } from 'react';

import { ReturnGetUserProps } from 'types';
import EmptyTagged from './empty-tagged';

/* -------------------------------------------------------------------------- */

type Props = {
  profile: ReturnGetUserProps;
};

const Posts: FC<Props> = ({
  profile: {
    user: { fullName },
  },
}) => <EmptyTagged fullName={fullName} />;

export default Posts;
