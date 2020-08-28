export type UserConfirmProps = {
  message: string;
};

export type UpdateProfileProps = {
  firstName: string;
  lastName: string;
  username: string;
  website: string;
  bio: string;
  email: string;
};

export type UpdatePasswordProps = {
  password: string;
  newPassword: string;
  confirmNewPassword: string;
};
