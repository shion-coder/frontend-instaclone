import { UserProps, NotificationProps } from './data';

/* -------------------------------------------------------------------------- */

export type ReturnAuthProps = {
  user: UserProps;
  token: string;
};

export type ReturnConfirmProps = {
  message: string;
};

export type ReturnUpdateAvatarProps = {
  avatar: string;
};

export type ReturnUpdateProfileProps = {
  user: UserProps;
};

export type ReturnFollowProps = {
  isFollowing: boolean;
};

export type ReturnMeProps = {
  user: UserProps;
};

export type ReturnGetUserProps = {
  user: UserProps;
  isFollowing: boolean;
};

export type ReturnGetFollowProps = {
  users: ReturnGetUserProps[];
  next: number;
};

export type ReturnGetNotificationsProps = {
  notifications: NotificationProps[];
  unread: number;
  next: number;
};
