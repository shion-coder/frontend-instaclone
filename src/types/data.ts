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
  followers: FollowerProps[];
  followerCount: number;
  following: FollowingProps[];
  followingCount: number;
  isAdmin: boolean;
  confirmed: boolean;
  date: string;
};

export type FollowerProps = {
  user: UserProps;
  isFollowing: boolean;
};

export type FollowingProps = {
  user: UserProps;
  isFollowing: boolean;
};

export type MeProps = {
  user: UserProps;
};

export type ProfileProps = {
  user: UserProps;
};

export type AvatarProps = {
  avatar: string;
};

export type GetUserProps = {
  user: UserProps;
  isFollowing: boolean;
};

export type FollowProps = {
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
