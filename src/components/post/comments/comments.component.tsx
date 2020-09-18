import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

import { ReturnGetPostProps } from 'types';
import { useCustomHistory, useGetComments } from 'hooks';
import { formatDate } from 'utils';
import Avatar from 'components/common/avatar';
import Comment, { CommentLoading } from './comment';

import { Container, Caption, Body, Content, Name, Message, Stats, Date, LoadMore } from './comments.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  data: ReturnGetPostProps;
  height?: string;
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
  height,
}) => {
  const { goUser } = useCustomHistory(username);
  const { ref, data, isLoading, canFetchMore } = useGetComments(_id);

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
    <Container height={height}>
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

      {renderComments()}

      {canFetchMore && (
        <LoadMore ref={ref}>
          <CommentLoading />
        </LoadMore>
      )}
    </Container>
  );
};

export default Comments;
