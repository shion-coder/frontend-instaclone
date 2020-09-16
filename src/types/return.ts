import { UserProps, NotificationProps, PostProps, CommentProps } from './data';

/* -------------------------------------------------------------------------- */

export type ReturnAuthProps = {
  user: UserProps & {
    token: string;
  };
};

export type ReturnConfirmProps = {
  message: string;
};

export type ReturnMeProps = {
  user: UserProps;
};

export type ReturnGetUserProps = {
  user: UserProps;
  isFollowing: boolean;
  isCurrentUser: boolean;
};

export type ReturnSearchUsernameProps = {
  users: UserProps[];
  next?: number;
};

export type ReturnGetSuggestedUsers = {
  users: UserProps[];
};

export type ReturnGetFollowProps = {
  users: ReturnGetUserProps[];
  next?: number;
};

export type ReturnGetNotificationsProps = {
  notifications: NotificationProps[];
  unread: number;
  next?: number;
};

export type ReturnGetPostsFeed = {
  posts: ReturnGetPostProps[];
  next?: number;
};

export type ReturnGetSuggestedPostsProps = {
  posts: PostProps[];
  next?: number;
};

export type ReturnGetPostsProps = {
  posts?: PostProps[];
  next?: number;
};

export type ReturnGetPostProps = {
  post: PostProps & {
    author: { isFollowing: boolean };
  };
  isMine: boolean;
  isLiked: boolean;
  isSaved: boolean;
};

export type ReturnGetCommentsProps = {
  comments: (CommentProps & { isMine: boolean; isLiked: boolean })[];
  next?: number;
};

export type ReturnCreatePost = {
  post: PostProps;
};

export type ReturnCreateComment = {
  comment: CommentProps;
};

export type ReturnUpdateAvatarProps = {
  avatar: string;
};

export type ReturnUpdateProfileProps = {
  user: UserProps;
};

export type ReturnReadNotificationsProps = {
  message: string;
};

export type ReturnResendEmailProps = {
  message: string;
};

export type ReturnFollowProps = {
  isFollowing: boolean;
};

export type ReturnLikePost = {
  isLiked: boolean;
};

export type ReturnLikeComment = {
  isLiked: boolean;
};

export type ReturnSavePost = {
  isSaved: boolean;
};
