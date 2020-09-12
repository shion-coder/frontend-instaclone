import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import { Wrapper, Form, StyledInputBase as InputBase } from './field.styles';

/* -------------------------------------------------------------------------- */

const Field: FC = () => {
  /**
   * Handlee comment form
   */

  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper container alignItems="center">
        <InputBase placeholder="Add a comment ..." fullWidth value={value} onChange={handleChange} />

        <IconButton type="submit">
          <SendIcon fontSize="small" />
        </IconButton>
      </Wrapper>
    </Form>
  );
};

export default Field;
