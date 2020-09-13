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
  ReturnLikePost,
  RegisterInformationStageProps,
  RegisterProps,
  LoginProps,
  UpdateProfileProps,
  UpdatePasswordProps,
  ENDPOINT,
} from 'types';

import { http } from './axios';

/* -------------------------------------------------------------------------- */

/**
 * Request validate register information stage
 */

export const requestRegisterInformationStage = (values: RegisterInformationStageProps): Promise<null> =>
  http.post(ENDPOINT.REGISTER_INFORMATION_STAGE, values).then((res) => res.data);

/**
 * Request register
 */

export const requestRegister = (values: RegisterProps): Promise<ReturnAuthProps> =>
  http.post<ReturnAuthProps>(ENDPOINT.REGISTER, values).then((res) => res.data);

/**
 * Request login
 */

export const requestLogin = (values: LoginProps): Promise<ReturnAuthProps> =>
  http.post<ReturnAuthProps>(ENDPOINT.LOGIN, values).then((res) => res.data);

/**
 * Request confirm email
 */

export const requestConfirmEmail = (id: string): Promise<ReturnConfirmProps> =>
  http.put<ReturnConfirmProps>(`${ENDPOINT.CONFIRM}/${id}`).then((res) => res.data);

/**
 * Request get current user info
 */

export const requestGetMe = (): Promise<ReturnMeProps> =>
  http.get<ReturnMeProps>(ENDPOINT.GET_ME).then((res) => res.data);

/**
 * Request get notifications
 */

export const requestGetNotifications = (offset: unknown): Promise<ReturnGetNotificationsProps> =>
  http.get<ReturnGetNotificationsProps>(`${ENDPOINT.NOTIFICATIONS}/${offset}`).then((res) => res.data);

/**
 * Request get user with username
 */

export const requestGetUser = (username: string): Promise<ReturnGetUserProps> =>
  http.get<ReturnGetUserProps>(`${ENDPOINT.GET_USER}/${username}`).then((res) => res.data);

/**
 * Request get followers / following
 */

export const requestGetFollow = (username: string, offset: unknown, route: string): Promise<ReturnGetFollowProps> =>
  http.get<ReturnGetFollowProps>(`${ENDPOINT.GET_USER}/${username}/${offset}/${route}`).then((res) => res.data);

/**
 * Request get posts
 */

export const requestGetPosts = (username: string, offset: unknown): Promise<ReturnGetPostsProps> =>
  http.get<ReturnGetPostsProps>(`${ENDPOINT.GET_USER}/${username}/posts/${offset}`).then((res) => res.data);

/**
 * Request get saved
 */

export const requestGetSaved = (username: string, offset: unknown): Promise<ReturnGetPostsProps> =>
  http.get<ReturnGetPostsProps>(`${ENDPOINT.GET_USER}/${username}/saved/${offset}`).then((res) => res.data);

/**
 * Request get tagged
 */

export const requestGetTagged = (username: string, offset: unknown): Promise<ReturnGetPostsProps> =>
  http.get<ReturnGetPostsProps>(`${ENDPOINT.GET_USER}/${username}/tagged/${offset}`).then((res) => res.data);

/**
 * Request get post
 */

export const requestGetPost = (id: string): Promise<ReturnGetPostProps> =>
  http.get<ReturnGetPostProps>(`${ENDPOINT.POST}/${id}`).then((res) => res.data);

/**
 * Request create new post
 */

export const requestCreatePost = (
  formData: FormData | undefined,
  source: CancelTokenSource,
): Promise<ReturnCreatePost> =>
  http
    .post<ReturnCreatePost>(ENDPOINT.POST, formData, {
      cancelToken: source.token,
    })
    .then((res) => res.data);

/**
 * Request update new avatar
 */

export const requestUpdateAvatar = (formData: FormData | undefined): Promise<ReturnUpdateAvatarProps> =>
  http.put<ReturnUpdateAvatarProps>(ENDPOINT.UPDATE_AVATAR, formData).then((res) => res.data);

/**
 * Request update profile
 */

export const requestUpdateProfile = (profile: UpdateProfileProps): Promise<ReturnUpdateProfileProps> =>
  http.put<ReturnUpdateProfileProps>(ENDPOINT.UPDATE_PROFILE, profile).then((res) => res.data);

/**
 * Request update password
 */

export const requestUpdatePassword = (password: UpdatePasswordProps): Promise<null> =>
  http.put(ENDPOINT.UPDATE_PASSWORD, password).then((res) => res.data);

/**
 * Request read notifications
 */

export const requestReadNotifications = (): Promise<ReturnReadNotificationsProps> =>
  http.put<ReturnReadNotificationsProps>(ENDPOINT.NOTIFICATIONS).then((res) => res.data);

/**
 * Request read notifications
 */

export const requestResendEmail = (): Promise<ReturnResendEmailProps> =>
  http.post<ReturnResendEmailProps>(ENDPOINT.RESEND_EMAIL).then((res) => res.data);

/**
 * Request follow / unfollow user with username
 */

export const requestFollow = (username: string): Promise<ReturnFollowProps> =>
  http.post<ReturnFollowProps>(`${ENDPOINT.GET_USER}/${username}/follow`).then((res) => res.data);

/**
 * Request delete post
 */

export const requestDeletePost = (id: string): Promise<null> =>
  http.delete(`${ENDPOINT.POST}/${id}`).then((res) => res.data);

/**
 * Request like post
 */

export const requestLikePost = (id: string): Promise<ReturnLikePost> =>
  http.post<ReturnLikePost>(`${ENDPOINT.POST}/${id}/like`).then((res) => res.data);
