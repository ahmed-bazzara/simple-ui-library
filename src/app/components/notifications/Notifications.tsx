import React, { memo, useState, useCallback } from 'react';
import { ButtonProps } from 'app/components/buttons/Button';
import { SnackbarType } from 'app/components';
import NotificationContext from './notifications.context';
import Notification from './Notification';

export interface NotificationOptions {
  type?: SnackbarType;
  title?: string;
  message: string;
  multiLine?: boolean;
  dismissLabel?: string;
  buttonProps?: ButtonProps[];
  timeout?: number;
}

interface NotificationsProps {
  children: React.ReactNode;
  defaultTimeout?: number;
}

const defaultProps = { defaultTimeout: 5000 };

const Notifications: React.FC<NotificationsProps> = (props) => {
  const { children, defaultTimeout = 5000 } = { ...defaultProps, ...props };
  const [notifications, setNotifications] = useState<NotificationOptions[]>([]);
  const [notificationId, setNotificationId] = useState(0);

  const notify = useCallback(
    (notification: NotificationOptions) => {
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        notification,
      ]);
    },
    [setNotifications],
  );

  const handleExit = useCallback(() => {
    setNotifications((prevNotifications) => {
      const [, ...nextNotifications] = prevNotifications;

      return nextNotifications;
    });

    setNotificationId((prevId) => prevId + 1);
  }, [setNotifications, setNotificationId]);

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      {notifications.length > 0 && (
        <Notification
          key={notificationId}
          defaultTimeout={defaultTimeout}
          onExit={handleExit}
          options={notifications[0]}
        />
      )}
    </NotificationContext.Provider>
  );
};

export default memo(Notifications);
