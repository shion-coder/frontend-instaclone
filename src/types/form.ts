export type RegisterInformationStageProps = {
  firstName: string;
  lastName?: string;
  username: string;
  email: string;
};

export type RegisterPasswordStageProps = {
  password: string;
  confirmPassword: string;
};

export type RegisterProps = {
  firstName: string;
  lastName?: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginProps = {
  usernameOrEmail: string;
  password: string;
};

export type UpdateProfileProps = {
  firstName: string;
  lastName?: string;
  username: string;
  website?: string;
  bio?: string;
  email: string;
};

export type UpdatePasswordProps = {
  password: string;
  newPassword: string;
  confirmNewPassword: string;
};
