export type AuthResultProps = {
  user: {
    firstName: string;
    lastName: string;
    fullName: string;
    username: string;
    email: string;
  };
  token: string;
};

export type UserConfirmProps = {
  message: string;
};

export type AuthErrors = {
  errors: Record<string, unknown>;
};

export type DecodeProps = {
  id: string;
  exp: number;
  iat: number;
};
