import { ReturnGetUserProps } from './return';

/* -------------------------------------------------------------------------- */

export type UserProps = {
  _id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  username: string;
  email: string;
  bio: string;
  website: string;
  avatar: string;
  posts: PostProps[];
  postCount: number;
  saved: PostProps[];
  followers: ReturnGetUserProps[];
  followerCount: number;
  following: ReturnGetUserProps[];
  followingCount: number;
  notifications: NotificationProps[];
  isAdmin: boolean;
  confirmed: boolean;
  date: string;
};

export type PostProps = {
  _id: string;
  image: string;
  thumbnail: string;
  filter: string;
  caption: string;
  tags: { type: string }[];
  likes: UserProps[];
  likeCount: number;
  comments: CommentProps[];
  commentCount: number;
  author: UserProps;
  date: string;
};

export type CommentProps = {
  _id: string;
  message: string;
  post: PostProps;
  author: UserProps;
  date: string;
};

export type NotificationProps = {
  _id: string;
  notificationType: string;
  notificationData: {
    postId: string;
    image: string;
    filter: string;
  };
  sender: UserProps;
  receiver: string;
  read: boolean;
  date: string;
};
