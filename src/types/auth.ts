export type RegisterDataProps = {
  firstName: string;
  lastName?: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginDataProps = {
  usernameOrEmail: string;
  password: string;
};

export type DecodeProps = {
  id: string;
  exp: number;
  iat: number;
};
