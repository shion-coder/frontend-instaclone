import React, { FC } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import { ReturnGetPostProps } from 'types';
import { useCustomHistory, useGetComments } from 'hooks';
import { formatDate } from 'utils';
import Avatar from 'components/common/avatar';
import Comment, { CommentLoading } from './comment';

import { Container, Caption, Body, Content, Name, Message, Stats, Date, LoadComments } from './comments.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  data: ReturnGetPostProps;
};

const Comments: FC<Props> = ({
  data: {
    post: {
      _id,
      author: { avatar, username, fullName },
      caption,
      date,
    },
  },
}) => {
  const { goUser } = useCustomHistory(username);
  const { data, isLoading, isFetchingMore, fetchMore, canFetchMore } = useGetComments(_id);

  const handleLoadComments = () => fetchMore();

  const renderComments = () => {
    if (isLoading) {
      return (
        <>
          <CommentLoading />
          <CommentLoading />
          <CommentLoading />
        </>
      );
    }

    if (data) {
      if (data[0].comments.length === 0) {
        return;
      }

      return data.map((page, i) => (
        <React.Fragment key={i}>
          {page.comments &&
            page.comments.map((comment) => {
              return <Comment key={comment._id} postId={_id} data={comment} />;
            })}
        </React.Fragment>
      ));
    }
  };

  return (
    <Container>
      {caption && (
        <Caption container alignItems="center">
          <Grid item>
            <Avatar src={avatar} width="2.5rem" height="2.5rem" cursor onClick={goUser} />
          </Grid>

          <Body item>
            <Content>
              <Name onClick={goUser}>{fullName}</Name>

              <Message>{caption}</Message>
            </Content>

            <Stats>
              <Date>{formatDate(date)}</Date>
            </Stats>
          </Body>
        </Caption>
      )}

      {canFetchMore && (
        <LoadComments item container justify="center">
          <IconButton onClick={handleLoadComments} disabled={isLoading}>
            <AddCircleOutlineIcon />
          </IconButton>
        </LoadComments>
      )}

      {isFetchingMore === 'next' && <CommentLoading />}

      {renderComments()}
    </Container>
  );
};

export default Comments;
