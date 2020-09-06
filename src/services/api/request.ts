import { CancelTokenSource } from 'axios';

import {
  ReturnAuthProps,
  ReturnConfirmProps,
  ReturnMeProps,
  ReturnGetNotificationsProps,
  ReturnGetUserProps,
  ReturnGetFollowProps,
  ReturnGetPostsProps,
  ReturnGetPostProps,
  ReturnCreatePost,
  ReturnUpdateAvatarProps,
  ReturnUpdateProfileProps,
  ReturnReadNotificationsProps,
  ReturnResendEmailProps,
  ReturnFollowProps,
  RegisterProps,
  LoginProps,
  UpdateProfileProps,
  UpdatePasswordProps,
  Endpoint,
} from 'types';

import { http } from './axios';

/* -------------------------------------------------------------------------- */

/**
 * Request register
 */

export const requestRegister = (values: RegisterProps): Promise<ReturnAuthProps> =>
  http.post(Endpoint.REGISTER, values).then((res) => res.data);

/**
 * Request login
 */

export const requestLogin = (values: LoginProps): Promise<ReturnAuthProps> =>
  http.post(Endpoint.LOGIN, values).then((res) => res.data);

/**
 * Request confirm email
 */

export const requestConfirmEmail = (id: string): Promise<ReturnConfirmProps> =>
  http.put<ReturnConfirmProps>(`${Endpoint.CONFIRM}/${id}`).then((res) => res.data);

/**
 * Request get current user info
 */

export const requestGetMe = (): Promise<ReturnMeProps> =>
  http.get<ReturnMeProps>(Endpoint.GET_ME).then((res) => res.data);

/**
 * Request get notifications
 */

export const requestGetNotifications = (offset: unknown): Promise<ReturnGetNotificationsProps> =>
  http.get<ReturnGetNotificationsProps>(`${Endpoint.NOTIFICATIONS}/${offset}`).then((res) => res.data);

/**
 * Request get user with username
 */

export const requestGetUser = (username: string): Promise<ReturnGetUserProps> =>
  http.get<ReturnGetUserProps>(`${Endpoint.GET_USER}/${username}`).then((res) => res.data);

/**
 * Request get followers / following
 */

export const requestGetFollow = (username: string, offset: unknown, route: string): Promise<ReturnGetFollowProps> =>
  http.get<ReturnGetFollowProps>(`${Endpoint.GET_USER}/${username}/${offset}/${route}`).then((res) => res.data);

/**
 * Request get posts
 */

export const requestGetPosts = (username: string, offset: unknown): Promise<ReturnGetPostsProps> =>
  http.get<ReturnGetPostsProps>(`${Endpoint.GET_USER}/${username}/posts/${offset}`).then((res) => res.data);

/**
 * Request get post
 */

export const requestGetPost = (id: string): Promise<ReturnGetPostProps> =>
  http.get<ReturnGetPostProps>(`${Endpoint.POST}/${id}`).then((res) => res.data);

/**
 * Request create new post
 */

export const requestCreatePost = (
  formData: FormData | undefined,
  source: CancelTokenSource,
): Promise<ReturnCreatePost> =>
  http
    .post<ReturnCreatePost>(Endpoint.POST, formData, {
      cancelToken: source.token,
    })
    .then((res) => res.data);

/**
 * Request update new avatar
 */

export const requestUpdateAvatar = (formData: FormData | undefined): Promise<ReturnUpdateAvatarProps> =>
  http.put<ReturnUpdateAvatarProps>(Endpoint.UPDATE_AVATAR, formData).then((res) => res.data);

/**
 * Request update profile
 */

export const requestUpdateProfile = (profile: UpdateProfileProps): Promise<ReturnUpdateProfileProps> =>
  http.put<ReturnUpdateProfileProps>(Endpoint.UPDATE_PROFILE, profile).then((res) => res.data);

/**
 * Request update password
 */

export const requestUpdatePassword = (password: UpdatePasswordProps): Promise<null> =>
  http.put(Endpoint.UPDATE_PASSWORD, password).then((res) => res.data);

/**
 * Request read notifications
 */

export const requestReadNotifications = (): Promise<ReturnReadNotificationsProps> =>
  http.put<ReturnReadNotificationsProps>(Endpoint.NOTIFICATIONS).then((res) => res.data);

/**
 * Request read notifications
 */

export const requestResendEmail = (): Promise<ReturnResendEmailProps> =>
  http.post<ReturnResendEmailProps>(Endpoint.RESEND_EMAIL).then((res) => res.data);

/**
 * Request follow / unfollow user with username
 */

export const requestFollow = (username: string): Promise<ReturnFollowProps> =>
  http.post<ReturnFollowProps>(`${Endpoint.GET_USER}/${username}/follow`).then((res) => res.data);
