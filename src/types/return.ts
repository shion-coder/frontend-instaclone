import { UserProps, NotificationProps, PostProps } from './data';

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

export type ReturnGetFollowProps = {
  users: ReturnGetUserProps[];
  next?: number;
};

export type ReturnGetNotificationsProps = {
  notifications: NotificationProps[];
  unread: number;
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

export type ReturnCreatePost = {
  post: PostProps;
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
