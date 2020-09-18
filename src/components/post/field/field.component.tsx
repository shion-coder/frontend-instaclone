import React, { Dispatch, SetStateAction, RefObject, ChangeEvent, FC, FormEvent, useState } from 'react';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import { ReturnGetPostProps, CommentProps } from 'types';
import { useCreateComment } from 'hooks';

import { Wrapper, Form, StyledInputBase as InputBase } from './field.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  data: ReturnGetPostProps;
  inputRef: RefObject<HTMLInputElement>;
  setComments?: Dispatch<SetStateAction<CommentProps[]>>;
};

const Field: FC<Props> = ({
  data: {
    post: { _id },
  },
  inputRef,
  setComments,
}) => {
  const [value, setValue] = useState('');

  const { createComment, isLoading } = useCreateComment(_id, setValue, setComments);

  /**
   * Handle comment form
   */

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createComment({ message: value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper container alignItems="center">
        <InputBase
          inputRef={inputRef}
          placeholder="Add a comment ..."
          fullWidth
          value={value}
          onChange={handleChange}
          disabled={isLoading}
        />

        <IconButton type="submit" disabled={value.length === 0 || isLoading}>
          <SendIcon fontSize="small" />
        </IconButton>
      </Wrapper>
    </Form>
  );
};

export default Field;
