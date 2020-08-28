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

export type GetNotificationsProps = {
  user: {
    _id: string;
    notifications: NotificationProps[];
  };
};
