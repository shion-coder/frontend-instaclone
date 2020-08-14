import React, { FC } from 'react';

import { Container } from './new-post-modal.style';

/* -------------------------------------------------------------------------- */

type Props = {
  image: File | null;
};

const NewPostModal: FC<Props> = ({ image }) => {
  return (
    <Container>
      <img alt="img" src={URL.createObjectURL(image)} />
    </Container>
  );
};

export default NewPostModal;
