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

export type AuthErrors = {
  errors: Record<string, unknown>;
};
