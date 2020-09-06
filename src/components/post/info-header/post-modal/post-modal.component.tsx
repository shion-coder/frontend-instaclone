import React, { FC } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import { Container, Item, Text } from './post-modal.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  closeModal: () => void;
};

const PostModal: FC<Props> = ({ closeModal }) => {
  const handleCopy = () => {
    closeModal();
  };

  return (
    <Container>
      <Item button onClick={handleCopy}>
        <CopyToClipboard text={window.location.href}>
          <Text primary="Copy link" />
        </CopyToClipboard>
      </Item>

      <Item button onClick={closeModal}>
        <Text primary="Cancel" />
      </Item>
    </Container>
  );
};

export default PostModal;
