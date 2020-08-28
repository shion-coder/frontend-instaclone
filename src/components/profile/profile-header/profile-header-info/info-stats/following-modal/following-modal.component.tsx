import React, { FC } from 'react';

import { Container } from './following-modal.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  isCurrentUser: boolean;
  closeFollowingModal?: () => void;
};

const FollowingModal: FC<Props> = () => <Container>{}</Container>;

export default FollowingModal;
