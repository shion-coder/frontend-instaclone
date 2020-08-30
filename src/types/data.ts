export type UserProps = {
  _id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  username: string;
  email: string;
  website: string;
  bio: string;
  avatar: string;
  posts: PostProps[];
  postCount: number;
  bookmarks: PostProps[];
  followers: FollowProps[];
  followerCount: number;
  following: FollowProps[];
  followingCount: number;
  isAdmin: boolean;
  confirmed: boolean;
  date: string;
};

export type FollowProps = {
  user: UserProps;
  isFollowing: boolean;
};

export type PostProps = {
  image: string;
  thumbnail?: string;
  filter?: string;
  caption?: string;
  tags?: { type: string }[];
  likes?: UserProps[];
  likeCount?: number;
  comments?: CommentProps[];
  commentCount?: number;
  author: PostProps;
  date: string;
};

export type CommentProps = {
  message: string;
  post: PostProps;
  author: UserProps;
  date: string;
};

export type NotificationProps = {
  _id: string;
  notificationType: string;
  notificationData?: Record<string, unknown>;
  sender: {
    fistName: string;
    lastName: string;
    username: string;
    email: string;
    avatar: string;
    followers: string[];
  };
  receiver: string;
  read: boolean;
  date: string;
};
