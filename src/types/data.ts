export type AuthResultProps = {
  user: UserProps;
  token: string;
};

export type UserConfirmProps = {
  message: string;
};

export type Errors = {
  errors: Record<string, unknown>;
};

export type DecodeProps = {
  id: string;
  exp: number;
  iat: number;
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

export type UserProps = {
  _id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  username: string;
  email: string;
  avatar: string;
  bio: string;
  website: string;
  posts: PostProps[];
  postCount: number;
  bookmarks: PostProps[];
  followers: UserProps[];
  followerCount: number;
  following: UserProps[];
  followingCount: number;
  isAdmin: boolean;
  confirmed: boolean;
  date: string;
};

export type GetUserProps = {
  user: UserProps;
  isFollowing: boolean;
};

export type MeProps = {
  user: UserProps;
};

export type ProfileProps = {
  user: UserProps;
};
